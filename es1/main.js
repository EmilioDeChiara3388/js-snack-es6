//console.log("Funzioni?");


/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bicycles = [
    {
        nome: "Primavera",
        peso: 47
    },
    {
        nome: "Estate",
        peso: 51
    },
    {
        nome: "Autunno",
        peso: 33
    },
    {
        nome: "Inverno",
        peso: 60
    }
]

let lightBycicle = bicycles[0].peso;

for (let i = 0; i < bicycles.length; i++){
    if (bicycles[i].peso < lightBycicle){
        lightBycicle = bicycles[i].peso;
    } 
}
console.log(lightBycicle);

let resultOnPage = bicycles.find(bycicle => bycicle.peso === lightBycicle);
console.log(resultOnPage);


let resultEl = document.querySelector(".result");
resultEl.innerHTML = `<h2>La bicicletta più leggera è ${resultOnPage.nome}</h2>`







