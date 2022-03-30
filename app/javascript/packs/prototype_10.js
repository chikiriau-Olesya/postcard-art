import { getRandomArbitrary, flipCard, sample } from '../containers/basic.js'
import html2canvas from 'html2canvas'

const prototypeClass = 'prototype_10'
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
  'world-mu'
]
const superTypes = ['world-culuchka', 'world-line']

const phraseList = ['phrase_1', 'phrase_1']
const phraseListDeg = [-5, 0, 5]

function generateHash() {
  const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let hash = ''

  for (var i = 0; i < 6; i++) {
    hash += sample(symbols)
  }
  return hash
}

function generateImage() {
  return new Promise((resolve, reject) => {
    const container = document.getElementsByClassName('prototype_10')[0]

    html2canvas(container).then((canvas) => {
      canvas.style.position = 'absolute'
      canvas.style.left = '-99999px'
      document.body.appendChild(canvas)

      resolve()
    })
  })
}

function downloadImage() {
  const canvas = document.getElementsByTagName('canvas')[0]
  const imageData = canvas.toDataURL('image/png')

  const link = document.createElement('a')
  link.download = `Postcard–${generateHash()}.png`
  link.href = imageData
  link.click()
  link.remove()

  canvas.remove()
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName(prototypeClass)[0]

  //Create Card
  const frame = document.createElement('div')
  frame.classList.add('frame')
  frame.setAttribute('id', 'flip-card')
  container.appendChild(frame)

  const back = document.createElement('div')
  back.classList.add('flip-card-back')
  back.setAttribute('id', 'flip-card-front')
  frame.appendChild(back)

  const front = document.createElement('div')
  front.classList.add('flip-card-front')
  front.setAttribute('id', 'flip-card-back')
  frame.appendChild(front)

  back.style.visibility = 'visible'
  front.style.visibility = 'visible'

  //Create texts
  function createText() {
    const textTitle = document.createElement('h2')
    textTitle.classList.add('flip-card-back_title')
    textTitle.innerHTML = 'Ай виш ю'
    back.appendChild(textTitle)

    const text = document.createElement('p')
    text.classList.add('flip-card-back_paragraph')
    text.innerHTML =
      'Мда, тоже не пойму как жить эту странную жизнь... Хочу пожелать гармонии с собой и миром, а главное – новой нервной системы для всего этого'
    text.contentEditable = true
    back.appendChild(text)

    const topNote = document.createElement('div')
    topNote.classList.add('topNote')
    front.appendChild(topNote)
    const topNoteText = document.createElement('p')
    topNoteText.innerHTML = 'Ай виш ю'
    topNote.appendChild(topNoteText)

    const bottomNote = document.createElement('div')
    bottomNote.classList.add('bottomNote')
    front.appendChild(bottomNote)
    const bottomNoteText = document.createElement('p')
    bottomNoteText.innerHTML = 'от души душевно в душу'
    bottomNote.appendChild(bottomNoteText)
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
    const times = getRandomArbitrary(0, 3)
    for (let i = 0; i < times; i++) {
      let item = document.createElement('div')
      item.classList.add('item')
      item.classList.add(sample(itemTypes))

      const top = getRandomArbitrary(-60, 700)
      const left = getRandomArbitrary(-100, 220)
      const size = getRandomArbitrary(150, 250)

      item.style.marginTop = [top, 'px'].join('')
      item.style.marginLeft = [left, 'px'].join('')
      item.style.width = [size, 'px'].join('')
      item.style.height = [size, 'px'].join('')
      item.style.transform = `rotate(${getRandomArbitrary(0, 120)}deg)`

      front.appendChild(item)
    }

    const phrase = document.createElement('div')
    phrase.classList.add('phrase')
    phrase.classList.add(sample(phraseList))
    phrase.style.zIndex = getRandomArbitrary(-1, 2)
    //phrase.style.transform = `rotate(${sample(phraseListDeg)}deg)`
    front.appendChild(phrase)

    let block = document.createElement('div')
    block.classList.add('block_item')
    front.appendChild(block)
    const count = getRandomArbitrary(1, 2)
    for (let i = 0; i < count; i++) {
      let item = document.createElement('div')
      item.classList.add('item')
      item.classList.add(sample(superTypes))

      const top = getRandomArbitrary(-100, 800)
      const left = getRandomArbitrary(-100, 320)
      const size = getRandomArbitrary(280, 400)

      item.style.top = [top, 'px'].join('')
      item.style.left = [left, 'px'].join('')
      item.style.width = [size, 'px'].join('')
      item.style.height = [size, 'px'].join('')
      item.style.transform = `rotate(${getRandomArbitrary(0, 10)}deg)`
      block.appendChild(item)
    }
  }
  placeItem()

  ////Settings: reset & download
  const inner = document.getElementsByClassName('settings')[0]
  const btnReset = document.createElement('div')
  btnReset.classList.add('downloadButton')
  btnReset.innerText = 'Сгенерировать открытку'
  inner.appendChild(btnReset)
  btnReset.addEventListener('click', () => {
    window.location.reload(false)
  })
  const button = document.createElement('div')
  button.classList.add('downloadButton')
  button.innerText = 'Скачать'
  inner.appendChild(button)
  button.addEventListener('click', () => {
    generateImage().then(downloadImage)
  })
})
