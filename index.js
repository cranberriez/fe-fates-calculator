const characters = {
    "Avatar": {
      "name": "Avatar ",
      "class": "Nohr Prince(ss) ",
      "level": "1 ",
      "hp": "19 ",
      "str": "7 ",
      "mag": "4 ",
      "skl": "7 ",
      "spd": "6 ",
      "lck": "5 ",
      "def": "6 ",
      "res": "2 ",
      "mov": "5"
    },
    "Gunter": {
      "name": "Gunter ",
      "class": "Great Knight ",
      "level": "3 ",
      "hp": "24 ",
      "str": "10 ",
      "mag": "0 ",
      "skl": "15 ",
      "spd": "8 ",
      "lck": "9 ",
      "def": "10 ",
      "res": "4 ",
      "mov": "7"
    },
    "Felicia": {
      "name": "Felicia ",
      "class": "Maid ",
      "level": "1 ",
      "hp": "19 ",
      "str": "5 ",
      "mag": "9 ",
      "skl": "10 ",
      "spd": "10 ",
      "lck": "12 ",
      "def": "5 ",
      "res": "9 ",
      "mov": "6"
    },
    "Felicia (Chapter 16)": {
      "name": "Felicia (Chapter 16) ",
      "level": "13 ",
      "hp": "24 ",
      "str": "7 ",
      "mag": "14 ",
      "skl": "15 ",
      "spd": "17 ",
      "lck": "20 ",
      "def": "7 ",
      "res": "14 ",
      "mov": "6"
    },
    "Jakob": {
      "name": "Jakob ",
      "class": "Butler ",
      "level": "1 ",
      "hp": "21 ",
      "str": "8 ",
      "mag": "6 ",
      "skl": "12 ",
      "spd": "9 ",
      "lck": "10 ",
      "def": "7 ",
      "res": "6 ",
      "mov": "6"
    },
    "Jakob (Chapter 16)": {
      "name": "Jakob (Chapter 16) ",
      "level": "13 ",
      "hp": "27 ",
      "str": "13 ",
      "mag": "9 ",
      "skl": "19 ",
      "spd": "15 ",
      "lck": "17 ",
      "def": "11 ",
      "res": "10 ",
      "mov": "6"
    },
    "Azura": {
      "name": "Azura ",
      "class": "Songstress ",
      "level": "1 ",
      "hp": "16 ",
      "str": "5 ",
      "mag": "2 ",
      "skl": "8 ",
      "spd": "8 ",
      "lck": "6 ",
      "def": "4 ",
      "res": "7 ",
      "mov": "5"
    },
    "Sakura": {
      "name": "Sakura ",
      "class": "Shrine Maiden ",
      "level": "4 ",
      "hp": "19 ",
      "str": "4 ",
      "mag": "8 ",
      "skl": "6 ",
      "spd": "10 ",
      "lck": "11 ",
      "def": "7 ",
      "res": "8 ",
      "mov": "5"
    },
    "Hana": {
      "name": "Hana ",
      "class": "Samurai ",
      "level": "4 ",
      "hp": "20 ",
      "str": "7 ",
      "mag": "0 ",
      "skl": "9 ",
      "spd": "11 ",
      "lck": "5 ",
      "def": "6 ",
      "res": "9 ",
      "mov": "5"
    },
    "Subaki": {
      "name": "Subaki ",
      "class": "Sky Knight ",
      "level": "5 ",
      "hp": "22 ",
      "str": "8 ",
      "mag": "0 ",
      "skl": "13 ",
      "spd": "10 ",
      "lck": "7 ",
      "def": "9 ",
      "res": "10 ",
      "mov": "7"
    },
    "Kaze": {
      "name": "Kaze ",
      "class": "Ninja ",
      "level": "3 ",
      "hp": "19 ",
      "str": "7 ",
      "mag": "0 ",
      "skl": "9 ",
      "spd": "12 ",
      "lck": "4 ",
      "def": "5 ",
      "res": "10 ",
      "mov": "5"
    },
    "Rinkah": {
      "name": "Rinkah ",
      "class": "Oni Savage ",
      "level": "4 ",
      "hp": "20 ",
      "str": "8 ",
      "mag": "2 ",
      "skl": "6 ",
      "spd": "8 ",
      "lck": "5 ",
      "def": "10 ",
      "res": "3 ",
      "mov": "5"
    },
    "Hayato": {
      "name": "Hayato ",
      "class": "Diviner ",
      "level": "9 ",
      "hp": "22 ",
      "str": "2 ",
      "mag": "9 ",
      "skl": "9 ",
      "spd": "13 ",
      "lck": "11 ",
      "def": "5 ",
      "res": "7 ",
      "mov": "5"
    },
    "Takumi": {
      "name": "Takumi ",
      "class": "Archer ",
      "level": "11 ",
      "hp": "26 ",
      "str": "13 ",
      "mag": "0 ",
      "skl": "17 ",
      "spd": "11 ",
      "lck": "13 ",
      "def": "10 ",
      "res": "4 ",
      "mov": "5"
    },
    "Oboro": {
      "name": "Oboro ",
      "class": "Spear Fighter ",
      "level": "10 ",
      "hp": "25 ",
      "str": "13 ",
      "mag": "0 ",
      "skl": "11 ",
      "spd": "12 ",
      "lck": "11 ",
      "def": "13 ",
      "res": "8 ",
      "mov": "5"
    },
    "Hinata": {
      "name": "Hinata ",
      "class": "Samurai ",
      "level": "10 ",
      "hp": "26 ",
      "str": "11 ",
      "mag": "0 ",
      "skl": "9 ",
      "spd": "14 ",
      "lck": "10 ",
      "def": "12 ",
      "res": "4 ",
      "mov": "5"
    },
    "Saizou": {
      "name": "Saizou ",
      "class": "Ninja ",
      "level": "9 ",
      "hp": "23 ",
      "str": "11 ",
      "mag": "3 ",
      "skl": "15 ",
      "spd": "12 ",
      "lck": "9 ",
      "def": "9 ",
      "res": "8 ",
      "mov": "5"
    },
    "Orochi": {
      "name": "Orochi ",
      "class": "Diviner ",
      "level": "7 ",
      "hp": "20 ",
      "str": "1 ",
      "mag": "10 ",
      "skl": "12 ",
      "spd": "7 ",
      "lck": "6 ",
      "def": "5 ",
      "res": "10 ",
      "mov": "5"
    },
    "Reina": {
      "name": "Reina ",
      "class": "Kinshi Knight ",
      "level": "1 ",
      "hp": "28 ",
      "str": "18 ",
      "mag": "4 ",
      "skl": "16 ",
      "spd": "21 ",
      "lck": "15 ",
      "def": "10 ",
      "res": "13 ",
      "mov": "8"
    },
    "Kagero": {
      "name": "Kagero ",
      "class": "Ninja ",
      "level": "10 ",
      "hp": "22 ",
      "str": "15 ",
      "mag": "0 ",
      "skl": "10 ",
      "spd": "12 ",
      "lck": "7 ",
      "def": "9 ",
      "res": "10 ",
      "mov": "5"
    },
    "Camilla": {
      "name": "Camilla ",
      "class": "Malig Knight ",
      "level": "1 ",
      "hp": "30 ",
      "str": "19 ",
      "mag": "11 ",
      "skl": "15 ",
      "spd": "19 ",
      "lck": "12 ",
      "def": "18 ",
      "res": "15 ",
      "mov": "8"
    },
    "Selena": {
      "name": "Selena ",
      "class": "Mercenary ",
      "level": "10 ",
      "hp": "24 ",
      "str": "12 ",
      "mag": "3 ",
      "skl": "12 ",
      "spd": "15 ",
      "lck": "9 ",
      "def": "11 ",
      "res": "8 ",
      "mov": "5"
    },
    "Beruka": {
      "name": "Beruka ",
      "class": "Wyvern Rider ",
      "level": "9 ",
      "hp": "23 ",
      "str": "13 ",
      "mag": "0 ",
      "skl": "14 ",
      "spd": "9 ",
      "lck": "10 ",
      "def": "14 ",
      "res": "7 ",
      "mov": "7"
    },
    "Kaden": {
      "name": "Kaden ",
      "class": "Kitsune ",
      "level": "14 ",
      "hp": "30 ",
      "str": "15 ",
      "mag": "1 ",
      "skl": "12 ",
      "spd": "19 ",
      "lck": "14 ",
      "def": "9 ",
      "res": "14 ",
      "mov": "5"
    },
    "Keaton": {
      "name": "Keaton ",
      "class": "Wolfskin ",
      "level": "15 ",
      "hp": "35 ",
      "str": "19 ",
      "mag": "0 ",
      "skl": "10 ",
      "spd": "13 ",
      "lck": "9 ",
      "def": "16 ",
      "res": "7 ",
      "mov": "5"
    },
    "Elise": {
      "name": "Elise ",
      "class": "Troubadour ",
      "level": "7 ",
      "hp": "20 ",
      "str": "2 ",
      "mag": "13 ",
      "skl": "7 ",
      "spd": "11 ",
      "lck": "16 ",
      "def": "4 ",
      "res": "13 ",
      "mov": "7"
    },
    "Arthur": {
      "name": "Arthur ",
      "class": "Fighter ",
      "level": "9 ",
      "hp": "26 ",
      "str": "13 ",
      "mag": "0 ",
      "skl": "10 ",
      "spd": "9 ",
      "lck": "1 ",
      "def": "9 ",
      "res": "4 ",
      "mov": "5"
    },
    "Effie": {
      "name": "Effie ",
      "class": "Knight ",
      "level": "8 ",
      "hp": "24 ",
      "str": "14 ",
      "mag": "0 ",
      "skl": "9 ",
      "spd": "5 ",
      "lck": "11 ",
      "def": "13 ",
      "res": "4 ",
      "mov": "4"
    },
    "Benny": {
      "name": "Benny ",
      "class": "Knight ",
      "level": "15 ",
      "hp": "31 ",
      "str": "15 ",
      "mag": "0 ",
      "skl": "15 ",
      "spd": "6 ",
      "lck": "12 ",
      "def": "19 ",
      "res": "10 ",
      "mov": "4"
    },
    "Charlotte": {
      "name": "Charlotte ",
      "class": "Fighter ",
      "level": "10 ",
      "hp": "28 ",
      "str": "15 ",
      "mag": "0 ",
      "skl": "10 ",
      "spd": "13 ",
      "lck": "9 ",
      "def": "8 ",
      "res": "2 ",
      "mov": "5"
    },
    "Silas": {
      "name": "Silas ",
      "class": "Cavalier ",
      "level": "18 ",
      "hp": "39 ",
      "str": "19 ",
      "mag": "3 ",
      "skl": "16 ",
      "spd": "12 ",
      "lck": "11 ",
      "def": "19 ",
      "res": "14 ",
      "mov": "7"
    },
    "Shura": {
      "name": "Shura ",
      "class": "Adventurer ",
      "level": "10 ",
      "hp": "34 ",
      "str": "20 ",
      "mag": "11 ",
      "skl": "23 ",
      "spd": "27 ",
      "lck": "15 ",
      "def": "14 ",
      "res": "24 ",
      "mov": "6"
    },
    "Nyx": {
      "name": "Nyx ",
      "class": "Dark Mage ",
      "level": "9 ",
      "hp": "20 ",
      "str": "1 ",
      "mag": "12 ",
      "skl": "5 ",
      "spd": "11 ",
      "lck": "3 ",
      "def": "4 ",
      "res": "8 ",
      "mov": "5"
    },
    "Ryoma": {
      "name": "Ryoma ",
      "class": "Trueblade ",
      "level": "4 ",
      "hp": "36 ",
      "str": "20 ",
      "mag": "2 ",
      "skl": "18 ",
      "spd": "24 ",
      "lck": "20 ",
      "def": "16 ",
      "res": "13 ",
      "mov": "6"
    },
    "Hinoka": {
      "name": "Hinoka ",
      "class": "Sky Knight ",
      "level": "17 ",
      "hp": "24 ",
      "str": "14 ",
      "mag": "5 ",
      "skl": "18 ",
      "spd": "23 ",
      "lck": "16 ",
      "def": "12 ",
      "res": "23 ",
      "mov": "7"
    },
    "Azama": {
      "name": "Azama ",
      "class": "Monk ",
      "level": "13 ",
      "hp": "28 ",
      "str": "10 ",
      "mag": "8 ",
      "skl": "11 ",
      "spd": "13 ",
      "lck": "16 ",
      "def": "14 ",
      "res": "10 ",
      "mov": "5"
    },
    "Setsuna": {
      "name": "Setsuna ",
      "class": "Archer ",
      "level": "11 ",
      "hp": "25 ",
      "str": "12 ",
      "mag": "0 ",
      "skl": "15 ",
      "spd": "17 ",
      "lck": "11 ",
      "def": "8 ",
      "res": "10 ",
      "mov": "5"
    },
    "Scarlet": {
      "name": "Scarlet ",
      "class": "Wyvern Lord ",
      "level": "3 ",
      "hp": "32 ",
      "str": "22 ",
      "mag": "4 ",
      "skl": "18 ",
      "spd": "19 ",
      "lck": "14 ",
      "def": "23 ",
      "res": "7 ",
      "mov": "8"
    },
    "Xander": {
      "name": "Xander ",
      "class": "Paladin ",
      "level": "4 ",
      "hp": "38 ",
      "str": "23 ",
      "mag": "4 ",
      "skl": "18 ",
      "spd": "15 ",
      "lck": "20 ",
      "def": "23 ",
      "res": "11 ",
      "mov": "8"
    },
    "Leo": {
      "name": "Leo ",
      "class": "Dark Knight ",
      "level": "2 ",
      "hp": "34 ",
      "str": "14 ",
      "mag": "20 ",
      "skl": "14 ",
      "spd": "15 ",
      "lck": "15 ",
      "def": "16 ",
      "res": "20 ",
      "mov": "8"
    },
    "Odin": {
      "name": "Odin ",
      "class": "Dark Mage ",
      "level": "12 ",
      "hp": "24 ",
      "str": "8 ",
      "mag": "12 ",
      "skl": "12 ",
      "spd": "10 ",
      "lck": "12 ",
      "def": "7 ",
      "res": "10 ",
      "mov": "5"
    },
    "Laslow": {
      "name": "Laslow ",
      "class": "Mercenary ",
      "level": "16 ",
      "hp": "30 ",
      "str": "17 ",
      "mag": "0 ",
      "skl": "19 ",
      "spd": "16 ",
      "lck": "16 ",
      "def": "12 ",
      "res": "8 ",
      "mov": "5"
    },
    "Peri": {
      "name": "Peri ",
      "class": "Cavalier ",
      "level": "16 ",
      "hp": "27 ",
      "str": "16 ",
      "mag": "0 ",
      "skl": "10 ",
      "spd": "15 ",
      "lck": "12 ",
      "def": "12 ",
      "res": "11 ",
      "mov": "7"
    },
    "Niles": {
      "name": "Niles ",
      "class": "Outlaw ",
      "level": "14 ",
      "hp": "24 ",
      "str": "11 ",
      "mag": "6 ",
      "skl": "11 ",
      "spd": "17 ",
      "lck": "7 ",
      "def": "10 ",
      "res": "16 ",
      "mov": "5"
    },
    "Flora *1": {
      "name": "Flora *1 ",
      "class": "Maid ",
      "level": "5 ",
      "hp": "29 ",
      "str": "18 ",
      "mag": "16 ",
      "skl": "25 ",
      "spd": "15 ",
      "lck": "11 ",
      "def": "14 ",
      "res": "23 ",
      "mov": "6"
    },
    "Mozu": {
      "name": "Mozu ",
      "class": "Villager ",
      "level": "1 ",
      "hp": "16 ",
      "str": "6 ",
      "mag": "0 ",
      "skl": "5 ",
      "spd": "7 ",
      "lck": "3 ",
      "def": "4 ",
      "res": "1 ",
      "mov": "5"
    },
    "Fuga *2": {
      "name": "Fuga *2 ",
      "class": "Master of Arms ",
      "level": "10 ",
      "hp": "41 ",
      "str": "29 ",
      "mag": "0 ",
      "skl": "27 ",
      "spd": "25 ",
      "lck": "18 ",
      "def": "29 ",
      "res": "15 ",
      "mov": "6"
    }
  }

