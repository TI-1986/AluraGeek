///////
const listaProdutos = async () => {
  try {
    const resposta = await fetch(`http://localhost:3000/produto`)
    if (!resposta.ok) {
      throw new Error('Não foi possível listar os produtos')
    }
    return resposta.json()
  } catch (erro) {
    console.log(erro)
    window.location.href = '../telas/erro.html'
  }
}

const criaProduto = async (img, cat, nome, preco, descricao) => {
  try {
    const newClient = await fetch(`http://localhost:3000/produto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imagem: img,
        categoria: cat,
        nome: nome,
        preco: preco,
        descricao: descricao
      })
    })
    if (!newClient.ok) {
      throw new Error('Não foi possível criar um produto')
    }
    return newClient.json()
  } catch (erro) {
    console.log(erro)
    window.location.href = '../telas/erro.html'
  }
}

const removeProduto = async id => {
  try {
    const excluir = await fetch(`http://localhost:3000/produto/${id}`, {
      method: 'DELETE'
    })
    if (!excluir.ok) {
      throw new Error('Não foi possível deletar um produto')
    }
  } catch (erro) {
    console.log(erro)
    window.location.href = '../telas/erro.html'
  }
}

const detalhaProduto = id => {
  return fetch(`http://localhost:3000/produto/${id}`).then(resposta => {
    if (resposta.ok) {
      return resposta.json()
    }

    throw new Error('Não foi possível detalhar um produto')
  })
}

const atualizaProduto = (img, cat, nome, preco, descricao) => {
  return fetch(`http://localhost:3000/produto/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      imagem: img,
      categoria: cat,
      nome: nome,
      preco: preco,
      descricao: descricao
    })
  }).then(resposta => {
    if (resposta.ok) {
      return resposta.json()
    }
    throw new Error('Não foi possível detalhar um produto')
  })
}

export const produtoService = {
  listaProdutos,
  criaProduto,
  removeProduto,
  detalhaProduto,
  atualizaProduto
}
