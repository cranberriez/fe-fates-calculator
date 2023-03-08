const men = ['Arthur','Azama','Benny','Hayato','Hinata','Jakob','Kaden',
'Kaze','Keaton','Laslow','Leo','Niles','Odin','Ryoma','Saizo',
'Silas','Subaki','Takumi','Xander']

const women = ['Azura','Beruka','Camilla','Charlotte','Effie','Elise','Felicia',
'Hana','Hinoka','Kagero','Mozu','Nyx','Oboro','Orochi','Peri',
'Rinkah','Sakura','Selena','Setsuna']

$(function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    createPeople(men, 'men')
    createPeople(women, 'women')
    $('#highest-male ul').append(highestStatHTML(getHighestStat(men)))
    $('#highest-female ul').append(highestStatHTML(getHighestStat(women)))
})

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
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
    $('#child li').remove();
    $('#child-label').html(`<li></li><li>${statLabels.join('</li><li>')}</li>`);
    
    const displayParent = (sex, data) => {
      if (!sex) return;
      $('#child-' + sex).append(`<li>${sex.charAt(0).toUpperCase()}</li>`);
      for (const key in data) {
        const value = data[key];
        $('#child-' + sex).append(`<li class="${value > 0 ? 'positive' : 'negative'}">${value || ''}</li>`);
      }
    };
    
    displayParent('male', selectedMale);
    displayParent('female', selectedFemale);
    
    if (selectedMale && selectedFemale) {
      $('#child-modifiers').html(`<li>C</li>`);
      const childStats = Object.fromEntries(
        Object.entries(selectedMale).map(([key, value]) => [key, value + selectedFemale[key] + 1])
    );
      for (const key in childStats) {
        const value = childStats[key];
        $('#child-modifiers').append(`<li class="${value > 0 ? 'positive' : 'negative'}">${value}</li>`);
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

function highestStatHTML([stats, names]) {
    var finalHTML = []
    Object.keys(stats).forEach((stat) => {
        finalHTML.push(
            `<li><p>${stat}</p><p>${names[stat]}</p><p>${stats[stat]}</p></li>`
        )
    })
    return finalHTML
}

function getHighestStat(people) {
    let maxStats = {
        Str: -Infinity,
        Mag: -Infinity,
        Skl: -Infinity,
        Spd: -Infinity,
        Lck: -Infinity,
        Def: -Infinity,
        Res: -Infinity,
    }

    let nameForStat = {
        Str: '',
        Mag: '',
        Skl: '',
        Spd: '',
        Lck: '',
        Def: '',
        Res: '',
    }

    people.forEach((person) => {
        let char = getCharacter(person)
        Object.keys(char).forEach((stat) => {
          if (char[stat] > maxStats[stat]) {
            maxStats[stat] = char[stat];
            nameForStat[stat] = person
          }
        });
    });

    return [maxStats, nameForStat]   
}