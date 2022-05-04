function legenda() {
  const canvas = document.getElementById('canvas').getContext('2D')

  canvas.font = '10px Raleway'

  canvas.fillText('Arraste para adicionar uma imagem para o produto', 10, 50)
}
