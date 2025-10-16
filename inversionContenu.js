let array = [1, 15, -3, 0, 8, 7, 4, -2, -2, 7, -1, 1, 2, 3, 0, 14, -4];
let arrayCopy = [];
let i=0;
while (i!=array.length) {
    arrayCopy[i] = array[array.length-1-i];
    i++;
}

console.log("\n Tableau 1: Copie inversée de array");
console.log(array + arrayCopy);