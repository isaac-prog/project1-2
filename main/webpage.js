function hamburgerHTML() {
    var x = document.getElementById("navbar");
    if (x.className.indexOf("display-burger") == -1) {
      x.className += " display-burger";
    } else { 
      x.className = x.className.replace(" display-burger", "");
    }
  }
// select all the page buttons
let allButtons = document.querySelectorAll('.navbar-contents-item');

for (let button of allButtons) {
    button.addEventListener('click', function(event){
        // find out which button hs been pressed
        let clickedButton = event.target;
        let pageNumber = clickedButton.dataset.page;

        let allPages = document.querySelectorAll('.page');
            for (let p of allPages) {
                p.classList.remove('show');
                p.classList.add('hidden');
            }
        
        // only show page that the button is for
        document.querySelector("#page-" + pageNumber).classList.remove('hidden');
        document.querySelector("#page-" + pageNumber).classList.add('show');
    })
}
