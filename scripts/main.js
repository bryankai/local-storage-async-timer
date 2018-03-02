console.log('JS Loaded!')
let buttons = document.querySelectorAll('button')
let start = buttons[0]
let stop = buttons[1]
let reset = buttons[2]
let title = document.querySelector('#title span')
let myTimer = null
let nameField = document.querySelector('input')
let welcomeMessage = document.querySelector('#welcome-message')
let parsed = JSON.parse(localStorage.getItem('myData'))
let seconds = parsed ? parsed['seconds'] : 0
let obj = {}
let name = ''
let span=welcomeMessage.firstElementChild.firstElementChild
if(parsed) {
  if (parsed['name']) {
    console.log('hi')
    span.innerHTML = parsed['name']
    welcomeMessage.classList.remove('hide')
  }
}

title.innerHTML = seconds

start.addEventListener('click',startTimer)
stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)
nameField.addEventListener('blur', welcome)

function startTimer () {
  if (myTimer) return false
  myTimer = setInterval(function start() {
    seconds++
    display()
  }, 1000)
}

function stopTimer() {
  clearInterval(myTimer)
  myTimer = null
}

function resetTimer() {
  stopTimer()
  seconds = 0
  display()
}

function welcome () {
  name = nameField.value
  obj['name']=name
  obj['seconds']=seconds
  console.log(obj)
  span.innerHTML = name
  localStorage.setItem('myData', JSON.stringify(obj));
  welcomeMessage.classList.remove('hide')
}

function display() {
  obj['seconds']=seconds
  obj['name']=name
  console.log(obj)
  title.innerHTML = seconds
  const json = JSON.stringify(obj)
  localStorage.setItem('myData', json);
}
