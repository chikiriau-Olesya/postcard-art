import { getRandomArbitrary, flipCard, sample } from '../containers/basic.js'

const wolfTypes = ['wolf-black', 'wolf-lavanda', 'wolf-yellow', 'wolf-green']
const phrases = [
  'Не страдать, ведь можно не страдать',
  'Быть сильным, чтобы быть сильным',
  'Падение - не провал. Провал – это провал. Падение – это где упал'
]

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_7')[0]

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
})
