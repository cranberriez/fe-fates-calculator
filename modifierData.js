let universalChars = 
`Felicia	-2	2	0	1	0	-1	1
Jakob	2	-2	2	0	-1	0	-1
Kaze	-2	0	2	3	-2	-1	1
Azura	0	0	1	3	0	-3	0
Silas	1	0	2	0	-1	0	-1
Shura	-1	0	-1	3	-1	-2	2
Izana	0	1	1	-2	0	0	1
Mozu	0	0	1	1	1	0	-2`
let hoshidanChars =
`Rinkah	-1	0	-2	1	0	2	0
Sakura	0	2	-1	1	0	-1	0
Hana	1	0	1	2	-1	-3	1
Subaki	-1	0	2	-2	-1	3	-1
Saizo	1	0	3	-2	0	1	-2
Orochi	0	3	2	-2	-1	-2	1
Hinoka	1	-1	-1	1	0	-1	2
Azama	2	-3	0	1	0	1	0
Setsuna	0	0	1	3	-1	-1	-1
Hayato	0	1	-1	2	1	-1	-1
Oboro	1	-1	1	1	-1	1	-1
Hinata	1	0	-1	-2	0	2	0
Takumi	1	0	3	-2	1	0	-2
Kagero	3	0	-1	-1	0	-1	1
Reina	2	0	0	2	-1	-2	-1
Kaden	1	0	-3	2	1	-2	2
Ryoma	1	0	2	1	1	-2	-2
Scarlet	2	0	0	1	-1	1	-2
Yukimura	-1	0	3	-1	0	-1	0`
let nohrianChars =
`Gunter	2	0	1	-2	0	2	-2
Elise	-1	3	-2	1	1	-3	1
Arthur	1	0	3	0	-3	1	-1
Effie	3	0	-1	1	0	-1	-1
Odin	0	1	1	-1	1	0	-1
Niles	-2	0	-1	3	0	0	1
Nyx	0	3	-2	2	-1	-2	1
Camilla	1	-1	1	1	-2	1	0
Selena	-1	0	-1	2	0	1	0
Beruka	-1	0	2	-2	0	2	-1
Laslow	1	0	2	-1	1	-1	-1
Peri	1	0	-1	1	0	-2	2
Benny	0	0	0	-3	0	3	1
Charlotte	3	0	0	2	0	-2	-2
Leo	-2	2	0	-2	0	0	2
Keaton	3	0	-2	-1	0	2	-1
Xander	2	-1	-1	-1	2	1	-2
Flora	1	-1	2	0	-1	1	-1`

function processChars(data) {
    const rows = data.split('\n'); // split data into rows
    const characters = {}; // create an empty object to store character data
  
    rows.forEach(row => {
      const values = row.split('\t'); // split row into values
      const name = values[0]; // get name from first value
      const stats = {
        Str: parseInt(values[1]),
        Mag: parseInt(values[2]),
        Skl: parseInt(values[3]),
        Spd: parseInt(values[4]),
        Lck: parseInt(values[5]),
        Def: parseInt(values[6]),
        Res: parseInt(values[7])
      }; // create an object with the character's stats
  
      characters[name] = stats; // add character to the object
    });
  
    return characters; // return the object with all characters
}

let universalData = processChars(universalChars)
let nohrianData = processChars(nohrianChars)
let hoshidanData = processChars(hoshidanChars)