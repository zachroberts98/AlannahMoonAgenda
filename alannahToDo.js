

//Selected the H1 element.

// var h1 = document.querySelector("h1");

// Manipulated the element to be pink

// h1.style.color = "pink"

// --------------------------------------------------------------------------------------------


// var h1 = document.querySelector("h1"); //Select
// var isWhite = false;

// setInterval(function() { //Manipulate
//   if(isWhite) {
//     h1.style.color = "white";
//   } else {
//     h1.style.color = "#374a32";
//   }
//   isWhite = !isWhite;
// }, 1000);

// ------------------------------------------------------------------------------------------------
// var items = document.querySelectorAll("ul li");
//   for (var i = 0; i < items.length; i++) {
//     items[i].addEventListener("click", function() {
//     this.style.textDecoration = "line-through";
//     });
//   }

var items = document.querySelectorAll("ul li");
  for (var i = 0; i < items.length; i++) {
items[i].addEventListener("mouseover",function(){
  this.classList.add("selected");
});
items[i].addEventListener("mouseout",function(){
  this.classList.remove("selected");
});
items[i].addEventListener("click",function(){
  this.classList.toggle("checked");
});
};







