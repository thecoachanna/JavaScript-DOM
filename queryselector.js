/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first' using querySelector

let first = document.querySelector('#first')
console.log(first)

// 2. Get the elements with a class of 'second' with querySelector

let secondElement = document.querySelector('.second');
console.log(secondElement)

/* It logs just the first "second" class.*/

// 3. Try the above prompt with querySelectorAll. What's the difference between
//    what these two methods return?

let allElements = document.querySelectorAll('.second');
// console.log(allElements)

/* It logs all 3 of the "second" class. Logs an array. */

// 4. Get the span element using querySelector

let spanElement = document.querySelector('span');
// console.log(spanElement)

// 5. Get multiple span elements using querySelectorAll

let allSpanElements = document.querySelectorAll('span');
// console.log(allSpanElements)

// 6. Select only "a" tags *directly inside* of a div (no grandchildren).

let aTags = document.querySelectorAll('div > a')
// console.log(aTags)

// 7. Select all elements that contain a "data-target" attribute

let dataTarget = document.querySelectorAll('[data-target]')
// console.log(dataTarget)

// 8. Select all elements where the data-target attribute equals "#false"

let targetFalse = document.querySelectorAll('[data-target="#false"]')
// console.log(targetFalse)
