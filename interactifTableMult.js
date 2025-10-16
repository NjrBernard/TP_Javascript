let n=3;
let table =[];
let i=1;

while (i<=10) {
    table[i-1]=n*i;
    i++;
}
console.log("\n Table de multiplication de " + n + " :");
i=1;
while (i<=10) {
    console.log(n + " * " + i + " = " + table[i-1]);
    i++;
}