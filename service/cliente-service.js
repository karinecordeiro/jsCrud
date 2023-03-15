
//criando o interior da tabela dinamicamente dentro do JS usando template string (${})
const criarNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = 
        `   <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>
        `
    linhaNovoCliente.innerHTML = conteudo; //criando conteudo html
    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]'); //trazer data do html

const listaClientes = () => {
    //tem que ser promise, não promessa(não traduzir)//
    const promise = new Promise((resolve, reject) => { 
        const http = new XMLHttpRequest();

        http.open('GET', 'http://localhost:3000/profile'); // abre a comunicação entre aplicação e API, com método e endereço

        //quando a página carregar ele aciona a função
        http.onload = () => {
            if(http.status >= 400){
                reject(JSON.parse(http.response)); //elemento de js valido
            } else{
                resolve(JSON.parse(http.response));
            }
        }
        http.send(); // envia a requisição
    }) 
    return promise; 
}
listaClientes()
.then( data => {
        data.forEach(elemento => {
        tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email)); // colocar os filhos (linha) no pai (tabela)
        })
});
