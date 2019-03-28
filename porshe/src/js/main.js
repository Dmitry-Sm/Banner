import '../style/style.scss'
import anime from 'animejs'


window.onload = () => {

  const tl = init_timeline()
}







const init_timeline = () => {
  const tl = anime.timeline({
    easing: 'easeInOutCubic',
    autoplay: true,
    loop: true
  })

  const bg = document.querySelector('.background')
  // bg.style.opacity = 0.1

  tl.add({
    targets: bg,
    translateX: 270,
    duration: 2000
  })
  .add({
    targets: bg,
    scale: 0.5,
    duration: 1000
  })
  .add({
    duration: 2000
  })


  return tl
}