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

//let newPoints = teams.puntiFatti;
for (i = 0; i < teams.length; i++){
    let randomPoints = Math.floor(Math.random() * 10);
    console.log(randomPoints);
    teams.puntiFatti = randomPoints;
    console.log(teams);
    
};

for (i = 0; i < teams.length; i++){
    let randomFouls = Math.floor(Math.random() * 10);
    console.log(randomFouls);
    teams.falliSubiti = randomFouls;
    console.log(teams);
    
};



//console.log(teams);



