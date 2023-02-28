const men = ['Arthur','Azama','Benny','Hayato','Hinata','Jakob','Kaden',
'Kaze','Keaton','Laslow','Leo','Niles','Odin','Ryoma','Saizou',
'Silas','Subaki','Takumi','Xander']

const women = ['Azura','Beruka','Camilla','Charlotte','Effie','Elise','Felicia',
'Hana','Hinoka','Kagero','Mozu','Nyx','Oboro','Orochi','Peri',
'Rinkah','Sakura','Selena','Setsuna']

let characters = {}

class Character {
    constructor(charname, charclass, chargender) {
      this.name = charname
      this.class = charclass
      this.gender = chargender
      this.baseStats = {
        hp:  0,
        str: 0,
        mag: 0,
        skl: 0,
        spd: 0,
        lck: 0,
        def: 0,
        res: 0,
        mov: 0
      }
      this.growthStats = {
        hp:  0,
        str: 0,
        mag: 0,
        skl: 0,
        spd: 0,
        lck: 0,
        def: 0,
        res: 0,
        mov: 0
      }
    }

    setBaseStats(obj) {
        this.baseStats = {
            hp:  obj.hp,
            str: obj.str,
            mag: obj.mag,
            skl: obj.skl,
            spd: obj.spd,
            lck: obj.lck,
            def: obj.def,
            res: obj.res,
            mov: obj.mov
        }
    }

    addGrowth(stats) {
        this.growthStats.hp += stats[0]
        this.growthStats.str += stats[1]
        this.growthStats.mag += stats[2]
        this.growthStats.skl += stats[3]
        this.growthStats.spd += stats[4]
        this.growthStats.lck += stats[5]
        this.growthStats.def += stats[6]
        this.growthStats.res += stats[7]
    }

    getStats() {
        return this.baseStats
    }

    getGrowth() {
        return this.growthStats
    }
}

function appendCharacter(character, listID) {
    const newLi = document.createElement('li');
    const textContent = document.createTextNode(character.name)
    
    newLi.appendChild(textContent)
    newLi.id = character.name.trim()
    newLi.classList.add(character.gender)

    let list = document.getElementById(listID)
    list.append(newLi)
}

function addChars(chars, data, listID, gender) {
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i]

        if (char in data) {
            const character = data[`${char}`];  
            appendCharacter(character, listID)
        }
        else {
            // console.log(`Character ${char} not found`)
        }
    }
}

function createClasses() {
    for (const item in charData) {
        let char = charData[item]
        let gender = (men.includes(char.name) ? 'male' : 'female') || undefined;
        let character = new Character(char.name, char.class, gender)
        character.setBaseStats(char)

        if (char.name in charGrowth) {
            character.addGrowth(charGrowth[char.name])
        }

        if (char.class in classGrowth) {
            character.addGrowth(classGrowth[char.class])
        }

        characters[char.name] = character
    }
}

$(function() {
    createClasses()
    addChars(men, characters, "maleCharacters", "char_male");
    addChars(women, characters, "femaleCharacters", "char_female");
})

$('#maleCharacters').on('click', "li", function() {
    $("#maleCharacters li").removeClass("selected")
    $(this).addClass("selected")
    let character = characters[this.id]
    selected_male = character
    setDetails(character)
})

$('#femaleCharacters').on('click', "li", function() {
    $("#femaleCharacters li").removeClass("selected")
    $(this).addClass("selected")
    let character = characters[this.id]
    selected_female = character
    setDetails(character)
})

var selected_male = characters[`${men[0]}`];
var selected_female = characters[`${women[0]}`];

function setDetails(character) {
    let id = "#women_data"
    if (character.gender == 'male') id = "#men_data"

    $(`${id} h3`).text(`${character.name}`)
    $(`${id} h4`).text(`${character.class}`)
    let stats = character.getStats()
    let growth = character.getGrowth()
    
    let statsHTML = `<li><p></p>            <p>Base</p>           <p>Growth</p></div>` +
                    `<li><p>HP:</p>         <p>${stats.hp}</p>    <p>${growth.hp}</p></div>` +
                    `<li><p>Strength:</p>   <p>${stats.str}</p>   <p>${growth.str}</p></div>` +
                    `<li><p>Magic:</p>      <p>${stats.mag}</p>   <p>${growth.mag}</p></div>` +
                    `<li><p>Skill:</p>      <p>${stats.skl}</p>   <p>${growth.skl}</p></div>` +
                    `<li><p>Speed:</p>      <p>${stats.spd}</p>   <p>${growth.spd}</p></div>` +
                    `<li><p>Luck:</p>       <p>${stats.lck}</p>   <p>${growth.lck}</p></div>` +
                    `<li><p>Defense:</p>    <p>${stats.def}</p>   <p>${growth.def}</p></div>` +
                    `<li><p>Resilience:</p> <p>${stats.res}</p>  <p>${growth.res}</p></div>` +
                    `<li><p>Movement:</p>   <p>${stats.mov}</p>   <p>${growth.mov}</p></div>`

    $(`${id} li`).remove()
    $(`${id} ul`).append(statsHTML)
}

function updateDetails() {
    setDetails(selected_female)
    setDetails(selected_male)
}