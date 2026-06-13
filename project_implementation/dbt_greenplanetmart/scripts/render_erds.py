#!/usr/bin/env python3
from __future__ import annotations

import subprocess
from pathlib import Path


SCRIPT_DIR = Path(__file__).resolve().parent
OUTPUT_DIR = SCRIPT_DIR / "output"
MMD_DIR = OUTPUT_DIR / "mmd"
SVG_DIR = OUTPUT_DIR / "svg"
PNG_DIR = OUTPUT_DIR / "png"
PNG_WIDTH = 3200
PNG_SCALE = 2


def main() -> None:
    SVG_DIR.mkdir(parents=True, exist_ok=True)
    PNG_DIR.mkdir(parents=True, exist_ok=True)

    mmd_files = sorted(MMD_DIR.glob("*.mmd"))
    if not mmd_files:
        raise SystemExit(f"No .mmd files found in {MMD_DIR}")

    for mmd_file in mmd_files:
        png_file = PNG_DIR / f"{mmd_file.stem}.png"
        subprocess.run(
            [
                "mmdc",
                "-i",
                str(mmd_file),
                "-o",
                str(png_file),
                "-w",
                str(PNG_WIDTH),
                "-s",
                str(PNG_SCALE),
            ],
            check=True,
        )
        print(f"Rendered {png_file.name}")


if __name__ == "__main__":
    main()
