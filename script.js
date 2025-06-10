const criarContaBtn = document.getElementById('criarconta');
if (criarContaBtn) {
    criarContaBtn.addEventListener('click', () => {
        window.location.href = 'criarConta.html';
    });
}

const fazerLoginBtn = document.getElementById('fazerLogin');
if (fazerLoginBtn) {
    fazerLoginBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}


function novaConta(){
    let nome = document.getElementById('nome').value.trim();
    let senha = document.getElementById('senha').value.trim();
    let mensagem = document.getElementById('mensagem');

    let usuario = JSON.parse(localStorage.getItem('usuario')) || {};

    if(nome === '' || senha === ''){
        mensagem.style.color = 'red';
        mensagem.textContent = 'Digite nome e senha';
        return;
    }

    usuario[nome] = senha;
    localStorage.setItem('usuario', JSON.stringify(usuario));
    mensagem.style.color = 'green';
    mensagem.textContent = 'Conta criada com sucesso!';
}


function logar(){
    let nome = document.getElementById('nome').value.trim();
    let senha = document.getElementById('senha').value.trim();
    let mensagem = document.getElementById('mensagem');

    let usuario = JSON.parse(localStorage.getItem('usuario')) || {};

    if(usuario[nome] && usuario[nome] === senha){
        window.location.href = 'sejaBemvindo.html';
        localStorage.setItem('nome', nome);
    }else{
        mensagem.style.color = 'red';
        mensagem.textContent = 'Senha ou nome INCORRETO'
    }
}


