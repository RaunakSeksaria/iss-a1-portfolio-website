var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }

  x[myIndex - 1].style.display = "flex";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}