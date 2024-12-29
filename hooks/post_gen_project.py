#!/usr/bin/env python
from __future__ import annotations

import os
import shutil
from pathlib import Path

PROJECT_DIRECTORY = os.path.realpath(os.path.curdir)


def remove_file(filepath: str) -> None:
    os.remove(os.path.join(PROJECT_DIRECTORY, filepath))


def remove_dir(filepath: str) -> None:
    shutil.rmtree(os.path.join(PROJECT_DIRECTORY, filepath))


if __name__ == "__main__":
    project_slug = "{{cookiecutter.project_slug}}"

    # Move everything inside the Project Directory to the root of the project
    project_dir = Path(PROJECT_DIRECTORY)
    parent_dir = project_dir.parent

    for item in project_dir.iterdir():
        if item.is_dir():
            if (parent_dir / item.name).exists():
                shutil.rmtree(parent_dir / item.name, ignore_errors=True)

            shutil.move(
                item.resolve().absolute().as_posix(),
                project_dir.parent.resolve().absolute().as_posix(),
            )
        elif item.is_file():
            if (parent_dir / item.name).exists():
                os.remove(parent_dir / item.name)

            shutil.move(
                item.resolve().absolute().as_posix(),
                project_dir.parent.resolve().absolute().as_posix(),
            )

    # Remove the Project Directory
    shutil.rmtree(project_dir, ignore_errors=True)
