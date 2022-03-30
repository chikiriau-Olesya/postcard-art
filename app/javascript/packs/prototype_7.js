import { getRandomArbitrary, flipCard, sample } from '../containers/basic.js'
import html2canvas from 'html2canvas'

const prototypeClass = 'prototype_7'
const wolfTypes = ['wolf-black', 'wolf-lavanda', 'wolf-yellow', 'wolf-green']
const phrases = [
  'Не страдать, ведь можно не страдать',
  'Быть сильным, чтобы быть сильным',
  'Быть по жизни волком, чем не волком',
  'Понять, что не тот велик, кто не велик, а кто велик',
  'Лучше попробовать, чем не попробовать'
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
    const container = document.getElementsByClassName('prototype_7')[0]

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
      'Знаем, что жизнь нелегка, тяжела. Однако желаю тебе стать тем грозным волком, который грозный. Чтобы все проблемы от тебя разбежались'
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
  const row = document.createElement('div')
  row.classList.add('wolf_row')
  front.appendChild(row)

  for (let i = 0; i < 15; i++) {
    let wolf = document.createElement('div')
    wolf.classList.add('wolf')
    wolf.classList.add(sample(wolfTypes))
    row.appendChild(wolf)
  }

  const phrase = sample(phrases)
  const textElement = document.createElement('div')
  textElement.innerText = phrase
  textElement.classList.add('phrase')
  front.appendChild(textElement)

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
