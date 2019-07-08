function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

var ages = [18, 30, 12, 21];

const sum2 = addFourAges(...ages);
console.log(sum2);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Bob', 'Anne', 'Mary'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);
