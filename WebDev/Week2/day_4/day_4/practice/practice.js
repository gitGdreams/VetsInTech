// DRY - Don't Repeat Yourself
var animalContainerElement = document.getElementById('animalContainer');
var foodContainerElement = document.getElementById('foodContainer');
var titleElement = document.getElementById('title');


//import your external javascript file into your html file

// Change following elements using ONLY JavaScript and the DOM methods.

// psuedocode - write one line of comments for every line of code

// 1. Change the inner text of the first <h1> to “I’m using JavaScript!!”
titleElement.innerText = "I'm using JavaScript"
// 2. Change the background color of the first <div> with the id of animalContainer to blue
animalContainerElement.style.backgroundColor = "blue" 
// 3. Give all the <div> a black border
animalContainerElement.style.border = '1px solid black'
foodContainerElement.style.border = '1px solid black'

