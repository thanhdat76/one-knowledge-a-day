function* simpleGenerator() {
  console.log("Generator starts");
  yield 1;
  console.log("Generator resumes");
  yield 2;
  console.log("Generator ends");
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
