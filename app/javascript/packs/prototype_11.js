import { getRandomArbitrary, flipCard, sample } from '../containers/basic.js'
import html2canvas from 'html2canvas'
const prototypeClass = 'prototype_11'

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
    const container = document.getElementsByClassName('prototype_11')[0]

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
      'Желаю научиться этому великому искусству. Ты у себя один, а проблемы нерешаемых в этой жизни нет'
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

  const textBlock = document.createElement('div')
  textBlock.classList.add('card-textBlock')
  front.appendChild(textBlock)
  const title = document.createElement('h2')
  title.innerHTML = 'быть на чиле.'
  textBlock.appendChild(title)
  const paragraph = document.createElement('p')
  paragraph.innerHTML = '*настолько, чтобы не переносить висячие предоги'
  textBlock.appendChild(paragraph)

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
