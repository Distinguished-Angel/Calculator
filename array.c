#include <stdio.h>
#include <limits.h>

int main() {
    int array2D[2][3] = {{14, 22, 7}, {5, 18, 11}};
    int array3D[2][2][2] = {
        {{30, 12}, {45, 6}},
        {{9, 21}, {3, 27}}
    };

    
    // Memory address
    printf("Memory address of 2D array: %p\n", (void*)array2D);
    printf("Memory address of 3D array: %p\n", (void*)array3D);

    // Find min and max in 2D
    int min2D = INT_MAX, max2D = INT_MIN;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            if (array2D[i][j] < min2D) min2D = array2D[i][j];
            if (array2D[i][j] > max2D) max2D = array2D[i][j];
        }
    }

    // Find min and max in 3D
    int min3D = INT_MAX, max3D = INT_MIN;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
                if (array3D[i][j][k] < min3D) min3D = array3D[i][j][k];
                if (array3D[i][j][k] > max3D) max3D = array3D[i][j][k];
            }
        }
    }

    // Print results
    printf("2D Array: Min = %d, Max = %d\n", min2D, max2D);
    printf("3D Array: Min = %d, Max = %d\n", min3D, max3D);

    return 0;
}
