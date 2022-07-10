import { produtoService } from '../produto-service.js'

const criaNovaLinha = (img, nome, preco, id) => {
  const linhaNovoProduto = document.createElement('div')
  linhaNovoProduto.classList.add('produto')

  const conteudo = `
  
    <img src="/assets/${img}" alt="" class="img" />
    <p class="nome" data-nome>${nome}</p>
    <p class="preco" data-preco>${preco}</p>
    <a href="/pages/produto.html?id=${id}">Ver Produto</a>
 
  `
  linhaNovoProduto.innerHTML = conteudo
  linhaNovoProduto.img = MediaSource
  linhaNovoProduto.dataset.id = id
  return linhaNovoProduto
}

const vitrine = document.querySelector('[data-produto]')

vitrine.addEventListener('click', async evento => {
  let ehBotaoDeDeleta =
    evento.target.className === 'botao-simples botao-simples--excluir'
  if (ehBotaoDeDeleta) {
    try {
      const linhaProduto = evento.target.closest('[data-id]')
      let id = linhaProduto.dataset.id
      await produtoService.removeProduto(id)
      linhaProduto.remove()
    } catch (erro) {
      console.log(erro)
      window.location.href = '../telas/erro.html'
    }
  }
})

const render = async () => {
  try {
    const listaProdutos = await produtoService.listaProdutos()
    listaProdutos.forEach(elemento => {
      vitrine.appendChild(
        criaNovaLinha(elemento.img, elemento.nome, elemento.preco, elemento.id)
      )
    })
  } catch (erro) {
    console.log(erro)
  }
}

render()
