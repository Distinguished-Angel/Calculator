#include <stdio.h>
#include <stdlib.h> 
int main() {
    int a,
    b = scanf("%d", &a);
    if (b < 0) {    
        printf("Negative number\n");
    } else if (a == 0) {
        printf("Zero\n");
    } else {
        printf("Positive number\n");
    }
}