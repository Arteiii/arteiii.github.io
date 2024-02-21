---
sidebar_position: 1
sidebar_label: Linker
---

# Linker

## Debuging Settings

### Generate Debug Info

To ensure that the PDB filename is not included in the executable, follow these steps:

1. Open the project properties in Visual Studio
2. Navigate to ``Configuration Properties -> Linker``
3. Look for the ``Debugging`` option
4. Set the ``Generate Debug Info`` to ``NO``

By default, these settings should exclude the PDB file name.
This is a standard practice to avoid exposing sensitive information about the project structure.

#### Other Options for Generate Debug Info

- ``/DEBUG:FULL``: This option generates full debugging information, including file paths and symbols, in the PDB file
- ``/DEBUG:FASTLINK``: This option is optimized for link time. It generates partial debugging information, aiming to speed up linking
- ``/DEBUG:NONE``: This option excludes debugging information entirely. It's suitable for release builds where debugging is not required
