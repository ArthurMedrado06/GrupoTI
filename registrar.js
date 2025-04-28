// registrar.js

document.addEventListener('DOMContentLoaded', function() {
    const formRegistro = document.getElementById('formRegistro');
  
    formRegistro.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio do formulário
  
      // Capturar os valores dos inputs
      const usuario = {
        nome_completo: document.getElementById('nomeCompleto').value,
        email: document.getElementById('email').value,
        cpf: document.getElementById('cpf').value,
        data_nascimento: document.getElementById('dataNascimento').value,
        senha: document.getElementById('senha').value,
        estado: document.getElementById('estado').value,
        cidade: document.getElementById('cidade').value,
        endereco: document.getElementById('endereco').value
      };
  
      // Salvar no Local Storage
      localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));
  
      alert('Cadastro realizado com sucesso!');
      formRegistro.reset(); // Limpa o formulário após registrar
    });
  });
  