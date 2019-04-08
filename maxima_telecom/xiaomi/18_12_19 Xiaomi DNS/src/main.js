import anime from 'animejs'
import css from './css/style.scss'

let w = window.innerWidth
let h = window.innerHeight
let landscape = true
if (w == 0) {
  w = window.screen.width
}
if (h == 0) {
  h = window.screen.height
}
if (w < h) {
  landscape = false
}

const screen_h = 1000




let timeline = anime.timeline({
  // loop: true,
  autoplay: true
})

timeline
// .add({
//   targets: '.celebrate',
//   opacity: { value: 1, duration: 1000},
//   easing: 'easeInQuad'
// })
// .add({
//   targets: '.celeb',
//   opacity: { value: [0, 1], duration: 800},
//   delay: function(target, index) {
//     return index * 150;
//   },
//   easing: 'easeOutQuad',
// })
// .add({
//   offset: '-=100',
//   targets: '.celeb',
//   opacity: { value: [0.01, 1], duration: 25},
//   delay: function(target, index) {
//     return index * 150;
//   },
//   easing: 'easeInQuad',
// })
.add({
  targets: '.celebrate',
  offset: '+=800',
  delay: 600,
  translateX: { value: ['-50%', '0'], duration: 1000},
  left: { value: ['50%', '4%'], duration: 1000},
  height: { value: ['75%', '35%'], duration: 1000},
  width: { value: ['60%', '14%'], duration: 1000},
  easing: 'easeInOutQuad',
})
.add({
  targets: '.phone',
  offset: '-=800',
  translateY: { value: [screen_h, 0], duration: 1000},
  easing: 'easeInOutQuad',
})
.add({
  offset: '-=1000',
  targets: ['.red-cube-center', '.red-cube-left', '.red-cube-right'],
  delay: function(target, index) {
    return index * -150;
  },
  translateY: { value: [screen_h, 0], duration: 1000},
  easing: 'easeInOutQuad',
})
.add({
  offset: '-=400',
  targets: '.redmi-label',
  opacity: { value: [0, 1], duration: 200},
  easing: 'easeInOutQuad',
})
.add({
  delay: 400
})

.add({
  targets: '.phone',
  // delay: function(target, index) {
  //   return index * 50;
  // },
  translateX: { value: [0, '-50%'], duration: 1000},
  // left: { value: ['25%', '0'], duration: 1000},
  easing: 'easeInOutQuad',
})
.add({
  offset: '-=1000',
  targets: ['.red-cube-center'],
  translateX: { value: [0, '-30%'], duration: 1000},
  // left: { value: ['25%', '10%'], duration: 1000},
  easing: 'easeInOutQuad',
})
.add({
  offset: '-=600',
  targets: ['.phone-1', '.phone-2'],
  opacity: { value: 0, duration: 400},
  easing: 'easeOutQuad',
})
.add({
  offset: '-=900',
  targets: ['.red-cube-left', '.red-cube-right'],
  opacity: { value: 0, duration: 400},
  easing: 'easeOutQuad',
})
.add({
  offset: '-=800',
  targets: '.price-block',
  delay: function(target, index) {
    return index * 100;
  },
  translateX: { value: ['200%', 0], duration: 1000},
  easing: 'easeInOutQuad',
})
.add({
  offset: '-=800',
  targets: '.button',
  translateY: { value: [800, 0], duration: 600},
  easing: 'easeInOutQuad',
})


.add({
  delay: 2000
})
.add({
  targets: ['.celebrate', '.redmi-label', '.phone', '.button', '.price-block',
            '.red-cube-left', '.red-cube-center', '.red-cube-right'],
  opacity: { value: 0, duration: 400},
  easing: 'easeInOutQuad',
})
.add({
  targets: '.end-screen',
  opacity: { value: [0, 1], duration: 200},
  easing: 'easeInOutQuad',
})
.add({
  delay: 1000
})