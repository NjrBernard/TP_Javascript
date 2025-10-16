let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];
let i1=0;
let i2=0;
let c=0;
while (i1 != array1.length) {
    while (i2 != array2.length) {
        if (array1[i1] == array2[i2]) {
            c++;
            break;
        }
        else {
            i2++;
        }
    }

    i1++;
    i2=0;
}
    console.log("\n Nombre d'éléments en commun dans les deux tableaux:");
    console.log(c);