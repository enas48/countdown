var countDownDate = new Date('dec 1, 2023 10:00:00').getTime()
let flipcard = document.querySelectorAll('.card-face-front')

function setTime (startnumber, el) {
  let element = document.querySelector(el)
  let digit = element.firstElementChild
  digit.dataset.digitBefore = startnumber
  digit.dataset.digitAfter = startnumber - 1
  let frontCard = digit.querySelector('.card-face-front')
  let backCard = digit.querySelector('.card-face-back')
  frontCard.textContent = startnumber
  backCard.textContent = startnumber - 1
  if (startnumber === 0) {
    digit.dataset.digitAfter = 59
    backCard.textContent = 59
  }
}

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  if (seconds !== 0) {
    $('.flip-s .card').addClass('fliped')
    setTime(seconds, '.flip-s')
  }
  if (seconds === 0) {
    $('.flip-m .card').addClass('fliped')
    setTimeout(function () {
      $('.flip-m .card').removeClass('fliped')
    }, 1000)
  }
  if (minutes === 0 && seconds === 0) {
    $('.flip-h .card').addClass('fliped')
    setTimeout(function () {
      $('.flip-h .card').removeClass('fliped')
    }, 1000)
  }
  if (hours === 0 && minutes === 0 && seconds === 0) {
    $('.flip-d .card').addClass('fliped')
    setTimeout(function () {
      $('.flip-d .card').removeClass('fliped')
    }, 1000)
  }
  setTime(seconds, '.flip-s')
  setTime(days, '.flip-d')
  setTime(hours, '.flip-h')
  setTime(minutes, '.flip-m')

  if (distance < 0) {
    // If the count down is finished
    clearInterval(x)
    setTime(0, '.flip-s')
    setTime(0, '.flip-s')
    setTime(0, '.flip-s')
    setTime(0, '.flip-s')
    $('.card').removeClass('fliped')
  }
}, 1000)
