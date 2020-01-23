import './modules/polyfill'
import anime from 'animejs'

window.onload = () => {

  const background = document.querySelector('.background')
  const gray_screen = document.querySelector('.gray-screen')
  const panel = document.querySelector('.panel')
  const palto = document.querySelector('.palto')
  const isoo = document.querySelector('.isoo')
  const price = document.querySelector('.price')
  const lamoda = document.querySelector('.lamoda')
  const jacket = document.querySelector('.jacket')
  const techno = document.querySelector('.techno')
  const aws = document.querySelector('.aws')
  const membr = document.querySelector('.membr')
  const c8050 = document.querySelector('.c8050')
  const logo = document.querySelector('.logo')



  const tl = anime.timeline({
    loop: true,
    easing: 'easeOutCubic',
    // autoplay: false
  })

  const duration = 600

  tl
  .add({
    targets: panel,
    duration: duration/2,
    easing: 'easeOutCubic',
    translateY: [-115, 0],
  })
  .add({
    targets: jacket,
    duration: duration,
    translateX: [100, 0],
    opacity: [0, 1]
  }, '-=' + duration * 0.8)
  .add({
    targets: palto,
    duration: duration,
    translateX: [100, 0],
    opacity: [0, 1]
  }, '-=' + duration * 0.8)
  .add({
    targets: isoo,
    duration: duration,
    translateX: [100, 0],
    opacity: [0, 1]
  }, '-=' + duration * 0.8)
  .add({
    targets: price,
    duration: duration,
    translateX: [100, 0],
    opacity: [0, 1]
  }, '-=' + duration * 0.8)
  .add({
    duration: duration * 3,
  })

  .add({
    targets: palto,
    duration: duration,
    easing: 'easeInCubic',
    translateX: [0, -100],
    opacity: [1, 0]
  }, '-=' + duration * 0.8)
  .add({
    targets: isoo,
    duration: duration,
    easing: 'easeInCubic',
    translateX: [0, -100],
    opacity: [1, 0]
  }, '-=' + duration * 0.8)
  .add({
    targets: price,
    duration: duration,
    easing: 'easeInCubic',
    translateX: [0, -100],
    opacity: [1, 0]
  }, '-=' + duration * 0.8)

  .add({
    targets: techno,
    duration: duration,
    translateX: [100, 0],
    opacity: [0, 1]
  }, '-=' + duration * 0.)
  .add({
    targets: aws,
    duration: duration,
    translateX: [100, 0],
    opacity: [0, 1]
  }, '-=' + duration * 0.8)
  .add({
    duration: duration * 3,
  })
  .add({
    targets: techno,
    duration: duration,
    easing: 'easeInCubic',
    translateX: [0, -100],
    opacity: [1, 0]
  }, '-=' + duration * 0.8)
  .add({
    targets: aws,
    duration: duration,
    easing: 'easeInCubic',
    translateX: [0, -100],
    opacity: [1, 0]
  }, '-=' + duration * 0.8)


  .add({
    targets: membr,
    duration: duration,
    translateX: [100, 0],
    opacity: [0, 1]
  }, '-=' + duration * 0.)
  .add({
    targets: c8050,
    duration: duration,
    translateX: [100, 0],
    opacity: [0, 1]
  }, '-=' + duration * 0.8)
  .add({
    duration: duration * 3,
  })
  .add({
    targets: jacket,
    duration: duration,
    easing: 'easeInCubic',
    translateX: [0, -100],
    opacity: [1, 0]
  }, '-=' + duration * 0.8)
  .add({
    targets: membr,
    duration: duration,
    easing: 'easeInCubic',
    translateX: [0, -100],
    opacity: [1, 0]
  }, '-=' + duration * 0.8)
  .add({
    targets: c8050,
    duration: duration,
    easing: 'easeInCubic',
    translateX: [0, -100],
    opacity: [1, 0]
  }, '-=' + duration * 0.8)
  .add({
    targets: panel,
    duration: duration,
    easing: 'easeInCubic',
    translateY: [0, 105],
  }, '-=' + duration * 0.8)
  .add({
    targets: gray_screen,
    duration: duration,
    easing: 'easeInCubic',
    opacity: [1, 0]
  }, '-=' + duration * 0.8)
  .add({
    targets: lamoda,
    duration: duration,
    easing: 'easeInOutCubic',
    scale: [1, 1.5]
  }, '-=' + duration * 0.8)
  .add({
    targets: background,
    scale: 1.05,
    easing: 'linear',
    duration: duration * 5,
  }, '-=' + duration * 0.8)
  .add({
    targets: panel,
    duration: duration,
    easing: 'easeInCubic',
    translateY: -115,
  })
}
