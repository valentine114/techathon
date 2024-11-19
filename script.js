const navMenu = document.getElementById('nav-menu');
const nav = document.getElementById('nav');
console.log(navMenu)

 navMenu.addEventListener( "click",() =>  {
    navMenu.classList.toggle("active");
    nav.classList.toggle("active");
 })

//  document.querySelectorAll(.'')