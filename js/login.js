function logar() {
  var login = document.getElementById('email').value
  var password = document.getElementById('senha').value

  if (login == 'admin@teste.com' && password == 'admin') {
    location.href = '/pages/cadastra_produto.html'
  } else {
    alert('Usuario ou senha incorretos!')
    location.href = '/pages/login.html'
  }
}
