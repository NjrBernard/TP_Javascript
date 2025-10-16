let i=0;
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let chaine = [array[0]];

while (i!=array.length) {
    i++;
    if (array[i]<chaine[0]) {
        chaine[0] = array[i];
    }  
}
console.log("\n Valeur minimale du tableau:");
console.log(chaine[0]);
