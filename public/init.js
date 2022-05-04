// function init(teste) {

//   function handlerLoadWidget() {

//     const WIDGET_URL = "https://widget-vue.herokuapp.com/"
//     const iframe = document.createElement('iframe')
//     console.log(WIDGET_URL)

//     iframe.src(WIDGET_URL)
//     iframe.id = 'widget-ns'
//     iframe.style.position = 'fixed'
//     iframe.style.bottom = '0px'
//     iframe.style.left = '0px'
//     iframe.style.overflow = 'hidden'
//     iframe.style.border = '0px'
//     iframe.style.zIndex = '99999'

//     document.body.appendChild(iframe)

//     // window.addEventListener('message', (event) => {
//     //   if(!event.data.isWiget) return
//     //   // if (event.data.isOpen) {
//     //   //   iframe.width='100%'
//     //   //   iframe.height='100%'
//     //   // }
//     // })
//     // return
//   }
//   const script = document.createElement('script');

//   script.addEventListener('load', handlerLoadWidget)
//   document.body.appendChild(script) 
// }

// window.init = init