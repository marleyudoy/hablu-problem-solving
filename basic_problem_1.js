// 1. Create a variable called carName, assign the value Volvo to it.
let carName = "Volbo";
// 2. On one single line, declare three variables with the following names and values:
let firstName = "Jhon";
let lastName = "Doe";
let age = 35;

// 3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).
let x = 5;
let y = 10;
x = 5 * 10;

// 4. Use comments to describe the correct data type of the following variables:
let length = 16; // length is number data type cause 16 is a number
let jhon_name = "Johnson"; // data type ? jhon name is a string data type beacuse "jhonson" is a string

const a = {
  firstName: "John",
  lastName: "Doe",
}; // data type ? a is object data type

//5. Execute the function named myFunction.
function myFunction() {
  alert("Hello World!");
}
myFunction();

// 6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
const person = {
  name: "Jhon",
  age: 50,
};

// 7. The <button> element should do something when someone clicks on it. Try to fix it! == S
const click_btn = document.getElementById('click_btn');
click_btn.addEventListener("click",show_alert)

function show_alert(){
  alert(person.name + " is " + person.age);
}


// 8 .Array Related Question 

const cars = ["Volvo", "Jeep", "Mercedes"];

cars.forEach((item) => {
  alert(item)
})

const Brand = ["Volvo", "Jeep", "Mercedes"]; 
Brand[0] = "Ford"

// 9.Math Related Problems
const randome_number = Math.floor(Math.random() * 10) // it will give randome number between 1-10
let largest_number = Math.max(10, 20);
let squareRoot = Math.sqrt(9);
// 10 comparison operator related problems! 
let num1 = 10;
let num2 = 5;
if(num1 > num2){
  alert(num1)
}
let my_age = 18;
const age_result = my_age < 18 ? "Too yooung" : "Old enough";

