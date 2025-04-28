// login.js

document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('formLogin');
  
    formLogin.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      const cpf = document.getElementById('cpf').value;
  
      const usuarioRegistrado = JSON.parse(localStorage.getItem('usuarioRegistrado'));
  
      if (!usuarioRegistrado) {
        alert('Nenhum usuário registrado encontrado.');
        return;
      }
  
      if (usuarioRegistrado.email === email &&
          usuarioRegistrado.senha === senha &&
          usuarioRegistrado.cpf === cpf) {
        alert('Login realizado com sucesso!');
        // Aqui você pode redirecionar para uma página principal
        // window.location.href = "paginaPrincipal.html";
      } else {
        alert('Credenciais inválidas. Tente novamente.');
      }
    });
  });
  