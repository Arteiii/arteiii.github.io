---
slug: redhat1x1
title: Red Hat 1x1
authors: [arteii]
keywords: [linux101, Linux, Linux 1x1. Linux Cheat Sheet, Red Hat]
date: 2023-07-15T18:00
draft: true
---

everything is a file and what is not should be one

<!--truncate-->

>

## Linux File System

```shell
show file attributes:
   # ls -li (inode number, file type, permission, linkcounter, owner, group, size, modification time, name)
   # ls -li /etc/passwd
   3320599 -rw-r--r-- 1 root root 1825 Jun 18 18:49 /etc/passwd
   |       ||         | |    |    |    ~~~~~~~~~~~~ |
   |       ||         | |    |    |    |            +--> filename, all characters valid
   |       ||         | |    |    |    |                 exception "/", up to 256 characters long
   |       ||         | |    |    |    +---------------> timestamp of the last change
   |       ||         | |    |    |                      # stat /etc/passwd
   |       ||         | |    |    |                       the other timestamps are displayed
   |       ||         | |    |    |                       -creation, -modification, -lastaccess
   |       ||         | |    |    +--------------------> size in byte, option -h "human readable format"
   |       ||         | |    |                           option -s number of blocks used
   |       ||         | |    +-------------------------> group identifier
   |       ||         | +------------------------------> property recognition
   |       ||         +--------------------------------> reference counter/link counter
   |       |+------------------------------------------> access rights of the user classes:
   |       |                                             u=rw-, g=r-- und o=r--
   |       +-------------------------------------------> file type:
   |                                                         - regular file
   |                                                         d directory
   |                                                         l symbolic link
   |                                                         b block device file
   |                                                         c charcter device file
   |                                                         s socket
   |                                                         p named pipe/fifo
   |                                                         D doors file (solaris only)
   +---------------------------------------------------> inode number
```

## overview of the file tree

"linux filesystem hierachy standard directories, fhs":

| directories |                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| /           | root directory                                                                                                           |
| /bin        | always part of root filesystem, contains executable programs                                                             |
| /boot       | directory for the bootloader grub, contains kernel(s) and initrd(s) among others                                         |
| /dev        | always part of the root filesystem, contains device files "special files", e.g. /dev/sda3                                |
| /etc        | most configuration files                                                                                                 |
| /home       | home directories for the users                                                                                           |
| /lib        | libraries for programs                                                                                                   |
| /media      | for removable filesystem cd/dvd, floppy, ... , automount via udev ...                                                    |
| /misc       | standard directory for local filesystem, automounter                                                                     |
| /mnt        | mount point for temporary mounting of filesystems                                                                        |
| /net        | mount point for remote filesystems (nfs, smb, ...), automounter                                                          |
| /smb        | mount point for windows shares                                                                                           |
| /opt        | third party software, e.g. openoffice, oracle, ...                                                                       |
| /proc       | pseudo filesystem, kernel view on hardware, process table, kernel configuration, ...                                     |
| /sys        | pseudo filesystem, kernel view on hardware, process table, kernel configuration, ...                                     |
| /run        | ???                                                                                                                      |
| /root       | home directory of user root                                                                                              |
| /sbin       | system programs, actually "static linked" programs in other unix systems                                                 |
| /selinux    | security enhanced linux configuration                                                                                    |
| /srv        | for non-redhat distribution base directory for many server services                                                      |
| /tftpboot   | default directory for tftp service                                                                                       |
| /tmp        | storage of temporary files, sticky-bit                                                                                   |
| /usr        | "unix system resources", contains bin, sbin, lib nd src                                                                  |
| /var        | variable-size data for, among other things, log files ("messages"), printer queue ("spool") and electronic mail ("mail") |

## commands to the file tree

assigned to the file attributes:

