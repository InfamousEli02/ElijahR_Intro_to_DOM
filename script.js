document.addEventListener("DOMContentLoaded", function() {
//getElementByID
const titleElement = document.getElementById("title");

console.log(titleElement);

//querySelector
const pTag = document.querySelector("p");
const pTag2 = document.querySelector("p#paragraph2");
const pTag3 = document.querySelector("p#paragraph3");

console.log(pTag);
console.log(pTag2);
console.log(pTag3);

})