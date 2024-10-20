fetch('HACKATONRETAILTECH/feedback.html') // ajuste o caminho conforme necessário
function mostrarSecao(secao) {
    // Esconde todas as seções
    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(s => s.classList.remove('ativa'));

    // Mostra a seção selecionada
    document.getElementById(secao).classList.add('ativa');
}

function carregarFeedback() {
    // Define a seção de feedback como ativa
    mostrarSecao('feedback');
    
    // Usa o Fetch API para carregar o conteúdo de feedback.html
    fetch('feedback.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('conteudoFeedback').innerHTML = data;
        })
        .catch(error => console.log('Erro ao carregar feedback:', error));
}

function adicionarTarefa() {
    const tarefaInput = document.getElementById('novaTarefa').value;
    const listaTarefas = document.getElementById('listaTarefas');
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = tarefaInput;
    listaTarefas.appendChild(novaTarefa);
    document.getElementById('novaTarefa').value = '';
}

    // Mostra a seção selecionada
    const secaoAtiva = document.getElementById(secaoId);
    if (secaoAtiva) {
        secaoAtiva.classList.add('ativa'); // Adiciona a classe 'ativa'
    }

