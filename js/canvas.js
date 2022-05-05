function upload() {
  canvas = createCanvas(192, 128)
  backgroud(128)
  canvas.drop(loadImgCanvas)

  Input = select('#canvas')
  input.dragOver(activate)
  input.draLeave(deactivate)

  input.drop(load_img, deactivate)
}
function activate() {
  input.style('background-color', '#888')
}
function deactivate() {
  input.style('background-color', '#888')
}

function load_img(file) {
  createP(file.data + '' + file.size)
  var img = createImg(file.data)
  img.size(192, 128)
}

function loadImgCanvas(file) {
  loadImage(file.data, img => {
    resizeCanvas(500)
    image(img, 0, 0, width, heigth)
  })
}
