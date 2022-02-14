// var menubtn = document.getElementById("menubtn")
// var sidenav = document.getElementsByClassName("sidenav")
// var menu = document.getElementById("menu")

// // menubtn.onclick = function(){
// //     if(sidenav.style.right == "-250px"){
// //         sidenav.style.right == "0";
// //     }
// //     else{
// //         sidenav.style.right == "-250px";
// //     }
// // }

// menu.addEventListener('click', function(){
//     sidenav.classList.toggle('activesidenav');
// })



let navSide = document.querySelector(".sidenav");
 let btn = document.getElementById("menu");

 btn.addEventListener("click",function(){
   navSide.classList.toggle("activesidenav")
 })