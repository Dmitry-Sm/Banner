import './modules/polyfill'
import anime from 'animejs'

window.onload = () => {
  const viruses = document.querySelectorAll('.virus')
  const bacteries = document.querySelectorAll('.bactery')
  const viruses_wrapper = document.querySelectorAll('.viruses')
  const bacteries_wrapper = document.querySelectorAll('.bacteries')
  const v_crass = document.querySelectorAll('.virus .crossed')
  const b_crass = document.querySelectorAll('.bactery .crossed')
  const screen_1 = document.querySelectorAll('.screen-1')
  const screen_2 = document.querySelectorAll('.screen-2')
  // const screen_3 = document.querySelectorAll('.screen-3')
  const end_screen = document.querySelectorAll('.end-screen')
  const background = document.querySelectorAll('.background')
  const background_2 = document.querySelectorAll('.background-2')
  const background_left = document.querySelector('.background-left')
  const background_right = document.querySelector('.background-right')

  const pack_0 = document.querySelectorAll('.pack-0')
  const pack_1 = document.querySelectorAll('.pack-1')
  const pack_2 = document.querySelectorAll('.pack-2')
  const wave = document.querySelectorAll('.wave')

  const text_risk = document.querySelectorAll('.text-risk')
  const text_ot = document.querySelectorAll('.text-ot')
  const text_phone = document.querySelectorAll('.text-phone')
  const text_protivopok = document.querySelectorAll('.text-protivopok')
  const text_protivopok_2 = document.querySelectorAll('.text-protivopok-2')

  const duration = 700

  anime({
    targets: [background_left, background_right],
    backgroundPositionY: '300px',
    easing: 'linear',
    duration: 60000,
    loop: true
  })


  const time_line = anime.timeline({
    easing: 'easeOutCubic',
    loop: true
  });

  time_line
  .add({
    // targets: [viruses_wrapper, bacteries_wrapper],
    // opacity: 1,
    duration: 800
  })
  .add({
    targets: [wave, text_ot],
    translateY: [100, 0],
    opacity: [1, 1],
    duration
  }, '-=' + duration)
  .add({
    targets: [v_crass, b_crass],
    opacity: [0, 1],
    rotate: ['-20deg', 0],
    duration
  }, '+=' + duration)
  .add({
    targets: [screen_1, viruses_wrapper, bacteries_wrapper, background_left, background_right, pack_0],
    opacity: [1, 0],
    duration
  }, '+=' + duration * 3)
  .add({
    targets: wave,
    height: 150,
    duration
  })
  .add({
    targets: text_ot,
    translateY: -20,
    duration
  }, '-=' + duration)
  .add({
    targets: text_risk,
    opacity: 1,
    duration
  }, '-=' + duration/2)
  .add({
    targets: [wave],
    translateY: 200,
    duration
  }, '+=' + duration * 3)
  .add({
    targets: [text_ot],
    translateY: -165,
    duration
  }, '-=' + duration)
  .add({
    targets: [wave],
    opacity: 0,
    duration
  }, '-=' + duration)
  .add({
    targets: [screen_2, background],
    opacity: 0,
    duration
  }, '-=' + duration)
  .add({
    targets: [text_protivopok_2, text_phone],
    opacity: 1,
    duration
  }, '-=' + duration)
  .add({
    targets: [background_2],
    scale: [1.4, 1],
    duration: duration * 2
  }, '-=' + duration)
  .add({
    targets: pack_1,
    opacity: 1,
    translateX: [-80, -62],
    duration
  }, '-=' + duration)
  .add({
    targets: pack_2,
    opacity: 1,
    translateX: [80, 62],
    duration
  }, '-=' + duration)
  .add({
    targets: end_screen,
    opacity: 1,
    duration
  }, '+=' + duration*3)
  .add({
    duration: 2000
  })

}
