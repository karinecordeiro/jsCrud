import { clienteService } from "../service/cliente-service.js";
//criando o interior da tabela dinamicamente dentro do JS usando template string (${})
const criarNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = 
        `   <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>
        `
    linhaNovoCliente.innerHTML = conteudo; //criando conteudo html
    linhaNovoCliente.dataset.id = id;
    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]'); //trazer data do html

//para deletar linha da tabela e cliente do api
tabela.addEventListener('click', (evento)=> {
    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if (ehBotaoDeletar){
        const linhaCliente = evento.target.closest('[data-id]'); //trazer o elemento da linha para ser excluido
        let id = linhaCliente.dataset.id; //o id 
        clienteService.removeCliente(id) //deletar cliente da api
        .then( ()=> {
            linhaCliente.remove(); //remover a linha inteira da tabela imediatamente
        })
    }
})

clienteService.listaClientes()
.then(data => {
        data.forEach(elemento => {
        tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email, elemento.id)); // colocar os filhos (linha) no pai (tabela)
        })
});