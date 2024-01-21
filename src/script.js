var hamburger = document.querySelector('.hide');
var cross = document.querySelector('.x');
var bar = document.querySelector('.links');
let btn1 = document.querySelector('#btn-hbg');
let btn2 = document.querySelector('#btn-x');




let f1 = ()=>{
    bar.style.display="block";
    btn1.style.display="none";
    btn2.style.display="block";
}
let f2 = ()=>{

    bar.style.display="none";
    btn1.style.display="block";
    btn2.style.display="none";
}

btn1.addEventListener('click',f1);
btn2.addEventListener('click',f2);



const cardContainer = document.querySelector('.projects');
const cards = document.querySelectorAll('.proj');

let cardIndex = 0;

function scrollCards() {
  const cardWidth = cards[0].offsetWidth;
  cardIndex = (cardIndex + 1) % cards.length;
  const scrollPosition = -cardIndex * cardWidth;

  cardContainer.style.transition = 'transform 0.3s ease';
  cardContainer.style.transform = `translateX(${scrollPosition}px)`;

  setTimeout(scrollCards, 7000); // Scroll every 7 seconds
}

// Start the automatic scroll effect
setTimeout(scrollCards, 7000);
