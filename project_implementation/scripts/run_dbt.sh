#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
DBT_PROJECT_DIR="$PROJECT_ROOT/project_implementation/dbt_greenplanetmart"
DBT_PROFILES_DIR="$DBT_PROJECT_DIR"

if [ ! -x "$PROJECT_ROOT/.venv/bin/dbt" ]; then
    echo "dbt is not installed in .venv"
    exit 1
fi

cd "$DBT_PROJECT_DIR"
DBT_PROFILES_DIR="$DBT_PROFILES_DIR" "$PROJECT_ROOT/.venv/bin/dbt" "$@"
