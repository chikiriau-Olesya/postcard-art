import { getRandomArbitrary, flipCard, sample } from '../containers/basic.js'
const prototypeClass = 'prototype_9'
const bcTypes = [
  'world-field',
  'world-garden',
  'world-heart',
  'world-paddle',
  'world-sky'
]
const itemTypes = [
  'world-bread',
  'world-broccoli',
  'world-cake',
  'world-cucumber',
  'world-lapsha',
  'world-mu',
  'world-culuchka',
  'world-line',
  'world-star'
]
//const itemTypes = ['world-culuchka', 'world-line', 'world-star']
// const phrases = [
//   'Не страдать, ведь можно не страдать',
//   'Быть сильным, чтобы быть сильным',
//   'Падение - не провал. Провал – это провал. Падение – это где упал'
// ]

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
  function generateBc() {
    front.classList.add(sample(bcTypes))
  }
  generateBc()

  function placeItem() {
    const times = getRandomArbitrary(1, 4)
    for (let i = 0; i < times; i++) {
      let item = document.createElement('div')
      item.classList.add('item')
      item.classList.add(sample(itemTypes))

      const top = getRandomArbitrary(-80, 700)
      const left = getRandomArbitrary(-100, 220)
      const size = getRandomArbitrary(100, 500)

      item.style.position = 'absolute'
      item.style.top = [top, 'px'].join('')
      item.style.left = [left, 'px'].join('')
      item.style.width = [size, 'px'].join('')
      item.style.height = [size, 'px'].join('')
      item.style.transform = `rotate(${getRandomArbitrary(0, 350)}deg)`

      front.appendChild(item)
    }
  }
  placeItem()

  // const phrase = sample(phrases)
  // const textElement = document.createElement('div')
  // textElement.innerText = phrase
  // textElement.classList.add('phrase')
  // front.appendChild(textElement)
})
