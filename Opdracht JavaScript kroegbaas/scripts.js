//Deel 1: leeftijdscontrole

const Age = 23; // Ik heb het gecheckt met typeof age. Daar kwam uit: number.

if (Age >= 18) {
  console.log('Kom binnen!');
} else {
  console.log('Helaas, je mag niet naar binnen. Je bent te jong.');
}

//Ik heb  verschillende leeftijden getest en de code werkt.

// Deel 2: ladiesnight

var isFemale = true;

if (isFemale) {
  console.log('Jij mag naar binnen!');

} else {
  console.log('Sorry, geen kerels vanavond')
}

var isFemale = false;

if (isFemale) {
  console.log('Jij mag naar binnen!');

} else {
  console.log('Sorry, geen kerels vanavond');
}

// Deel 3: veilig thuiskomen

const driverStatus = 'Bob';

if (driverStatus = 'Bob') {
  console.log('Start de motor maar');

} else {
  console.log('Inleveren die autosleutel');
}

