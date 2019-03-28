import '../style/style.scss'
import anime from 'animejs'


window.onload = () => {
  const tl = init_full_timeline()
  const tl_2 = init_600_timeline()
  const tl_3 = init_450_timeline()
}


// <div class="image"></div>
// <div class="text-1"></div>
// <div class="text-2"></div>
// <div class="btn"></div>
// <div class="logo"></div>



const init_full_timeline = () => {
  const image =  document.querySelector('.full .image')
  const text_1 = document.querySelector('.full .text-1')
  const text_2 = document.querySelector('.full .text-2')
  const btn =    document.querySelector('.full .btn')
  const logo =   document.querySelector('.full .logo')

  const tl = anime.timeline({
    easing: 'easeInOutCubic',
    autoplay: true,
    loop: true
  })

  const duration = 800

  tl
  .add({
    targets: image,
    opacity: 1,
    duration
  })
  .add({
    targets: logo,
    opacity: 1,
    duration
  }, '-=' + duration)
  .add({
    targets: image,
    translateX: [-40, 0],
    duration
  }, '-=' + duration * 0.5)
  .add({
    targets: logo,
    left: ['8%', '3%'],
    duration
  }, '-=' + duration)
  .add({
    targets: text_2,
    opacity: 1,
    translateY: [20, 0],
    duration
  }, '-=' + duration*0.75)
  .add({
    targets: text_1,
    opacity: 1,
    translateY: [20, 0],
    duration
  }, '-=' + duration*0.75)
  .add({
    targets: btn,
    opacity: 1,
    translateY: [20, 0],
    duration
  }, '-=' + duration*0.75)
  .add({
    duration: duration * 3
  })
  .add({
    targets: [image, text_1, text_2, btn, logo],
    opacity: 0,
    duration
  })
  .add({
    duration: duration
  })

  return tl
}


const init_600_timeline = () => {
  const image =  document.querySelector('.max-600 .image')
  const text_1 = document.querySelector('.max-600 .text-1')
  const text_2 = document.querySelector('.max-600 .text-2')
  const btn =    document.querySelector('.max-600 .btn')
  const logo =   document.querySelector('.max-600 .logo')

  const tl = anime.timeline({
    easing: 'easeInOutCubic',
    autoplay: true,
    loop: true
  })

  const duration = 800

  tl
  .add({
    targets: image,
    opacity: 1,
    duration
  })
  .add({
    targets: logo,
    opacity: 1,
    duration
  }, '-=' + duration)
  .add({
    duration
  })
  .add({
    targets: image,
    scale: [1.4, 1.01],
    duration
  })
  .add({
    targets: logo,
    translateX: [20, 0],
    duration
  }, '-=' + duration)
  .add({
    targets: text_2,
    opacity: 1,
    translateY: [20, 0],
    duration
  }, '-=' + duration*0.75)
  .add({
    targets: btn,
    opacity: 1,
    translateY: [20, 0],
    duration
  }, '-=' + duration*0.75)
  .add({
    duration: duration * 2
  })
  .add({
    targets: text_2,
    opacity: 0,
    translateX: [0, -40],
    duration
  })
  .add({
    targets: text_1,
    easing: 'easeOutCubic',
    opacity: 1,
    translateX: [40, 0],
    duration
  }, '-=' + duration*0.25)
  .add({
    duration: duration * 3
  })
  .add({
    targets: [image, text_1, text_2, btn, logo],
    opacity: 0,
    duration
  })
  .add({
    duration: duration
  })

  return tl
}

const init_450_timeline = () => {
  const image =  document.querySelector('.max-450 .image')
  const text_1 = document.querySelector('.max-450 .text-1')
  const text_2 = document.querySelector('.max-450 .text-2')
  const btn =    document.querySelector('.max-450 .btn')
  const logo =   document.querySelector('.max-450 .logo')

  const tl = anime.timeline({
    easing: 'easeInOutCubic',
    autoplay: true,
    loop: true
  })

  const duration = 800

  tl
  .add({
    targets: image,
    opacity: 1,
    duration
  })
  .add({
    targets: logo,
    opacity: 1,
    duration
  }, '-=' + duration)
  .add({
    duration
  })
  .add({
    targets: image,
    scale: [1.15, 1.01],
    duration
  })
  .add({
    targets: logo,
    translateX: [10, 0],
    duration
  }, '-=' + duration)
  .add({
    targets: text_2,
    opacity: 1,
    translateY: [20, 0],
    duration
  }, '-=' + duration*0.75)
  .add({
    targets: btn,
    opacity: 1,
    translateY: [20, 0],
    duration
  }, '-=' + duration*0.75)
  .add({
    duration: duration * 2
  })
  .add({
    targets: text_2,
    opacity: 0,
    translateX: [0, -40],
    duration
  })
  .add({
    targets: text_1,
    opacity: 1,
    easing: 'easeOutCubic',
    translateX: [40, 0],
    duration
  }, '-=' + duration*0.25)
  .add({
    duration: duration * 3
  })
  .add({
    targets: [image, text_1, text_2, btn, logo],
    opacity: 0,
    duration
  })
  .add({
    duration: duration
  })

  return tl
}