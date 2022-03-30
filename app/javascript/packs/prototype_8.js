import { getRandomArbitrary, flipCard, sample } from '../containers/basic.js'
import html2canvas from 'html2canvas'

const prototypeClass = 'prototype_8'
const speed = 4
const bcColors = ['wolf-black', 'wolf-lavanda', 'wolf-yellow', 'wolf-green']
const phrases = [
  '💕 🌟 🍀',
  '💅 🎾 💗',
  '🤙 🎾 🌟',
  '🏖 🕺 🍀',
  '🗽 💗 ✌',
  '🍀 🌸 🌞',
  'любви',
  'счастья',
  'здоровья',
  'ментального',
  '🗽 💚 👾',
  '⛅ 💎 👐',
  '💃 💶 💕',
  'денег побольше',
  'изобилия',
  'солнца',
  'отпуск',
  'отдых',
  'сон',
  '🦋 🌸 🍃',
  '⚡ 🏝 💙️',
  '🖖 🍾 💶',
  '🎉 ✌ 🌞',
  'истинных друзей',
  'отношений',
  'слушать себя',
  'дать отсюда деру',
  'крутых котлег',
  'любимых проектов',
  'работы в кайф',
  'угарать',
  'иронизировать',
  'быть на чиле',
  'все успеть',
  'успеть в дедлайн'
]

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
    const container = document.getElementsByClassName('prototype_8')[0]
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
  //link.remove()

  //canvas.remove()
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
      'Желаю всего самого-самого на этом свете, ведь ты такой прекрасный человек. Все для тебя: рассветы и даже туманы'
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
    const cycleTimeout = getRandomArbitrary(speed * 30, speed * 100)
    setTimeout(() => cycle(), cycleTimeout)
  }

  setTimeout(() => cycle(), 3)

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
