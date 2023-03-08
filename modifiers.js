const men = ['Arthur','Azama','Benny','Hayato','Hinata','Jakob','Kaden',
'Kaze','Keaton','Laslow','Leo','Niles','Odin','Ryoma','Saizo',
'Silas','Subaki','Takumi','Xander']

const women = ['Azura','Beruka','Camilla','Charlotte','Effie','Elise','Felicia',
'Hana','Hinoka','Kagero','Mozu','Nyx','Oboro','Orochi','Peri',
'Rinkah','Sakura','Selena','Setsuna']

$(function() {
    createPeople(men, 'men')
    createPeople(women, 'women')
})

let statLabels = ['Str','Mag','Skl','Spd','Lck','Def','Res']
var selectedMale;
var selectedFemale;

$('#char_lists ul').on('click', 'li', function() {
    let gender = this.dataset.gender
    let charData = getCharacter(this.id)
    if (gender == 'men') {
        selectedMale = charData
    }
    else {
        selectedFemale = charData
    }
    updateData()
})

function updateData() {
    $('#child-label li').remove()
    statLabels.forEach(element => {
        $('#child-label').append(
            `<li>${element}</li>`
        )
    });
    if (selectedMale) {

    }
    if (selectedFemale) {

    }
}

function getCharacter(charName) {
    if (charName in universalData) return (universalData[charName])
    if (charName in nohrianData) return (nohrianData[charName])
    if (charName in hoshidanData) return (hoshidanData[charName])
    return undefined
}

function createPeople(names, gender) {
    names.forEach(person => {
        var charData
        var name
        const addPerson = (data) => {
            charData = data
            name = person
        }
        addPerson(getCharacter(person))
        // if (person in universalData) addPerson(universalData[person])
        // if (person in nohrianData) addPerson(nohrianData[person])
        // if (person in hoshidanData) addPerson(hoshidanData[person])

        if (charData) {
            $(`ul#${gender}`).append(
                `<li id='${name}' data-gender='${gender}'>${name}</li>`
            )
        }
    });
}