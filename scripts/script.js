const input = document.getElementById('timer-input')
const button = document.getElementById('start')
const timer = document.getElementById('timer')

let sec
let min
let interval

function counter() {
  if (sec < 0) {
    sec = 59
    min -= 1
  }
  if (min < 0) {
    alert('Time is up')
    stop()
    return
  }
  const displSec = sec < 10 ? `0${sec}` : sec
  const displMin = min < 10 ? `0${min}` : min

  timer.innerText = `${displMin}min ${displSec}s`
  sec -= 1
}

function start() {
  button.innerText = "STOP"
  button.classList.add('active')

  min = Math.round(input.value.slice(0, 2)) || 0
  sec = Math.round(input.value.slice(3)) || 0

  counter()
  interval = setInterval(counter, 1000);
}

function stop() {
  button.innerText = "START"
  button.classList.remove('active')
  clearInterval(interval)
  timer.innerText = `00min 00s`
}

function click() {
  if (button.classList.value.includes('active')) {
    return stop()
  } else {
    if (input.value === '00:00') return
    return start()
  }
}

button.addEventListener('click', click)
