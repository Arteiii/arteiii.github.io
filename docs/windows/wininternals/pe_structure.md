---
sidebar_position: 4
---

# PE-Structure

## Headers and Sections

The header provides metadata about the file.
Following the header, there are several sections that contain valuable information.
Sometimes, section names are modified to complicate analysis.
However, they generally use default titles:

### .text

This section contains instructions for the CPU to execute.
All other sections store data and supporting information. Additionally, this is the only section that should include code and can carry out execution.

### .rdata

.rdata typically includes import and export information, and may also hold read-only data that the program uses.
Sometimes a file contains .idata or .edata, which stores the imports and exports.

### .data

This section stores global data that is accessible from any location within the programme and does not store any local data.

### .pdata

only present at 64-bit executables and stores exception handling information

### .rsrc

This section holds resources necessary for the executable but not deemed as part of the executable itself.
Strings may be saved in either the .rsrc section or the main programme, although they are commonly stored in .rsrc

### .reloc

contains information for relocation of library files
