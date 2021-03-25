// Object Destructuring
const person = {
    // name: 'Nina',
    age: 24,
    location: {
        city: 'Seoul',
        temp: 14
    }
};

// const name = person.name
// const age = person.age
const { name: firstname = 'ChaeYeong', age } = person;
const { city, temp: temperature } = person.location;

// console.log(`${firstname} is ${age}. She is now in ${city}. It is ${temperature} degrees celcius.`);


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array Destructuring
const address = ['Sukgolro 112-11', , , '22114'];
const [, cityName="Yongsangu", state="Seoul"] = address;

console.log(`You are in ${cityName}, ${state}.`)

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, smallPrice, mediumPrice, largePrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);