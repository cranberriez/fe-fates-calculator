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
var selectedMale = undefined;
var selectedFemale = undefined;

// On clicking already selected character
$('#char_lists ul').on('click', 'li.selected', function() {
    console.log('pop')
    let gender = this.dataset.gender
    $(`#${gender} li`).removeClass('selected')
    // $(`.parent:not(#${gender}) li`).removeClass('disabled')
    if (gender == 'men') selectedMale = undefined
    else selectedFemale = undefined
    updateData()
})

// On clicking a character 
$('#char_lists ul#men, #char_lists ul#women').on('click', 'li:not(.selected,.disabled)', function() {
    const gender = this.dataset.gender;
    const expansion = getExpansion(this.id);
    const excludedExpansion = expansion === 'nohrian' ? 'hoshidan' : 'nohrian';
    const charData = getCharacter(this.id);

    $(`#${gender} li`).removeClass('selected');
    // $(`.parent:not(#${gender}) li`).removeClass('disabled');
    $(this).addClass('selected');
    // $(`.parent:not(#${gender}) li.${excludedExpansion}`).addClass('disabled');

    if (gender === 'men') {
        selectedMale = charData;
    } else if (gender === 'women') {
        selectedFemale = charData;
    }

    updateData();
});

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

function getExpansion(charName) {
    if (charName in universalData) return 'universal'
    if (charName in nohrianData) return 'nohrian'
    if (charName in hoshidanData) return 'hoshidan'
    return undefined
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
                `<li id='${name}' class='${getExpansion(name)}' data-gender='${gender}'>${name}</li>`
            )
        }
    });
}

function highestStatHTML([stats, names]) {
    var finalHTML = []
    Object.keys(stats).forEach((stat) => {
        let charName = names[stat]
        if (Array.isArray(names[stat])) {
            charName = names[stat][0].slice(0, 4)
            names[stat].slice(1).forEach((str) => {
                charName += `, ${str.slice(0, 4)}`
            })
        }
        finalHTML.push(
            `<li><p>${stat}</p><p>${charName}</p><p>${stats[stat]}</p></li>`
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
          else if (char[stat] === maxStats[stat]) {
            if (!Array.isArray(nameForStat[stat]))
                nameForStat[stat] = [nameForStat[stat]]
            nameForStat[stat].push(person)
          }
        });
    });

    return [maxStats, nameForStat]   
}