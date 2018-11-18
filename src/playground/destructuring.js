console.log("This is the ES6 destructuring example...");

//
// Object destructuring
//
const person = {
  name: "Leon",
  age: 27,
  location: {
    city: "Medellin",
    temp: 27
  }
};

//const name = person.name;
//const age = person.age;

const { name: firstName = "Anonymous", age } = person;
console.log(`This is ${firstName} and I'm ${age} years old.`);

const { city, temp: temperature } = person.location;
console.log(`It's ${temperature} in ${city}`);

//
// Array destructuring
//
const address = ["Fake Street", "Springfield", "California"];

const [street, town, state, zip = "0000"] = address;
console.log(`You are in ${street} of ${town} ${state}, ZIP Code: ${zip}`);
