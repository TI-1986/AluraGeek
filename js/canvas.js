// function upload() {
//   canvas = createCanvas(192, 128)
//   backgroud(400)
//   canvas.drop(loadImgCanvas)

//   Input = select('#canvas')
//   input.dragOver(activate)
//   input.draLeave(deactivate)

//   input.drop(load_img, deactivate)
// }
// function activate() {
//   input.style('background-color', '#888')
// }
// function deactivate() {
//   input.style('background-color', '#888')
// }

// function load_img(file) {
//   createP(file.data + '' + file.size)
//   var img = createImg(file.data)
//   img.size(192, 128)
// }

// function loadImgCanvas(file) {
//   loadImage(file.data, img => {
//     resizeCanvas(500, (img.heigth * 500) / img.width)
//     image(img, 0, 0, width, heigth)
//   })
// }

const droppableZoneSign = document.getElementById('canvas')
document.addEventListener('img', event => {
  droppableZoneSign.classList.add('img')
})
document.addEventListener('img', event => {
  imgZoneSign.classList.remove('img')
})
document.addEventListener('img', event => {
  event.stopPropagation()
  event.preventDefault()
  droppableZoneSign.classList.add('img')

  // isso adiciona o sinal de mais (+) ao lado do cursor para indicar ao usuário     // que uma ação diferente será tomada
  event.dataTransfer.dropEffect = 'copy'
})
document.addEventListener('drop', event => {
  outputEl.classList.remove('img')
  event.stopPropagation()
  event.preventDefault()

  // trata o filesList
  appendFiles(event.dataTransfer.files)
})
