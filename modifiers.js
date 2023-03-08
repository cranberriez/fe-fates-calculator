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

$('#char_lists ul#men, #char_lists ul#women').on('click', 'li', function() {
    let gender = this.dataset.gender
    let charData = getCharacter(this.id)
    if (gender == 'men') {
        $('#men li').removeClass('selected')
        $(this).addClass('selected')
        selectedMale = charData
    }
    else if (gender == "women") {
        $('#women li').removeClass('selected')
        $(this).addClass('selected')
        selectedFemale = charData
    }
    updateData()
})

function updateData() {
    $('#child li').remove()
    $('#child-label').append(`<li> </li>`)
    statLabels.forEach(element => {
        $('#child-label').append(
            `<li>${element}</li>`
        )
    });
    if (selectedMale) {
        $('#child-father').append(
            `<li>Dad</li>`
        )
        for (var key in selectedMale) {
            let value = selectedMale[key]
            $('#child-father').append(
                `<li>${value ? value : ''}</li>`
            )
        }
    }
    if (selectedFemale) {
        $('#child-mother').append(
            `<li>Mom</li>`
        )
        for (var key in selectedFemale) {
            let value = selectedFemale[key]
            $('#child-mother').append(
                `<li>${value ? value : ''}</li>`
            )
        }
    }

    if (selectedMale && selectedFemale) {
        $('#child-modifiers').append(
            `<li>Kid</li>`
        )
        var childStats = {};
        for (var key in selectedMale) {
            childStats[key] = selectedMale[key]
            childStats[key] += selectedFemale[key]
            childStats[key] += 1
        }
        console.log(childStats)
        for (var key in childStats) {
            $('#child-modifiers').append(
                `<li>${childStats[key]}</li>`
            )
        }
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

        if (charData) {
            $(`ul#${gender}`).append(
                `<li id='${name}' data-gender='${gender}'>${name}</li>`
            )
        }
    });
}