function Person(
  firstName,
  yearOfBirth,
  lastName = 'Smith',
  nationality = 'Irish'
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

const john = new Person('John', 1990);
console.log(john);

const emily = new Person('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);