const men = ['Arthur','Azama','Benny','Hayato','Hinata','Jakob','Kaden',
'Kaze','Keaton','Laslow','Leo','Niles','Odin','Ryoma','Saizou',
'Silas','Subaki','Takumi','Xander']

const women = ['Azura','Beruka','Camilla','Charlotte','Effie','Elise','Felicia',
'Hana','Hinoka','Kagero','Mozu','Nyx','Oboro','Orochi','Peri',
'Rinkah','Sakura','Selena','Setsuna']

function appendCharacter(character, listID, gender) {
    const newLi = document.createElement('li');
    const textContent = document.createTextNode(character.name)
    
    newLi.appendChild(textContent)
    newLi.id = character.name.trim()
    newLi.classList.add(gender)

    let list = document.getElementById(listID)
    list.append(newLi)
}

function addChars(chars, data, listID, gender) {
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i]

        if (char in data) {
            const character = data[`${char}`];  
            appendCharacter(character, listID, gender)
        }
        else {
            console.log(`Character ${char} not found`)
        }
    }
}


$(function() {
    addChars(men, characters, "maleCharacters", "char_male");
    addChars(women, characters, "femaleCharacters", "char_female");
})

$('#maleCharacters').on('click', "li", function() {
    $("#maleCharacters li").removeClass("selected")
    $(this).addClass("selected")
    let character = characters[this.id]
    setDetails(character, true)
})


$('#femaleCharacters').on('click', "li", function() {
    $("#femaleCharacters li").removeClass("selected")
    $(this).addClass("selected")
    let character = characters[this.id]
    setDetails(character, false)
})

var selected_male;
var selected_female;

function setDetails(character, isMale) {
    let id = "#women_data"
    if (isMale) id = "#men_data"

    $(`${id} h3`).text(`${character.name} ${character.class}`)
    
}