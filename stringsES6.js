let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2019 - year;
}

console.log(
  `This is ${firstName} ${lastName}. He was botn in ${yearOfBirth}. Today he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
