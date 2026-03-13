
// adapted from W3Schools: (https://www.w3schools.com/howto/howto_css_modals.asp)

// get the modal
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");
let modal4 = document.getElementById("modal4");

// get the element that opens the modal
let blog1 = document.getElementById("miniBlog1");
let blog2 = document.getElementById("miniBlog2");
let blog3 = document.getElementById("miniBlog3");
let blog4 = document.getElementById("miniBlog4");

// get the <span> element that closes the modal
let closeSpan = document.getElementsByClassName("close")[0];

// when the user clicks the element, open the modal 
for (let i = 0; i < 4; i++) {
blog[i].onclick = function() {
  modal[i].style.display = "block";
}
}

// blog2.onclick = function() {
//   modal2.style.display = "block";
// }

// blog3.onclick = function() {
//   modal3.style.display = "block";
// }

// blog4.onclick = function() {
//   modal4.style.display = "block";
// }

// when the user clicks on <span> (x), close the modal
closeSpan.onclick = function() {
  modal[i].style.display = "none";
}

// when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for (let i = 0; i < 4; i++) {
  if (event.target == modal[i]) {
    modal[i].style.display = "none";
  }
}
}