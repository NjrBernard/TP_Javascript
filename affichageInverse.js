let i=0;
let array = [1, 15, -3, 0, 8, 7, 4, -2, -2, 7, -1, 1, 2, 3, 0, 14, -4];
let chaine = [];
console.log("Tableau 1, affichage normal");
while (i!=array.length) {
    chaine[i] = array[i];
    i++;
}
console.log(chaine);
console.log("\n Tableau 2, affichage inverse");

i=0;
chaine = [];
while (i!=array.length) {
    chaine[i] = array[array.length-1-i];
    i++;
}
    console.log(chaine);

let arrayCopy = [];
i=0;
while (i!=array.length) {
    arrayCopy[i] = array[i];
    i++;
}
console.log("\n Tableau 3: Copie de array");
console.log(arrayCopy);
