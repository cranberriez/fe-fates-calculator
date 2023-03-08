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

function createPeople(names, gender) {
    names.forEach(person => {
        var charData
        var name
        const addPerson = (data) => {
            charData = data
            name = person
        }
        if (person in universalData) addPerson(universalData[person])
        if (person in nohrianData) addPerson(nohrianData[person])
        if (person in hoshidanData) addPerson(hoshidanData[person])

        $(`ul#${gender}`).append(
            `<li id='${name}'>${name}</li>`
        )
    });
}