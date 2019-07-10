class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3541),
  new Park('Oak Park', 1953, 1.1, 800)
];

const allStreets = [
  new Street('Malahide Road', 1967, 1.6),
  new Street('Merrion Road', 1994, 2.9, 5),
  new Street('Bulevard Road', 1953, 1.1, 1)
];

function calc(arr) {
  const sum = arr.reduce((prev, current, index) => prev + current, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log('------- PARKS REPORT --------');
  // Density
  p.forEach(el => el.treeDensity());
  // Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
  // Which park have more than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log('------- STREETS REPORT --------');
  // Total and average length of the town's streets
  const [totalLength, avglength] = calc(s.map(el => el.length));
  console.log(
    `Our ${
      s.length
    } streets have a total length of ${totalLength} km with an average of ${avglength} km.`
  );
  // Classify sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
