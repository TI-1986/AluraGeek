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
  })
})
