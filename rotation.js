let tableau1 = [1, 2, 3, 4, 5, 6];
let tableau2 = [tableau1[tableau1.length - 1]];
i=1;


    while (i != (tableau1.length)) {
        tableau2[i] = tableau1[i - 1];
        i++;    
    }

console.log("Affiche le tableau initial")
console.log(tableau1);
console.log("\n Affiche le tableau avec rotation vers la droite")
console.log(tableau2);
