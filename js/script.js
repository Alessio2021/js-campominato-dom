// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

const select = document.getElementById('select');
const grid = document.getElementById('grid');
const play = document.querySelector('.play');
let points = 0;

play.addEventListener('click', function(){
    let selectValue = select.value;
    grid.innerHTML = '';
    
    switch (selectValue){
    case 'facile':
    default:
        bombs = createBombs(16, 1, 100);
        console.log(bombs);

        for (let i = 1; i < 100 + 1; i++) {
            // creo quadrato
            const div = document.createElement('div');
            div.classList.add('square');
            div.innerHTML = i;
            grid.append(div);

            const bombsClass = document.querySelectorAll('.bombs');
            const isClicked = div.classList.contains('clicked');
            
            if (isClicked == false) {
                div.addEventListener('click', function () {
                    const numSquare = parseInt(this.innerText);
                    div.classList.add('clicked');

                    if (bombs.includes(numSquare)) {
                        div.classList.add('bombs');
                        alert('Il tuo punteggio è di' + ' ' + points);
                        const divs = document.querySelectorAll('.square')

                        for (let index = 0; index < divs.length; index++) {
                            const numDom = parseInt(divs[index].innerText);
                            console.log(numDom);

                            if (bombs.includes(numDom)) {
                                divs[index].classList.add('bombs');
                            }
                        }

                    } else {
                        points++
                        console.log(points);
                        console.log(isClicked);

                        if (points == 84) {
                            alert('HAI VINTO!')
                        }
                    }
                });
            }
        }
        break;

    case 'medio':
        bombs = createBombs(16, 1, 81);
        console.log(bombs);

        for (let i = 1; i < 81 + 1; i++) {
            // creo quadrato
            const div = document.createElement('div');
            div.classList.add('square', 'medium');
            div.innerHTML = i;
            grid.append(div);

            const bombsClass = document.querySelectorAll('.bombs');
            const isClicked = div.classList.contains('clicked');

            if (isClicked == false) {
                div.addEventListener('click', function () {
                    const numSquare = parseInt(this.innerText);
                    div.classList.add('clicked');

                    if (bombs.includes(numSquare)) {
                        div.classList.add('bombs');
                        alert('Il tuo punteggio è di' + ' ' + points);
                        const divs = document.querySelectorAll('.square')

                        for (let index = 0; index < divs.length; index++) {
                            const numDom = parseInt(divs[index].innerText);
                            console.log(numDom);

                            if (bombs.includes(numDom)) {
                                divs[index].classList.add('bombs');
                            }
                        }

                    } else {
                        points++
                        console.log(points);
                        console.log(isClicked);

                        if (points == 64) {
                            alert('HAI VINTO!')
                        }
                    }
                });
            }
        }
        break;

    case 'difficile':
        bombs = createBombs(16, 1, 49);
        console.log(bombs);

        for (let i = 1; i < 49 + 1; i++) {
            const div = document.createElement('div')
            div.classList.add('square', 'hard');
            div.innerHTML = i;
            grid.append(div);
            const bombsClass = document.querySelectorAll('.bombs');
            const isClicked = div.classList.contains('clicked');

            if (isClicked == false) {
                div.addEventListener('click', function () {
                    const numSquare = parseInt(this.innerText);
                    div.classList.add('clicked');

                    if (bombs.includes(numSquare)) {
                        div.classList.add('bombs');
                        alert('Il tuo punteggio è di' + ' ' + points);
                        const divs = document.querySelectorAll('.square')

                        for (let index = 0; index < divs.length; index++) {
                            const numDom = parseInt(divs[index].innerText);
                            console.log(numDom);

                            if (bombs.includes(numDom)) {
                                divs[index].classList.add('bombs');
                            }
                        }

                    } else {
                        points++
                        console.log(points);
                        console.log(isClicked);

                        if (points == 33) {
                            alert('HAI VINTO!')
                        }
                    }
                });
            }

        }
        break;
    }
    
});

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);;
}

// I numeri nella lista delle bombe non possono essere duplicati.

function createBombs(lunghezza, min, max){
    const randomNumbers = [];
    while (randomNumbers.length < lunghezza){
        const numbers = getRandomIntInclusive(min, max);
        if (randomNumbers.includes(numbers) != true) {
            randomNumbers.push(numbers);
        }
    }
    return randomNumbers;
}



