var fs = require('fs');

let men = ['Arthur','Azama','Benny','Hayato','Hinata','Jakob','Kaden',
'Kaze','Keaton','Laslow','Leo','Niles','Odin','Ryoma','Saizo',
'Silas','Subaki','Takumi','Xander']

let women = ['Azura','Beruka','Camilla','Charlotte','Effie','Elise','Felicia',
'Hana','Hinoka','Kagero','Mozu','Nyx','Oboro','Orochi','Peri',
'Rinkah','Sakura','Selena','Setsuna']

let data = `Avatar 	Nohr Prince(ss) 	1 	19 	7 	4 	7 	6 	5 	6 	2 	5
Gunter 	Great Knight 	3 	24 	10 	0 	15 	8 	9 	10 	4 	7
Felicia 	Maid 	1 	19 	5 	9 	10 	10 	12 	5 	9 	6
Felicia (Chapter 16) 	13 	24 	7 	14 	15 	17 	20 	7 	14 	6
Jakob 	Butler 	1 	21 	8 	6 	12 	9 	10 	7 	6 	6
Jakob (Chapter 16) 	13 	27 	13 	9 	19 	15 	17 	11 	10 	6
Azura 	Songstress 	1 	16 	5 	2 	8 	8 	6 	4 	7 	5
Sakura 	Shrine Maiden 	4 	19 	4 	8 	6 	10 	11 	7 	8 	5
Hana 	Samurai 	4 	20 	7 	0 	9 	11 	5 	6 	9 	5
Subaki 	Sky Knight 	5 	22 	8 	0 	13 	10 	7 	9 	10 	7
Kaze 	Ninja 	3 	19 	7 	0 	9 	12 	4 	5 	10 	5
Rinkah 	Oni Savage 	4 	20 	8 	2 	6 	8 	5 	10 	3 	5
Hayato 	Diviner 	9 	22 	2 	9 	9 	13 	11 	5 	7 	5
Takumi 	Archer 	11 	26 	13 	0 	17 	11 	13 	10 	4 	5
Oboro 	Spear Fighter 	10 	25 	13 	0 	11 	12 	11 	13 	8 	5
Hinata 	Samurai 	10 	26 	11 	0 	9 	14 	10 	12 	4 	5
Saizou 	Ninja 	9 	23 	11 	3 	15 	12 	9 	9 	8 	5
Orochi 	Diviner 	7 	20 	1 	10 	12 	7 	6 	5 	10 	5
Reina 	Kinshi Knight 	1 	28 	18 	4 	16 	21 	15 	10 	13 	8
Kagero 	Ninja 	10 	22 	15 	0 	10 	12 	7 	9 	10 	5
Camilla 	Malig Knight 	1 	30 	19 	11 	15 	19 	12 	18 	15 	8
Selena 	Mercenary 	10 	24 	12 	3 	12 	15 	9 	11 	8 	5
Beruka 	Wyvern Rider 	9 	23 	13 	0 	14 	9 	10 	14 	7 	7
Kaden 	Kitsune 	14 	30 	15 	1 	12 	19 	14 	9 	14 	5
Keaton 	Wolfskin 	15 	35 	19 	0 	10 	13 	9 	16 	7 	5
Elise 	Troubadour 	7 	20 	2 	13 	7 	11 	16 	4 	13 	7
Arthur 	Fighter 	9 	26 	13 	0 	10 	9 	1 	9 	4 	5
Effie 	Knight 	8 	24 	14 	0 	9 	5 	11 	13 	4 	4
Benny 	Knight 	15 	31 	15 	0 	15 	6 	12 	19 	10 	4
Charlotte 	Fighter 	10 	28 	15 	0 	10 	13 	9 	8 	2 	5
Silas 	Cavalier 	18 	39 	19 	3 	16 	12 	11 	19 	14 	7
Shura 	Adventurer 	10 	34 	20 	11 	23 	27 	15 	14 	24 	6
Nyx 	Dark Mage 	9 	20 	1 	12 	5 	11 	3 	4 	8 	5
Ryoma 	Trueblade 	4 	36 	20 	2 	18 	24 	20 	16 	13 	6
Hinoka 	Sky Knight 	17 	24 	14 	5 	18 	23 	16 	12 	23 	7
Azama 	Monk 	13 	28 	10 	8 	11 	13 	16 	14 	10 	5
Setsuna 	Archer 	11 	25 	12 	0 	15 	17 	11 	8 	10 	5
Scarlet 	Wyvern Lord 	3 	32 	22 	4 	18 	19 	14 	23 	7 	8
Xander 	Paladin 	4 	38 	23 	4 	18 	15 	20 	23 	11 	8
Leo 	Dark Knight 	2 	34 	14 	20 	14 	15 	15 	16 	20 	8
Odin 	Dark Mage 	12 	24 	8 	12 	12 	10 	12 	7 	10 	5
Laslow 	Mercenary 	16 	30 	17 	0 	19 	16 	16 	12 	8 	5
Peri 	Cavalier 	16 	27 	16 	0 	10 	15 	12 	12 	11 	7
Niles 	Outlaw 	14 	24 	11 	6 	11 	17 	7 	10 	16 	5
Flora *1 	Maid 	5 	29 	18 	16 	25 	15 	11 	14 	23 	6
Mozu 	Villager 	1 	16 	6 	0 	5 	7 	3 	4 	1 	5
Fuga *2 	Master of Arms 	10 	41 	29 	0 	27 	25 	18 	29 	15 	6`

function rawToObjectList(data) {
    let finalData = {};
    data = data.split('\n');
    for (var i = 0; i < data.length; i++) {
        row = data[i].split('\t');
        if (row[0].includes("(Chapter 16)")) {
            row.splice(1, 0, undefined)
        }
        finalData[`${row[0]}`] = {
            name: row[0],
            class: row[1],
            level: row[2],
            hp: row[3],
            str: row[4],
            mag: row[5],
            skl: row[6],
            spd: row[7],
            lck: row[8],
            def: row[9],
            res: row[10],
            mov: row[11],
        }
    }

    return finalData;
}

let characters = rawToObjectList(data)

fs.writeFile('charData.json', JSON.stringify(characters, null, 2), 'utf8', function callBack(err, data){
    if (err)
        console.error(err);
});