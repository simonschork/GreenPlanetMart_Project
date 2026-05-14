#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
DB_PATH="$PROJECT_ROOT/project_implementation/warehouse/greenplanetmart.duckdb"
SOURCE_DIR="$PROJECT_ROOT/project_implementation/source_data"

if [ "$#" -gt 0 ]; then
    TABLES=("$@")
else
    TABLES=()
    while IFS= read -r csv_file; do
        TABLES+=("$(basename "$csv_file" .csv)")
    done < <(find "$SOURCE_DIR" -maxdepth 1 -name '*.csv' | sort)
fi

duckdb "$DB_PATH" -c "CREATE SCHEMA IF NOT EXISTS raw;"

for table_name in "${TABLES[@]}"; do
    csv_path="$SOURCE_DIR/$table_name.csv"

    if [ ! -f "$csv_path" ]; then
        echo "Missing source file: $csv_path" >&2
        exit 1
    fi

    echo "Loading raw.$table_name from $csv_path"
    duckdb "$DB_PATH" -c "CREATE OR REPLACE TABLE raw.$table_name AS SELECT * FROM read_csv('$csv_path', header = true, all_varchar = true, quote = '\"', escape = '\"', null_padding = true, strict_mode = false);"
done

echo "Loaded ${#TABLES[@]} raw tables into $DB_PATH"
