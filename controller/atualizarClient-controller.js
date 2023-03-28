import { clienteService } from "../service/cliente-service.js";

const pegaURL = new URL (window.location) //gera nova URL

const id = pegaURL.searchParams.get('id'); //mostra id do cliente expecifico

const inputNome = document.querySelector('[data-nome');
const inputEmail = document.querySelector('[data-email');

clienteService.expecificaClientes(id)
.then( dados => {
    inputNome.value = dados.nome; //mostra os valores já obtidos na tabela para atualizar
    inputEmail.value = dados.email;
})

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento)=> {
    evento.preventDefault()

    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(()=> {
        window.location.href = "../telas/edicao_concluida.html"
    })
})