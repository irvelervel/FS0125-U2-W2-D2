// vogliamo cliccare i 4 bottoni numerati e far scomparire le corrispettive
// prime 4 cards con gli orsi

// andiamo a selezionare i 4 bottoni tramite dei riferimenti al DOM
const fourButtons = document.querySelectorAll('#buttons-container button')
console.log('FOURBUTTONS', fourButtons)

const allTheBears = document.querySelectorAll('#bears-row .card')
// 10 card?
console.log('ALLTHEBEARS', allTheBears)
// se voleste i primi 4...
// const firstFour = [allTheBears[0], allTheBears[1], allTheBears[2],allTheBears[3]]

// fourButtons[0].addEventListener('click', function () {
//   // codice eseguito al click
//   //   applichiamo all'orso selezionato una classe "d-none"
//   allTheBears[0].classList.toggle('d-none')
// })

// fourButtons[1].addEventListener('click', function () {
//   // codice eseguito al click
//   //   applichiamo all'orso selezionato una classe "d-none"
//   allTheBears[1].classList.toggle('d-none')
// })

// SOLUZIONE FOR
// for (let i = 0; i < fourButtons.length; i++) {
//   // i vale 0 al primo ciclo
//   // i vale 1 al secondo ciclo
//   // i vale 2 al terzo ciclo
//   // i vale 3 al quarto ciclo
//   fourButtons[i].addEventListener('click', function () {
//     // codice eseguito al click
//     //   applichiamo all'orso selezionato una classe "d-none"
//     allTheBears[i].classList.toggle('invisible')
//   })
// }

// SOLUZIONE FOREACH
// fourButtons.forEach((btn, i) => {
//   btn.addEventListener('click', function () {
//     // codice eseguito al click
//     //   applichiamo all'orso selezionato una classe "d-none"
//     allTheBears[i].classList.toggle('invisible')
//   })
// })

// ETICHETTA "NON DISPONIBILE" SULL'ORSO
fourButtons.forEach((btn, i) => {
  btn.addEventListener('click', function () {
    // codice eseguito al click
    //   creiamo l'etichetta
    const label = document.createElement('p')
    label.innerText = 'NON DISPONIBILE'
    label.classList.add('bg-danger', 'text-light') // BIANCO SU SFONDO ROSSO
    // APPLICO POSITION ABSOLUTE
    label.classList.add('position-absolute')

    // APPLICO STILI LABEL
    label.style.top = '43%'
    label.style.left = '20%'
    label.style.transform = 'rotate(-45deg) scale(1.8)'
    label.style.opacity = '0.85'

    // top: 43%;
    // transform: rotate(-45deg) scale(1.8);
    // left: 20%;
    // opacity: 0.85;

    // ora ci occupiamo di rendere relative l'orso corrispondente e ci dobbiamo
    // appendere l'etichetta dentro
    allTheBears[i].classList.add('position-relative')
    allTheBears[i].appendChild(label)
  })
})
