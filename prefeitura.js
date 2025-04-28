// prefeitura.js

document.addEventListener('DOMContentLoaded', function() {
    const formPrefeitura = document.getElementById('formPrefeitura');
  
    formPrefeitura.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const funcionario = {
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value,
        cidade: document.getElementById('cidade').value,
      };
  
      // Salvar no Local Storage
      localStorage.setItem('funcionarioPrefeitura', JSON.stringify(funcionario));
  
      alert('Cadastro de funcionário da prefeitura realizado com sucesso!');
      formPrefeitura.reset();
    });
  });
  