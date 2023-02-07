const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector('#inputNumber')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// Callbacks
function handleTryClick(e) {
  e.preventDefault()

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector(
      'h2'
    ).innerText = `Você acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''

  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  inputNumber.focus()
  // randomNumber = Math.round(Math.random() * 10)
  xAttempts = 0
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
