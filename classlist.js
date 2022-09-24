/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with the `elements` class from the DOM and save it to
//    a variable.

const allElements = document.querySelector('.elements')
// console.log(allElements)

// 2. Add the class `this-is-fun` to the .elements node
allElements.classList.add('this-is-fun')

// 3. Add the class `disco-party` to the .elements node
allElements.classList.add('disco-party')


// 4. Remove the class `elements` from the .elements node
allElements.classList.remove('elements')