function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function flipCard() {
  const front = document.createElement('div')
  front.classList.add('flip-card-front')
  front.setAttribute('id', 'flip-card-back')
  frame.appendChild(front)

  const back = document.createElement('div')
  back.classList.add('flip-card-back')
  back.setAttribute('id', 'flip-card-front')
  frame.appendChild(back)

  const text = document.createElement('div')
  back.appendChild(text)

  back.style.visibility = 'visible'
  front.style.visibility = 'visible'

  back.onclick = function () {
    frame.classList.toggle('do-flip')
  }

  front.onclick = function () {
    frame.classList.toggle('do-flip')
  }
}

export { getRandomArbitrary, flipCard, sample }
