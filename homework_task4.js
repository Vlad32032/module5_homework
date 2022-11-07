function getRandom(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

let randomInt = getRandom(100);

console.log(randomInt);