import { produtoService } from '../produto-service.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async evento => {
  evento.preventDefault()

  try {
    const img = evento.target.querySelector('[data-img]').files[0].name

    const categoria = evento.target.querySelector('[data-cat]').value

    const nome = evento.target.querySelector('[data-nome]').value

    const preco = evento.target.querySelector('[data-preco]').value

    const descricao = evento.target.querySelector('[data-descricao]').value

    await produtoService.criaProduto(img, categoria, nome, preco, descricao)
    window.location.href = '/index.html'
  } catch (erro) {
    console.log(erro)
    window.location.href = '../telas/erro.html'
  }
})
