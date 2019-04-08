import anime from 'animejs'
import css from './css/style.scss'


const show = {value: 1, duration: 1200}
const hide = {value: 0, duration: 1200}


anime({
  targets: '.background-1',
  easing: 'linear',
  scale: {value: [1.2, 1], duration: 4000, delay: 500},
  opacity: { value: 0, duration: 300, delay: 4200},
  // delay: 4000
})
anime({
  targets: '.background-2',
  easing: 'linear',
  opacity: { value: 1, duration: 1000, delay: 1000},
})

let timeline = anime.timeline()

timeline.add({
  targets: '.text-1',
  translateX: ['-50%', '-50%'],
  scale: { value: [2, 1], duration: 800 },
  opacity: { value: 1, duration: 1800},
  easing: 'easeOutElastic',
  delay: 500
}).add({
  targets: '.text-1',
  // translateX: { value: '-150%', duration: 400 },
  opacity: { value: 0, duration: 200},
  easing: 'easeInCubic',
}).add({
  targets: '.text-2',
  translateX: ['-50%', '-50%'],
  scale: { value: [2, 1], duration: 800 },
  opacity: { value: 1, duration: 1800},
  easing: 'easeOutElastic',
}).add({
  targets: '.text-2',
  // translateX: { value: '-150%', duration: 400 },
  opacity: { value: 0, duration: 200},
  easing: 'easeInCubic',
}).add({
  targets: '.text-final',
  translateX: ['-50%', '-50%'],
  scale: { value: [2, 1], duration: 800 },
  opacity: { value: 1, duration: 200},
  easing: 'easeOutElastic',
}).add({
  targets: '.button',
  translateX: ['-50%', '-50%'],
  scale: { value: [1.5, 1], duration: 800 },
  opacity: { value: 1, duration: 200},
  easing: 'easeOutElastic',
  offset: '-=600' 
}).add({
  targets: '.kanister-1',
  translateX: { value: ['50%', '-50%'], duration: 1200 },
  opacity: { value: 1, duration: 200},
  easing: 'easeOutQuint',
  offset: '-=1000'
}).add({
  targets: '.kanister-2',
  translateX: { value: ['50%', '-50%'], duration: 1200 },
  opacity: { value: 1, duration: 200},
  easing: 'easeOutQuint',
  offset: '-=1100' 
})

