const men = ['Arthur','Azama','Benny','Hayato','Hinata','Jakob','Kaden',
'Kaze','Keaton','Laslow','Leo','Niles','Odin','Ryoma','Saizou',
'Silas','Subaki','Takumi','Xander']

const women = ['Azura','Beruka','Camilla','Charlotte','Effie','Elise','Felicia',
'Hana','Hinoka','Kagero','Mozu','Nyx','Oboro','Orochi','Peri',
'Rinkah','Sakura','Selena','Setsuna']


class Character {
    growthStats = [];

    constructor(obj, gender) {
      this.name = obj.name;
      this.class = obj.class
      this.gender = gender
      this.baseStats = {
        hp:  [obj.hp],
        str: [obj.str],
        mag: [obj.mag],
        skl: [obj.skl],
        spd: [obj.spd],
        lck: [obj.lck],
        def: [obj.def],
        res: [obj.res],
        mov: [obj.mov]
      }
    }
}

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

function createClasses() {

}

$(function() {
    addChars(men, charData, "maleCharacters", "char_male");
    addChars(women, charData, "femaleCharacters", "char_female");
})

$('#maleCharacters').on('click', "li", function() {
    $("#maleCharacters li").removeClass("selected")
    $(this).addClass("selected")
    let character = charData[this.id]
    setDetails(character, true)
})


$('#femaleCharacters').on('click', "li", function() {
    $("#femaleCharacters li").removeClass("selected")
    $(this).addClass("selected")
    let character = charData[this.id]
    setDetails(character, false)
})

var selected_male;
var selected_female;

function setDetails(character, isMale) {
    let id = "#women_data"
    if (isMale) id = "#men_data"

    $(`${id} h3`).text(`${character.name} ${character.class}`)
    let stats = Object.keys(character)
    for (let i = 2; i < stats.length; i++) {
        const element = stats[i];
        $(`${id} .${element} span`).text(character[element])
    }
}