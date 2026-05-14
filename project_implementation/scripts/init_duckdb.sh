#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
DB_PATH="$PROJECT_ROOT/project_implementation/warehouse/greenplanetmart.duckdb"
INIT_SQL="$PROJECT_ROOT/project_implementation/warehouse/init.sql"

duckdb "$DB_PATH" < "$INIT_SQL"
echo "Initialized DuckDB at $DB_PATH"

