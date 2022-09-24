/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */
// 1. Get all elements with a class of `.second` from the DOM and save them to
//    a variable. This will be a NodeList (which works just like an array).
let secondElements = document.querySelectorAll('.second')

// 2. Get the first item from the NodeList and save it to a variable.
let firstSecondElement = secondElements[0]

// 3. Print the `dataset` property of the item from Step 2.
let dataSet = firstSecondElement.dataset
// console.log(firstSecondElement.dataset)

// 4. Add a `data-name` attribute to the HTML page for the first heading with
//    a class of second. The value of `data-name` should be your name. What
//    happens when you print the `dataset` property now?
firstSecondElement.setAttribute('data-name', 'Anna')
// console.log(firstSecondElement.dataset)

// My name within the data-name attribute shows up.