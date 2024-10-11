//console.log("Funzioni?");


/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bicycles = [
    {
        "nome": "Primavera",
        peso: 47
    },
    {
        "nome": "Estate",
        peso: 51
    },
    {
        "nome": "Autunno",
        peso: 33
    },
    {
        "nome": "Inverno",
        peso: 60
    }
]



for (let i = 0; i < bicycles.length; i++){
    
    if (bicycles[i].peso < bicycles[i + 1].peso){
        console.log(bicycles[i].nome);
        let resultEl = document.querySelector(".result");
        resultEl.innerHTML = `<h2>La bicicletta più leggera è ${bicycles[i].nome}</h2>`
    } else {
        console.log(bicycles[i + 1].nome);
        let resultEl = document.querySelector(".result");
        resultEl.innerHTML = `<h2>La bicicletta più leggera è ${bicycles[i + 1].nome}</h2>`
    };
};





