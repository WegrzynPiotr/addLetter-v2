// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'Hekst2', 'tekst3'];
let activeLetter = 0;
let activeText = 0;


// Implementacja
const addLetter = () => {
spnText.textContent += txt[activeText][activeLetter];
activeLetter++;
if(activeLetter == txt[activeText].length){
    activeText++;
    if(activeText == txt.length) return;
    return setTimeout(function(){
        activeLetter=0;
        spnText.textContent = "";
        addLetter();
    },2000)
}
    setTimeout(addLetter, 100);
}

addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);