const container = document.querySelector('.container');

function buscarQuizzes() {
    const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes');
    promessa.then(renderizarHome);
}

function renderizarHome(resposta) {
    const listaQuizzes = resposta.data;
    console.log(listaQuizzes);
    container.innerHTML = `
        <div class="meus-quizzes">
            <p>Você não criou nenhum quizz ainda :(</p>
            <button onclick = "renderizacaoPrimeiraSecao()">Criar Quizz</button>
        </div>
        <div class="titulo">
            <strong>Todos os quizzes</strong>
        </div>

        <div class="lista-quizzes"></div>`

    const containerListaQuizzes = container.querySelector('.lista-quizzes');
    for (let i = 0; i < listaQuizzes.length; i++) {
        containerListaQuizzes.innerHTML += `

                    <div class="quizz" onclick="abrirQuizz(${listaQuizzes[i].id})">
                        <img src="${listaQuizzes[i].image}" alt="">
                        <div class="overlay"</div>
                        <p> <strong>${listaQuizzes[i].title}</strong> </p>
                    </div>
                
                `
    }

}

buscarQuizzes()

function abrirQuizz() {
    container.innerHTML = "";
    //colocar a tela 2

function criarQuizz() {

    renderizacaoPrimeiraSecao()
    container.innerHTML = `
    `;
}


function renderizacaoPrimeiraSecao() {
    
    container.innerHTML = `
        <h2 class="titulo-secao"> <strong> Comece pelo começo </strong> </h2>
        
        <form>
            <input class="titulo-quizz" placeholder="Título do seu quizz"></input>
            <input class="imagem-quizz" placeholder="URL da imagem do seu quizz"></input>
            <input class="qtd-perguntas" placeholder="Quantidade de perguntas do Quizz"></input>
            <input class="qtd-niveis" placeholder="Quantidade de níveis do Quizz"></input>
        </form>
        
        <button class="botaoPadraoCriacao" onclick= "validacao()">Prosseguir para criar perguntas</button>
        `;
}