import { getRandomArbitrary, flipCard, sample } from '../containers/basic.js'

const prototypeClass = 'prototype_8'
const speed = 4
const bcColors = ['wolf-black', 'wolf-lavanda', 'wolf-yellow', 'wolf-green']
const phrases = [
  'слово',
  'Быть',
  'Падение',
  'странный',
  'желание',
  'карточка',
  'еще карточка',
  'много',
  'мало'
]

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName(prototypeClass)[0]

  //Create Card
  const frame = document.createElement('div')
  frame.classList.add('frame')
  frame.setAttribute('id', 'flip-card')
  container.appendChild(frame)

  const front = document.createElement('div')
  front.classList.add('flip-card-front')
  front.setAttribute('id', 'flip-card-back')
  frame.appendChild(front)

  const back = document.createElement('div')
  back.classList.add('flip-card-back')
  back.setAttribute('id', 'flip-card-front')
  frame.appendChild(back)

  back.style.visibility = 'visible'
  front.style.visibility = 'visible'

  //Create texts back
  function createText() {
    const textTitle = document.createElement('h2')
    textTitle.classList.add('flip-card-back_title')
    textTitle.innerHTML = 'Ай виш ю'
    back.appendChild(textTitle)

    const text = document.createElement('p')
    text.classList.add('flip-card-back_paragraph')
    text.innerHTML = 'Здесь вы можете оставить свое послание'
    text.contentEditable = true
    back.appendChild(text)

    const topNote = document.createElement('div')
    topNote.classList.add('topNote')
    topNote.innerHTML = 'Ай виш ю'
    front.appendChild(topNote)

    const bottomNote = document.createElement('div')
    bottomNote.classList.add('bottomNote')
    bottomNote.innerHTML = ' из души душевно в душу → '
    front.appendChild(bottomNote)
  }
  createText()

  /// back btn for flip
  const backBtn = document.createElement('div')
  backBtn.classList.add('flip-card-back_btn')
  backBtn.innerHTML = 'перевернуть'
  back.appendChild(backBtn)

  // Flip buttons functions
  backBtn.onclick = function () {
    frame.classList.toggle('do-flip')
  }
  front.onclick = function () {
    frame.classList.toggle('do-flip')
  }

  //// Generative Inside Card
  function placeRect() {
    const phrase = sample(phrases)
    const textElement = document.createElement('div')
    textElement.classList.add('phrase')
    textElement.innerText = phrase

    const top = getRandomArbitrary(-80, 700)
    const left = getRandomArbitrary(-100, 420)

    textElement.style.position = 'absolute'
    textElement.style.top = [top, 'px'].join('')
    textElement.style.left = [left, 'px'].join('')

    front.appendChild(textElement)
  }

  function generateRectagles() {
    for (let i = 0; i < 400; i++) {
      placeRect()
    }
  }

  function cycle() {
    //const times = getRandomArbitrary(1, 3)
    let timeout = getRandomArbitrary(speed * 2, speed * 4)
    setTimeout(() => placeRect(), timeout)

    //timeout += getRandomArbitrary(speed * 14, speed * 40)
    // for (var i = 0; i < times; i++) {
    //   setTimeout(() => placeRect(), timeout)
    //   timeout += getRandomArbitrary(speed * 50, speed * 150)
    // }

    const cycleTimeout = getRandomArbitrary(speed * 30, speed * 100)
    setTimeout(() => cycle(), cycleTimeout)
  }

  setTimeout(() => cycle(), 3)
})
