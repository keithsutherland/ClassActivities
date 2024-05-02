// select all unordered list (ul) elements
const ulList1 = document.querySelectorAll("ul");
const ulList2 = document.getElementsByTagName("ul");

// select all elements with the class "class-week"
const classWeekList1 = document.getElementsByClassName("class-week");
const classWeekList2 = document.querySelectorAll(".class-week");
// select all elements with the class "nav-bar"
const navBarList1 = document.getElementsByClassName(".nav-bar");
const navBarList2 = document.querySelectorAll(".nav-bar");
const navBarList3 = document.querySelectorAll("ul.nav-bar");
// ^^Only doable with query selector All

// select the element with the id "dog-picture" and save it to a variable
const pic = document.querySelector("#dog-picture");

// Demonstrate a complex selector that finds all the child li elements under a ul with the class of nav-bar
const navBarList4 = document.querySelectorAll("ul.nav-bar li");

// 4.2.2-NodeRelationships.js

// select the root node
const root = document.querySelector("body");

// select the last child of the root node
const lastChild = root.lastElementChild;
// select all the children of the body element
const kids = root.children;
// select the next sibling of the h2 node
const sibling = document.querySelector("h2").nextElementSibling;
// select the parent element of the h1 node
const parent = document.querySelector("h1").parentElement;

// 4.2.3.- ChangingElements

// print the outer HTML of the navigation bar
// console.log(document.querySelector("#unorderedList").outerHTML);
// console.log(document.getElementById("unorderedList").outerHTML);

// print the inner HTML of the navigation bar
console.log(document.querySelector("#unorderedList").innerHTML);
console.log(document.getElementById("unorderedList").innerHTML);

// print the text content of the #class-schedule-list element
console.info(document.querySelector("h6").textContent);

//  "Quite small"
// select the classList for the first class-week, then add the class "week-1"
document.querySelector("h2").classList.add("small-text");
// <h2 small-text'>This is a smaller header</h2>

// select the img element and add a src attribute
document.querySelector("img").src = "https//path/to/image";
// change the font color of the h1 element
document.querySelector("h1").style.color = "blue";

// 4.2.4-CreatingElements

// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");
document.querySelector("body").appendChild(unorderedList);
const listItem = document.createElement("li");
listItem.textContent = "my first item";
listItem.style.color = "beige";
listItem.id = "my-item";
unorderedList.appendChild(listItem);

// remove the paragraph element in the nav-bar
document.querySelector("h1").remove();
const h1Element = document.querySelector("h1");

// add your new ul element to the nav-bar

// create two new list item (li) elements, and add some text to them

// add the li elements to the ul in the nav-bar

// 4.2.5-EventListeners.js
document.getElementById("my-item").addEventListener("click", event => {
  alert("my item was clicked");
  console.info("event", event);
});

// add an event listener to the dog picture that listens for a "click" and gives an alert
document.querySelector("h3").addEventListener("mouseover", event => {
  event.target.style.color = "red";
});
document.querySelector("h3").addEventListener("mouseout", event => {
  event.target.style.color = "black";
});

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document
  .querySelector('a[href="http://www.google.com"]')
  .addEventListener("click", event => {
    event.preventDefault();
    window.location.href = "https://bing.com";
  });
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
