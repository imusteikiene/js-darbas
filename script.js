  
//   PRAKTIKA SU STRING METODAIS

//   BENDRAI
  
//   1. tekstas1.includes(tekstas2) <- tikrina ar tekstas2 yra tekstas1 viduje (grąžina boolean reikšmę);
//   2. tekstas.slice() <- apkarpo tekstą pagal paduodamus parametrus (t.y. nukerpa pradžią ar/ir galą);
//   3. tekstas.trim() <- ištrina priekyje teksto padėtus tarpelius;
//   tekstas.toUpperCase(), tekstas.toLowerCase() <- didina/mažina teksto kapitalizaciją (pvz. "a" => "A").
//   4. tekstas.repeat(skaičius) <- atkartoja tekstą tiek kartų, kiek nurodo skaičius.
//   5. tekstas.split(parametras) <- padalina tekstą į kelias dalis (pagal paduotą parametrą) ir grąžina array (pvz. per tarpelį: "BMW AUDI".split(" ") => ["BMW", "AUDI"]).
  
//   UŽDUOTYS
  
//   1. Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
//   2. Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.
//   3. Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.
  
//   Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis.
  
  
  
//   pirma uzduotis

  
  function generateName() {
   
    const name = document.getElementById("nameInput").value;
    const number = parseInt(document.getElementById("numberInput").value);

    // Tikriname, ar skaičius sveikas
    if (Number.isInteger(number)) {
     
        const resultElement = document.getElementById("result");
        resultElement.textContent = repeatName(name, number);
    } else {
       
        alert("Įveskite sveiką skaičių!");
    }
}

function repeatName(name, times) {
   
    return name.repeat(times);
}


// antra uzduotis

function checkNameLength() {
   
    const name = document.getElementById("nameInput").value;

  
    const trimmedName = name.trim();
    const lengthWithoutSpaces = trimmedName.length;

  
    alert(`Vardo ilgis (be tarpelių): ${lengthWithoutSpaces}`);
}


// trecia uzduotis

function displayFullName() {
   
    const fullName = document.getElementById("fullNameInput").value;

    
    const [firstName, lastName] = fullName.split(" ");

   
    if (firstName && lastName) {
       
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `<h1>Vardas: ${firstName}</h1><h1>Pavardė: ${lastName}</h1>`;
    } else {
      
        alert("Įveskite savo pilną vardą (vardas ir pavardė).");
    }
}
