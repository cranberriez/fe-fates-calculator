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

let charGrowthData = `Avatar 	45 	45 	30 	40 	45 	45 	35 	25
Felicia 	40 	10 	35 	30 	40 	55 	15 	35
Jakob 	50 	30 	15 	40 	35 	45 	25 	25
Kaze 	55 	40 	0 	45 	65 	20 	20 	35
Azura 	25 	50 	25 	60 	60 	40 	15 	35
Silas 	40 	45 	5 	50 	40 	40 	40 	25
Shura 	30 	25 	10 	20 	35 	30 	15 	35
Izana 	45 	15 	35 	55 	30 	45 	35 	35
Mozu 	30 	40 	5 	50 	55 	45 	35 	30
Rinkah 	20 	25 	15 	50 	45 	35 	45 	20
Sakura 	45 	30 	50 	40 	40 	55 	30 	20
Hana 	25 	55 	10 	45 	55 	25 	20 	30
Subaki 	55 	30 	20 	50 	20 	25 	45 	5
Saizo 	40 	50 	45 	60 	30 	55 	45 	10
Orochi 	35 	5 	65 	50 	15 	35 	25 	45
Hinoka 	45 	45 	15 	40 	45 	40 	35 	40
Azama 	55 	50 	20 	40 	45 	40 	40 	20
Setsuna 	30 	20 	0 	30 	60 	30 	15 	40
Hayato 	50 	30 	40 	30 	45 	60 	40 	20
Oboro 	30 	40 	20 	40 	40 	40 	40 	30
Hinata 	55 	35 	0 	25 	15 	45 	45 	15
Takumi 	50 	35 	0 	60 	40 	45 	35 	20
Kagero 	30 	65 	0 	20 	50 	30 	25 	40
Reina 	40 	45 	5 	20 	45 	10 	20 	10
Kaden 	45 	40 	10 	25 	45 	50 	35 	40
Ryoma 	50 	45 	0 	50 	45 	40 	35 	25
Scarlet 	30 	45 	20 	40 	50 	40 	25 	20
Yukimura 	25 	25 	5 	40 	15 	30 	25 	30
Gunter 	15 	5 	0 	5 	0 	15 	5 	5
Elise 	30 	5 	65 	25 	55 	70 	15 	40
Arthur 	50 	45 	0 	55 	35 	5 	45 	20
Effie 	35 	60 	0 	35 	50 	50 	35 	30
Odin 	55 	35 	30 	55 	35 	60 	40 	20
Niles 	40 	35 	20 	40 	50 	30 	30 	40
Nyx 	30 	5 	50 	35 	50 	20 	15 	30
Camilla 	40 	50 	25 	50 	55 	25 	35 	45
Selena 	40 	30 	5 	25 	45 	30 	45 	30
Beruka 	45 	30 	10 	55 	30 	45 	40 	25
Laslow 	50 	45 	0 	45 	30 	55 	35 	25
Peri 	30 	50 	5 	30 	50 	35 	25 	45
Benny 	50 	40 	0 	50 	10 	35 	55 	45
Charlotte 	65 	55 	0 	35 	50 	45 	20 	5
Leo 	45 	25 	55 	35 	45 	45 	30 	45
Keaton 	60 	60 	0 	20 	35 	30 	50 	25
Xander 	45 	50 	5 	40 	35 	60 	40 	15
Flora 	35 	40 	20 	45 	30 	35 	30 	30`

let classGrowthData = `Nohr Prince(ss) 	15 	15 	10 	10 	10 	10 	10 	5
Nohr Noble 	15 	10 	15 	5 	15 	5 	5 	15
Cavalier 	10 	15 	0 	10 	10 	15 	10 	5
Paladin 	10 	15 	0 	10 	10 	15 	10 	10
Great Knight 	20 	20 	0 	10 	5 	5 	20 	0
Knight 	20 	20 	0 	15 	5 	10 	20 	0
General 	25 	20 	0 	15 	0 	10 	20 	5
Fighter 	20 	20 	0 	15 	15 	5 	5 	0
Berserker 	30 	25 	0 	15 	15 	0 	0 	0
Mercenary 	10 	15 	0 	20 	15 	5 	10 	5
Hero 	20 	15 	0 	20 	15 	5 	10 	0
Bow Knight 	10 	10 	0 	15 	15 	10 	0 	10
Outlaw 	0 	10 	5 	10 	20 	0 	0 	20
Adventurer 	0 	5 	15 	5 	20 	0 	0 	20
Wyvern Rider 	10 	15 	5 	10 	10 	5 	20 	0
Wyvern Lord 	10 	15 	0 	15 	10 	5 	20 	0
Malig Knight 	0 	15 	15 	10 	5 	0 	10 	15
Dark Mage 	0 	10 	20 	0 	10 	0 	5 	10
Sorcerer 	0 	0 	25 	0 	10 	0 	5 	15
Dark Knight 	15 	20 	10 	5 	5 	5 	15 	5
Troubadour 	0 	0 	10 	20 	10 	15 	0 	15
Strategist 	0 	0 	15 	5 	10 	20 	0 	15
Maid, Butler 	0 	10 	10 	15 	15 	10 	5 	10
Wolfskin 	20 	20 	0 	5 	15 	5 	10 	0
Wolfssegner 	20 	20 	0 	5 	15 	5 	10 	0`

function rawToObjectList(data) {
    let finalData = {};
    data = data.split('\n');

    for (var i = 0; i < data.length; i++) {
        row = data[i].split('\t');
        if (row[0].includes("(Chapter 16)")) {
            row.splice(1, 0, '')
        }

        row.forEach(e => {
            e.trim(' ')
        });

        finalData[`${row[0].trim()}`] = {
            name: row[0].trim(),
            class: row[1].trim(),
            level: row[2].trim(),
            hp: row[3].trim(),
            str: row[4].trim(),
            mag: row[5].trim(),
            skl: row[6].trim(),
            spd: row[7].trim(),
            lck: row[8].trim(),
            def: row[9].trim(),
            res: row[10].trim(),
            mov: row[11].trim(),
        }
    }

    return finalData;
}

let characters = rawToObjectList(data)


fs.writeFile('charData.json', JSON.stringify(characters, null, 2), 'utf8', function callBack(err, data){
    if (err)
        console.error(err);
});

function rawGrowthToList(data) {
    let finalData = {}
    data = data.split('\n')

    data.forEach(row => {
        let rowArray = row.split("\t")
        let items = rowArray.splice(0,1)
        for (let i = 0; i < items.length; i++) {
            items[i] = items[i].trim()
            
        }
        if (items[0].includes(',')) {
            items = items[0].split(',')
        }

        for (let i = 0; i < rowArray.length; i++) {
            rowArray[i] = parseInt(rowArray[i].trim())
        }

        items.forEach(i => {
            i.trim()
            finalData[i] = rowArray
        });
    });

    return finalData
}

let characterGrowth = rawGrowthToList(charGrowthData)
fs.writeFile('charGrowthData.json', JSON.stringify(characterGrowth, null, 2), 'utf8', function callBack(err, data){
    if (err)
        console.error(err);
});

let classGrowth = rawGrowthToList(classGrowthData)
fs.writeFile('classGrowthData.json', JSON.stringify(classGrowth, null, 2), 'utf8', function callBack(err, data){
    if (err)
        console.error(err);
});