```shell
$ ls -li /etc/passwd
   3320599 -rw-r--r-- 1 root root 1825 Jun 18 18:49 /etc/passwd
   |       ||         | |    |    |    ~~~~~~~~~~~~ |
   |       ||         | |    |    |    |            +--> ls, mv, cp, ln, touch, rm,
   |       ||         | |    |    |    |                 rmdir, rsync, find, cd, pwd
   |       ||         | |    |    |    |                 cat, view, more, pg, less, vi
   |       ||         | |    |    |    +---------------> ls, find, touch, stat
   |       ||         | |    |    +--------------------> ls
   |       ||         | |    +-------------------------> ls, chgrp
   |       ||         | +------------------------------> ls, chown
   |       ||         +--------------------------------> ls, ln
   |       |+------------------------------------------> ls, chmod
   |       +-------------------------------------------> ls, stat, file
   +---------------------------------------------------> ls, find ... -inum 3320599
```

### change owner

```shell
   chown -R <other user> <file(s)> # "change owner".
```

### change modification date

```shell
   touch [timestamp] <file(s)>
```

### change group id

```shell
   chgrp -R <other group> <file(s)> # "change group
```

### change filename, move files

```shell
   mv <old name> <new name> # "rename"
   mv <old location> <new location> # "move"
```

### change access rights

```shell
   chmod -R 755 <file(s)>
   # note: rwx => r=4, w=2, x=1, 7=rwx, 5=r-x
              421
   chmod u=rwx,go=rx <file(s)>
```

## Terminal Usage

general terminal control:

```shell
   - <strg>-k           delete input from cursor right
   - <strg>-u           delete input from cursor left
   - <strg>-y           reinsert deleted input
   - <strg>-a           beginning of line
   - <strg>-e           end of line
   - <alt><backspace>   delete word by word from right to left
```

## VI

commands:

cursor control:

```shell
   h(left)    j(down)    k(up)    l(right)
```

delete:

```shell
   x act. sign
   X PREVIOUS CHARACTER
   dd act. line
   J Add the line below to the current line
   dw Delete (cut) characters of the word under the cursor up to the next word.
```

Activate ex mode:

```shell
   :wq!      done ... "write and quit forced!"
   :q!       "quit without write forced!"
   /<muster>      search forward
   ?<muster>      search backwards
   n         last search repeat forward
   N         last search repeat backwards
```

eingabe modus aktivieren:

```shell
   i Insert before cursor
   A Append at end of line
   I Insert at beginning of line
   o Insert in a new line, below the current line
   O Insert in a new line, above the current line
```

"nice to know"

```shell
    ct<char>    : change till <char>, ersetze alles bis <char>
    d/<muster>  : delete till pattern
    4d/<muster> : delete till 4. pattern
    %   : search corresponding brace

    cW          : change rest of word till whitespace
    K           : search keyword in manual
    <strg>-p    : autocompletion text "previous" vim!
    <strg>-n    : autocompletion text "next"     vim!
    <strg>-x+<strg>-f: autocompletion filename
    gg          : go to start of file
    G           : go to end of file
    #G          : go to x-th. line
    ^           : go to first non whitespace
    0   : go to begin of line
    $           : go to end of line
    zz          : center current line on screen
    dG          : delete till end of file
    dgg         : delete till begin of file
    d22G        : delet till 22.th line
    d%   : delete till corresponding brace
    C           : change rest of line
    :!command   : start command adn exit to vi
    :r!command  : insert output from <command>
    :n          : go to next file
    :N          : go to previous file
    :e#         : go to previous/other file
    :tab <file> : open new file in tab
    vi -p <file1> <file2>
                : open files in tab
    gt          : go to next tab
    gT          : go to previous tab

    xp          : toggle 2 charcters
```

note: in input mode, control characters can be entered with ctrl-v+`<control character>`.
can be entered!

compare contents of files with the vi:

```shell
   vi -d datei1 datei2 [datei3 ... datei#]
   ( strg-w+strg-w  toggle between windows
     dp      put changes to other window )
     do      get changes to other window )
```
