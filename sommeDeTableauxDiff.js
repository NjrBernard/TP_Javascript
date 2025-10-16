let tableau1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let tableau2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let sommeTableaux = [];
let i=0;
let s=0;

if (tableau1.length >= tableau2.length) {
    while (i!=tableau2.length) {
        s=s+tableau1[i]+tableau2[i];
        i++;}
    while (i!=tableau1.length) {
        s=s+tableau1[i];
        i++;}
    }
else {
    while (i!=tableau1.length) {
        s=s+tableau1[i]+tableau2[i];
        i++;}
    while (i!=tableau2.length) {
        s=s+tableau2[i];
        i++;}
}
i=0;
sommeTableaux[i]=s;
console.log("\n Somme des deux tableaux avec tailles de tableaux différents:");
console.log(sommeTableaux);