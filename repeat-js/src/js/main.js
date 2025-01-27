const people = [
    { name: 'Jan', age: 25, city: 'Warszawa' },
    { name: 'Anna', age: 35, city: 'Kraków' },
    { name: 'Piotr', age: 45, city: 'Gdańsk' },
];

/* Funkcje */
/* 
ES6
const addNumbers = (num1, num2) => {
    return num1 + num2;

    ES5
    fuction addNumbers(num1, num2) {
        return num1 + num2;
    }
} 
    
*/

const addNumbers = (num1, num2) => num1 + num2;

addNumbers(2, 3); // 5
console.log(addNumbers(2, 3));

/* Destrukturyzacja */

/* const jan= people[0];
const anna= people[1];
const piotr= people[2]; */

const [jan, anna, piotr] = people;

console.log(jan);
console.log(anna);
console.log(piotr);

const { name: userName, age: userAge, city: userCity } = jan;

console.log(userName);
console.log(userAge);
console.log(userCity);

console.log(`Imię: ${jan.name}; Wiek: ${jan.age}; Miasto: ${jan.city}`);

/* Spread */

const extendedPeople = [...people, { name: 'Krzysztof', age: 55, city: 'Wrocław' }];

console.log(extendedPeople);

const extendedUser = { ...jan, role: 'admin', city: 'Poznań' };
console.log(extendedUser);

/* map i filter */

const names = people.map((person, index) => {
    return `${index}: ${person.name}`;
});
console.log(names);

const youngPeople = people.filter(person => person.age < 40);
console.log(youngPeople);

/* forEach */

people.forEach(person => {
    console.log(person);
});

/* reduce */

const totalAge = people.reduce((total, person) => {
    return total + person.age;
}, 0);
console.log(totalAge);

/* find */

const findAnna = people.find(person => person.name === 'Anna');
console.log(findAnna);

/* Zdarzenie */
/* Odpowiednikiem input w react jest zdarzenie onChange */

document.querySelector('input').addEventListener('input', e => {
    console.log(e.target.value);
});


