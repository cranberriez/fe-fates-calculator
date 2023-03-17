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

    setClassData()
})

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

let statLabels = ['Str','Mag','Skl','Spd','Lck','Def','Res']
var selectedMale = undefined;
var selectedFemale = undefined;
var selectedClass = undefined;

// On clicking already selected character
$('#char_lists ul').on('click', 'li.selected', function() {
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
    // const excludedExpansion = expansion === 'nohrian' ? 'hoshidan' : 'nohrian';
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
    if (selectedClass) setClass(selectedClass)
});

function updateData() {
    $('#child li').remove();
    $('#child-label').html(`<li></li><li>${statLabels.join('</li><li>')}</li>`);
    
    const displayParent = (gender, data) => {
        if (!gender) return;
        $('#child-' + gender).append(`<li>${gender.charAt(0).toUpperCase()}</li>`);
        for (const key in data) {
            const value = data[key];
            $('#child-' + gender).append(`<li class="${value > 0 ? 'positive' : 'negative'}">${value || ''}</li>`);
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

function selectInfo(menuName) {
    $(".info-menu").removeClass('active')
    $(`#${menuName}`).addClass('active')

    $('#extra-info-buttons button').removeClass('active')
    $(this).addClass('active')
} 

function setClassData() {
    $.get({url: "http://50.47.154.50:8080/dataEP"});
    createClasses(hoshidanClasses, 'hoshidan-classes')
    createClasses(nohrianClasses, 'nohrian-classes')
    createClasses(otherClasses, 'other-classes')
}

function createClasses(data, expansion) {
    if (!data) {
        console.log(`Can't find ${expansion}`)
        return
    }
    let list = $(`#${expansion}`)
    Object.keys(data).forEach((className) => {
        $(list).append(
            `<li class="child-class" data-classname="${className}">${className}</li>`
        )
    })
}

function getClassData(className) {
    if (className in hoshidanClasses) return hoshidanClasses[className]
    if (className in nohrianClasses) return nohrianClasses[className]
    if (className in otherClasses) return otherClasses[className]
}

$("#class-selector button").on('click', function() {
    let expansion = $(this).data('expansion')
    $("#class-selector button").removeClass('active')
    $(this).addClass(('active'))
    $(`#class_list ul`).addClass('hidden')
    $(`#class_list #${expansion}`).removeClass('hidden')
})

function changeView(view) {
    if (view === "parents") {
        $('#class_list').addClass('hidden')
        $('#char_lists').removeClass('hidden')
        $('#parent-view-button').addClass('hidden')
        $('#class-view-button').removeClass('hidden')
    }
    else if (view === "classes") {
        $('#char_lists').addClass('hidden')
        $('#class_list').removeClass('hidden')
        $('#class-view-button').addClass('hidden')
        $('#parent-view-button').removeClass('hidden')
        
    }
}

$("#class_list ul").on('click', 'li', function() {
    let className = $(this).data('classname')
    $('#class_list ul li').removeClass('active')
    $(this).addClass('active')
    setClass(className)
})

function setClass(className) {
    $('#class_stats ul li').remove()
    let classData = getClassData(className)
    selectedClass = className
    $('#class-label').append('<li></li>')
    $('#class-max').append(`<li>${className}</li>`)
    $('#class-combined').append(`<li>Child</li>`)
    Object.keys(classData).forEach((stat) => {
        $('#class-label').append(`<li>${stat}</li>`)
        $('#class-max').append(`<li>${classData[stat]}</li>`)
        if (selectedMale && selectedFemale) {
            let totalStat = selectedMale[stat] + selectedFemale[stat] + classData[stat]
            $('#class-combined').append(`<li>${totalStat}</li>`)
        }
    })   
}