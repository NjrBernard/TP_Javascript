let i=0;
let n=0;
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let chaine = [];
while (i!=array.length) {
    if (array[i]>=3) {
        chaine[n] = array[i];
        n++;
        i++;
    }
    else {
        i++;
    }
}  
console.log("\n Liste des éléments supérieurs à 3:");
console.log(chaine); 

i=0;
chaine = [];
n=0;
while (i!=array.length) {
    if (array[i]%2==0) {
        chaine[n] = array[i];
        n++;
        i++;
    }
    else {
        i++;
    }
}
console.log("\n Liste des éléments pairs:");
console.log(chaine);

i=0;
chaine = [];
n=0;
while ((i)!=array.length) {
    if ((i+1)%2!=0) {
        chaine[n] = array[i];
        n++;
        i++;
    }
    else {
        i++;
    }
}
console.log("\n Liste des éléments aux index impairs:");
console.log(chaine);

i=0;
chaine = [];
n=0;
while (i!=array.length) {
    if (array[i]%2!=0) {
        chaine[n] = array[i];
        n++;
        i++;
    }
    else {
        i++;
    }
}
console.log("\n Liste des éléments impairs:");
console.log(chaine);