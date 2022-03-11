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
  // prettier-ignore
  const circleTypes = [
    ['div__circle',        30,  70,   1, 1],
    ['div__circle',        500, 100, 1, 1],
  ]

  btnCreatCirc.onclick = function () {
    let numberOfCircles = 10
    for (let i = 0; i < numberOfCircles; i++) {
      const divCircle = document.createElement('div')
      //const divCircle = sample(circleTypes)
      divCircle.classList.add('div__circle')
      //divCircle.classList.add('circle')

      const top = getRandomArbitrary(-100, 1720)
      const left = getRandomArbitrary(-100, 980)
      const size = getRandomArbitrary(circleType[1], circleType[2])

      divCircle.style.top = [top, 'px'].join('')
      divCircle.style.left = [left, 'px'].join('')
      divCircle.style.width = [size, 'px'].join('')
      divCircle.style.height = [size, 'px'].join('')

      divCircle.style.transform = `rotate(${getRandomArbitrary(10, 350)}deg)`
      //divCircle.classList.add(circleType[0])
      divCircle.classList.toggle('div__circle')

      divCircle.addEventListener('mouseout', function () {
        divCircle.style.display = 'none'
      })

      frame.appendChild(divCircle)
    }
  }
})
