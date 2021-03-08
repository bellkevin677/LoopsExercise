for (i = 1; i <= 7; i++){
    console.log(i);
}

for (i = 5; i <= 25; i += 5){
    console.log(i);
}

const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
]

for (n of wizards){
    console.log(n);
}

let harryPotterMovies = 0

while (harryPotterMovies <= 8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
}

const hogwartHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
]

for (house of hogwartHouses){
    for (char of house){
        console.log(char);
    }
}

const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
];

for (word of quote){
    console.log(word);
}

let fullQuote = "";
for (i = 0; i< quote.length; i++){
    fullQuote += quote[i];
    if (i < quote.length - 1){
        fullQuote += " ";
    }
}
console.log(fullQuote);