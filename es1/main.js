//console.log("Funzioni?");


/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bicycles = [
    {
        "nome": "Primavera",
        "peso": 47
    },
    {
        "nome": "Estate",
        "peso": 51
    },
    {
        "nome": "Autunno",
        "peso": 33
    },
    {
        "nome": "Inverno",
        "peso": 60
    }
]


let singleBicycle = bicycles.peso;
for (let i = 0; i < bicycles.length; i++){
    
    if (singleBicycle[i] < singleBicycle[i + 1]){
        console.log(singleBicycle[i]);
        
    } else {
        console.log(singleBicycle[i + 1]);
        
    };
    
     
    
};
