const arrastarImg = document.getElementById('canvas')
document.addEventListener('img', event => {
  arrastarImg.classList.add('img')
})
document.addEventListener('img', event => {
  imgCapturada.classList.remove('img')
})
document.addEventListener('img', event => {
  event.stopPropagation()
  event.preventDefault()
  arrastarImg.classList.add('img')

  event.dataTransfer.dropEffect = 'copy'
})
document.addEventListener('drop', event => {
  outputEl.classList.remove('img')
  event.stopPropagation()
  event.preventDefault()

  appendFiles(event.dataTransfer.files)
})

const img = document.querySelectorAll('#selectImg')
const file = document.querySelector('[data-imgFile]')
const previaDaImagem = document.querySelector('.imagem')

var imgFile = null

img.forEach(inputFile => {
  inputFile.addEventListener('change', e => {
    var view = new FileReader()
    view.readAsDataURL(inputFile.files[0])
    view.onloadend = function (event) {
      imgFile = event.target.result
      file.textContent = inputFile.files[0].name
      file.classList.add('show')
    }
    view.addEventListener('loadend', function (load) {
      previaDaImagem.src = load.target.result
    })
  })
})
