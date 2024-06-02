const box=document.querySelector('.box-hidden');
const toggleButton=document.querySelector('.btn-small ')


function Show(){
    const currentDisplay = getComputedStyle(box).display;
   if(currentDisplay==='none'){
    box.style.display='inline-block'
    toggleButton.textContent="Show Less"
   }
   else{
    box.style.display='none'
    toggleButton.textContent="Show More"

   }
   
}
function sendEmail(){
    window.location = "mailto:xyz@yourapplicationdomain.com";
}

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.navbar');
   

    burger.addEventListener('click', () => {
        header.classList.toggle('show');
        navbar.classList.toggle('show');
        
    });
});
