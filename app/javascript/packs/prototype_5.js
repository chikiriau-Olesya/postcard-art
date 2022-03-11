const particlesQuantity = [10, 12, 14, 16, 18, 20]

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_5')[0]
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

  const btnCreatCirc = document.createElement('div')
  btnCreatCirc.classList.add('button')
  container.appendChild(btnCreatCirc)

  ///////Randomize
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }

  btnCreatCirc.onclick = function () {
    let numberOfCircles = 10
    for (let i = 0; i < numberOfCircles; i++) {
      let divCircle = document.createElement('div')
      divCircle.classList.toggle('div__circle')
      // divCircle.style.position = 'fixed'
      divCircle.style.transform = `rotate(${getRandomArbitrary(1, 360)}deg)`
      divCircle.style.transform = `translateX(${getRandomArbitrary(
        0,
        800
      )}px) translateY(${getRandomArbitrary(0, 800)}px)`
      //divCircle.style.top = `${getRandomArbitrary(10, 350)}`
      //divCircle.style.bottom = `${getRandomArbitrary(10, 350)}`
      divCircle.classList.add(divCircle[0])

      divCircle.addEventListener('mouseout', function () {
        divCircle.style.display = 'none'
      })

      front.appendChild(divCircle)
    }
  }
})
