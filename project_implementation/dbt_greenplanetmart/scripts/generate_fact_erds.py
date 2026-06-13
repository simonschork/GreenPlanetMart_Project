#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path


SCRIPT_DIR = Path(__file__).resolve().parent
OUTPUT_DIR = SCRIPT_DIR / "output"
MMD_DIR = OUTPUT_DIR / "mmd"
SOURCE_ERD = MMD_DIR / "erd.mmd"

FACT_NAMES = [
    "FCT_INVENTORY_SNAPSHOT",
    "FCT_ORDER_FULFILLMENT",
    "FCT_PROCUREMENT_SCHEDULE",
    "FCT_SALES_BILLING",
    "FCT_SALES_PRICING",
]

ENTITY_PATTERN = re.compile(
    r'^\s*"(?P<name>[^"]+)" \{\n(?P<body>.*?)(?=^\s*\})^\s*\}\n',
    re.MULTILINE | re.DOTALL,
)
RELATION_PATTERN = re.compile(r'^\s*"[^"]+" \}\|--\|\| "[^"]+": .+$', re.MULTILINE)


def load_entities(text: str) -> dict[str, str]:
    return {
        match.group("name"): f'  "{match.group("name")}" {{\n{match.group("body")}  }}\n'
        for match in ENTITY_PATTERN.finditer(text)
    }


def load_relations(text: str) -> list[str]:
    return RELATION_PATTERN.findall(text)


def fact_file_name(entity_name: str) -> str:
    fact_name = entity_name.split(".")[-1].lower()
    return f"erd_{fact_name}.mmd"


def main() -> None:
    MMD_DIR.mkdir(parents=True, exist_ok=True)
    text = SOURCE_ERD.read_text()
    entities = load_entities(text)
    relations = load_relations(text)

    for fact_name in FACT_NAMES:
        fact_entity = f"MODEL.GREENPLANETMART.{fact_name}"
        fact_relations = [line for line in relations if f'"{fact_entity}"' in line]

        if not fact_relations:
            raise SystemExit(f"No relations found for {fact_entity}")

        related_entities = {fact_entity}
        for line in fact_relations:
            related_entities.update(re.findall(r'"([^"]+)"', line))

        missing_entities = sorted(name for name in related_entities if name not in entities)
        if missing_entities:
            raise SystemExit(
                f"Missing entity definitions for {fact_entity}: {', '.join(missing_entities)}"
            )

        blocks = [entities[fact_entity]]
        blocks.extend(
            entities[name] for name in sorted(related_entities - {fact_entity})
        )
        output = "erDiagram\n" + "".join(blocks) + "\n".join(fact_relations) + "\n"

        (MMD_DIR / fact_file_name(fact_entity)).write_text(output)
        print(f"Wrote {fact_file_name(fact_entity)}")


if __name__ == "__main__":
    main()
