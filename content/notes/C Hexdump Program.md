---
created: 2025-04-01
confidence level: low
review count: 0
---
## Intro
The goal is to create a hexdump in C. I'll essentially be trying to display binary data in a human readable format.

## More Context
- `unsigned char` for binary data. Why? [[endianness|Endianness]], [[bitwise-ops-c|bitwise operations]], [[sign-extension|sign extension]] issues.
- `size_t` is an `unsigned int` type that is portable across architectures. it is usually used to represent the size of objects in memory e.g. arrays, string, memory allocations. `unsigned int` is 4 bytes on 32-bit systems and could still be 4 bits on 64-bit systems. `size_t` is guaranteed to be 4 bytes on 32-bit systems and 8 bytes on 64-bit systems. this is good for addressing memory larger than 4gb.
- The `fread(buffer, element size, no of elements, stream)` function automatically moves the file pointer forward after reading a chunk of bytes. In the example when used in the while loop, it moves automatically to the start of the next 16-byte after reading a 16-byte chunk.


## Code

```c
#include <stdio.h>
#include <ctype.h>

void print_hex_ln(unsigned char* buffer, size_t bytes_read, size_t* offset) {
    printf("%08zX  ", *offset);  // print offset

    // print hex values
    for (size_t i = 0; i < bytes_read; i++) {
        printf("%02X ", buffer[i]);
    }

    // print ascii representation
    printf("\t");
    for (size_t i = 0; i < bytes_read; i++) {
        printf("%c", isprint(buffer[i]) ? buffer[i] : '.');
    }

    printf("\n");
}

int main(int argc, char** argv) {
    if (argc < 2) {
        printf("usage: %s <filename>\n", argv[0]);
        return 1;
    }

    FILE* fp = fopen(argv[1], "rb");
    if (fp == NULL) {
        printf("error: can't open file %s\n", argv[1]);
        return 1;
    }

    unsigned char buffer[16];
    size_t bytes_read;
    size_t offset = 0;

    while ((bytes_read = fread(buffer, 1, sizeof(buffer), fp)) > 0) {
        print_hex_ln(buffer, bytes_read, &offset);
        offset += bytes_read;
    }

    fclose(fp);
    return 0;
}
```
## Further  Reading
- [[Sign Extension]]
- [[Endianness]]
- [[Bitwise Operations]]