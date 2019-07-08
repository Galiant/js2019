const years = [1990, 1965, 1982, 1937];

let ages = years.map((el) => 2019 - el);

console.log(ages);

ages = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(ages);

ages = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});

console.log(ages);
