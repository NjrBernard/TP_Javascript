let i=0;
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let s=0;

while (i!=array.length) {
    s=s+array[i];
    i++;
}
console.log("\n Moyenne des éléments du tableau:");
console.log(s/array.length);