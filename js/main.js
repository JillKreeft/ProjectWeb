var meerButton = document.querySelector('.meerknop');
var meerItems = document.querySelector('.menu-items');

function showMenu(){
meerItems.classList.toggle('menu-show');
}

meerButton.addEventListener("click", showMenu);
