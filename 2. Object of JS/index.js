let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

// let clone = structuredClone(user);
let clone = { ...user };

clone.name = "hallan";
user.sizes.width = 60; // change a property from one place

console.log(user == clone); // false, different objects
// user and clone are totally unrelated now
console.log(user); // 50, not related
console.log(clone); // 50, not related
