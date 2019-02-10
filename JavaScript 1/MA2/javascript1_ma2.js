//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduction = function(){
    console.log("My name is " + this.name + " and I am " + this.age + " years old");
};

var person1 = new Person("Jon", 56);
person1.introduction();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// I assume you mean the number 5 in the array
console.log(numberArray.slice(4, 5));

//3. Delete the last number in the array that you created above.
numberArray = numberArray.slice(0, numberArray.length-1);
console.log(numberArray);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
var paragraph = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

function fruitChanger(text){
    return text.replace("strawberry", "banana").replace("strawberries", "bananas").replace("Strawberries", "Bananas");
}

var changedParagraph = fruitChanger(paragraph);

console.log(changedParagraph);


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var buttonArray = ["Manchester United", "Liverpool", "Chelsea", "Arsenal"];

console.log(buttonArray);

var button = document.createElement("BUTTON");
var text = document.createTextNode("Remove Elements");
button.appendChild(text);
document.body.appendChild(button);

button.addEventListener(
    'click',function(){
        // Using the pop or shift functions to remove the elements seems too excessive
        // I therefore chose to create a new empty array
        buttonArray = [];
        console.log(buttonArray);
        buttonArray.push("Audi");
        console.log(buttonArray);
        buttonArray.push("Opel");
        console.log(buttonArray);
        buttonArray.push("Mercedes");
        console.log(buttonArray);
        buttonArray.push("Volkswagen");
        console.log(buttonArray);
    }
);

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var person1 = {
    name: "Paul",
    age: 32,
    gender: "male"
};

var person2 = {
    name: "Marit",
    age: 24,
    gender: "female"
};

var person3 = {
    name: "Mikkel",
    age: 43,
    gender: "male"
};

var peopleArray = [person1, person2, person3];
console.log(peopleArray);

var peopleArray = peopleArray.filter(function(person){
    return person.name === "Mikkel";
});

console.log(peopleArray);

//7. Create a simple function that logs the date.

function dateLog(){
    var date = new Date();

    console.log(date);
}

dateLog();
