/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first'

let newElement = document.getElementById('first');
// console.log(newElement)


// 2. Now delete that first element (in the html file), and re-run your code.
//    What changed?

/* The misleading second element with the same ID as "first" showed up.

3. Get the elements with a class of 'second' with getElementsByClassName:

let secondElement = document.getElementsByClassName('.second');
console.log(secondElement)


4. Delete one of the elements with a class of 'second' and refresh the page.
   Do you get a similar result?

/* No, it deleted one of the children in the element going from 3 to 2.*/

// 5. Get the span element using getElementsByTagname:

let spanElement = document.getElementsByTagName("span");
// console.log(spanElement)

// 6. Add a span anywhere, and re-run the last piece of code. What's different?

// There's another span added.