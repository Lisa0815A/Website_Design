//changing the color of navbar when the webpage scrolled
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { 
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";  
    } else {
        navbar.style.backgroundColor = "transparent"; 
    }
});
// toggle bar
const menu = document.querySelector(".menu");
const toggleBtn = document.querySelector("#menu-toggle");
const circle_01 = document.querySelector(".circle-01");
toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");    
    if (menu.classList.contains("active")) {
        toggleBtn.classList.remove("fa-bars");
        toggleBtn.classList.add("fa-times"); // "X" icon
        if(circle_01){
            circle_01.style.visibility = "hidden";
        }

    } else {
        toggleBtn.classList.remove("fa-times");
        toggleBtn.classList.add("fa-bars");
        if(circle_01){
            circle_01.style.visibility = "visible";
        }        
    }
});
// for Section Animation
const slides = document.querySelectorAll('.slide');

window.addEventListener('scroll', () => {
  slides.forEach(slide => {
    const slideTop = slide.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (slideTop < triggerPoint) {
      slide.classList.add('visible');
    }
  });
});

const popups = document.querySelectorAll('.popup');

window.addEventListener('scroll', () => {
  popups.forEach(popup => {
    const slideTop = popup.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (slideTop < triggerPoint) {
      popup.classList.add('visible'); 
    }
  });
});

//Achieve Box
const counters = document.querySelectorAll('.para');

counters.forEach( counter => {
    const target = +counter.getAttribute('data-target');
    let count=0;
    const interval = setInterval(() => {
        count++;
        counter.textContent = count;        
        if(count === target){
            clearInterval(interval);
        }
    },10);
});
//Question box
const questionBoxContents = document.querySelectorAll(".question-box-content");
const paragraphs = document.querySelectorAll(".question-box-1-1 p");
const caretIcons = document.querySelectorAll(".fa-caret-left");

// Add event listener for each question box
questionBoxContents.forEach((questionBoxContent, index) => {
    questionBoxContent.addEventListener('click', function() {
        const paragraph = paragraphs[index];
        const caretIcon = caretIcons[index];

        const questionBox = paragraph.closest('.question-box-1-1'); 
        
        paragraph.style.display = (paragraph.style.display === 'none' || paragraph.style.display === '') ? 'block' : 'none';
        
        caretIcon.classList.toggle('fa-caret-down'); 
        caretIcon.classList.toggle('fa-caret-left');        
        questionBox.classList.toggle('active');
    });
});
