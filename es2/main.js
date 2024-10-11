//console.log("Funzioni?");

/* 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juve",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

let namesArray = [];
for (i = 0; i < teams.length; i++){
    let team = teams[i];
    namesArray.push(team.nome);
    
};
console.log(namesArray);


//let newPoints = teams.puntiFatti;
for (i = 0; i < teams.length; i++){
    let randomPoints = Math.floor(Math.random() * 20);
    console.log(randomPoints);
    teams.puntiFatti = randomPoints;
    //console.log(teams);
    
};

let foulsArray = [];
for (i = 0; i < teams.length; i++){
    let randomFouls = Math.floor(Math.random() * 20);
    console.log(randomFouls);
    teams.falliSubiti = randomFouls;
    foulsArray.push(randomFouls)
    //console.log(teams);
};
console.log(foulsArray);


const finalArray = namesArray.concat(foulsArray);
console.log(finalArray);





//console.log(teams);



