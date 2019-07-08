function isFullAge(limit, ...years) {
  years.forEach((current) => console.log(2019 - current >= limit));
}

isFullAge(16, 1990, 1999, 1965, 2004);
