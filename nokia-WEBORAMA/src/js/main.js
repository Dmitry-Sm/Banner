import '../style/style.scss'
import anime from 'animejs'

const ph = [
  document.querySelector('.phones__item--1'),
  document.querySelector('.phones__item--2'),
  document.querySelector('.phones__item--3'),
  document.querySelector('.phones__item--4'),
  document.querySelector('.phones__item--5'),
  document.querySelector('.phones__item--6'),
  document.querySelector('.phones__item--7'),
  document.querySelector('.phones__item--8'),
  document.querySelector('.phones__item--9')
]

const btns = [
  document.querySelector('.btns__item--1'),
  document.querySelector('.btns__item--2'),
  document.querySelector('.btns__item--3'),
  document.querySelector('.btns__item--4')
]

const lbl = [
  document.querySelector('.labels__item--1'),
  document.querySelector('.labels__item--2'),
  document.querySelector('.labels__item--3'),
  document.querySelector('.labels__item--4')
]

const label_0 = document.querySelector('.label--0')
const btn_cont = document.querySelector('.btns')
const google = document.querySelector('.google')
const end_screen = document.querySelector('.end')
const end_text = document.querySelector('.end-text')
const zoom = document.querySelector('.zoom')



window.onload = () => {
  document.addEventListener('click', (evt) => {
    // console.log('Click default')
    screenad.click('default')
  })
  
  const tl = init_timeline()
}



const init_timeline = () => {
  const tl = anime.timeline({
    easing: 'easeInOutCubic',
    autoplay: true,
    loop: false
  })

  let scx = null
  let scy = null

  tl.add({
    targets: end_screen,
    opacity: [1, 0],
  })
  .add({
    targets: label_0,
    // opacity: [0, 1],
    transformOrigin: ['0 0', '0 0'],
    scaleY: [0, 1]
  })
  .add({
    targets: [ph[0], ph[1], ph[2]],
    translateY: [600, 0],
    opacity: {
      value: [0, 1],
      duration: 400
    },
    delay: anime.stagger(100)
  }, '-= 1000')
  .add({
    targets: btn_cont,
    translateY: [200, 0],
    opacity: {
      value: [0, 1],
      duration: 200
    },
  }, '-= 800')
  .add({
    targets: lbl[0],
    opacity: [0, 1],
    // complete: () => {
    //   label_0.style.transformOrigin = '100% 100%'
    //   let width = window.innerWidth
    //   let height = window.innerHeight
    //   const a = width / height
    //   if (a < 1) {
    //     scx = 100
    //     scy = 100
    //   }
    //   else {
    //     scx = 100
    //     scy = 100
    //   }
    // }
  }, '-= 800')
  // .add({
  //   targets: label_0,
  //   scaleX: [1, scx],
  //   scaleY: [1, scy],
  // }, '+= 10')

  .add({
    targets: [ph[0], ph[1], ph[2]],
    opacity: {
      value: [1, 0],
      delay: 600,
      duration: 400
    },
    translateY: [0, 600],
    delay: anime.stagger(100)
  }, '+= 1200')
  .add({
    targets: btns[0],
    translateX: [0, '-70%'],
    scaleX: [1, 0.5],
  }, '-= 900')
  .add({
    targets: btns[1],
    translateX: ['70%', 0],
    scaleX: [0.5, 1]
  }, '-= 1000')

  .add({
    targets: lbl[1],
    translateX: ['80%', 0],
    scaleX: [0.6, 1]
  }, '-= 900')
  .add({
    targets: lbl[0],
    translateX: [0, '-80%'],
    scaleX: [1, 0.6],
  }, '-= 900')

  .add({
    targets: google,
    opacity: [0, 1],
  }, '-= 900')

  .add({
    targets: [ph[4], ph[3]],
    opacity: {
      value: [0, 1],
      duration: 400
    },
    translateY: [600, 0],
    delay: anime.stagger(100)
  }, '-= 900')

  .add({
    targets: [ph[4], ph[3]],
    opacity: {
      value: [1, 0],
      delay: 600,
      duration: 400
    },
    translateY: [0, 600],
    delay: anime.stagger(100)
  }, '+= 1200')
  .add({
    targets: btns[1],
    translateX: [0, '-70%'],
    scaleX: [1, 0.5],
  }, '-= 900')
  .add({
    targets: btns[2],
    translateX: ['70%', 0],
    scaleX: [0.5, 1]
  }, '-= 1000')

  .add({
    targets: lbl[2],
    translateX: ['80%', 0],
    scaleX: [0.6, 1]
  }, '-= 900')
  .add({
    targets: lbl[1],
    translateX: [0, '-80%'],
    scaleX: [1, 0.6],
  }, '-= 900')

  .add({
    targets: [ph[5], ph[6]],
    opacity: {
      value: [0, 1],
      duration: 400
    },
    translateY: [600, 0],
    delay: anime.stagger(100)
  }, '-= 900')

  .add({
    targets: zoom,
    opacity: [0, 1],
    scaleX: [0.9, 1],
  })
  .add({
    targets: zoom,
    easing: 'linear',
    translateY: [0, 50],
    backgroundPositionY: '60%'

  })
  .add({
    targets: zoom,
    opacity: [1, 0],
    scaleX: [1, 0.9]
  })
  .add({
    targets: [ph[5], ph[6]],
    opacity: [1, 0],
    delay: 600,
    translateY: [0, 600],
    delay: anime.stagger(100)
  }, '+= 800')

  .add({
    targets: btns[2],
    translateX: [0, '-70%'],
    scaleX: [1, 0.5],
  }, '-= 900')
  .add({
    targets: btns[3],
    translateX: ['70%', 0],
    scaleX: [0.5, 1]
  }, '-= 1000')

  .add({
    targets: lbl[3],
    translateX: ['80%', 0],
    scaleX: [0.6, 1]
  }, '-= 900')
  .add({
    targets: lbl[2],
    translateX: [0, '-80%'],
    scaleX: [1, 0.6],
  }, '-= 900')

  .add({
    targets: [ph[7], ph[8]],
    opacity: {
      value: [0, 1],
      duration: 400
    },
    translateY: [600, 0],
    delay: anime.stagger(100)
  }, '-= 900')
  .add({
    targets: [end_screen, end_text],
    opacity: [0, 1],
  }, '+= 1200')


  .add({
    duration: 1000
  })

  return tl
}