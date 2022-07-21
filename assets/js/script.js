import { diaporama } from "./lib/diaporama.js"; 
import { skillAnim } from "./lib/skillAnim.js";
diaporama(); 
skillAnim(); 

 /* const mybutton = document.getElementsByClassName("btn");
 function topFunction() {
    document.documentElement.scrollTop = 0;
  } */


let scrollToTopBtn = document.getElementById("btnToTheTop");
let rootElement = document.documentElement;
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);