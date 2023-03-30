import { clienteService } from "../service/cliente-service.js";

(async()=> {
    const pegaURL = new URL (window.location) //gera nova URL

    const id = pegaURL.searchParams.get('id'); //mostra id do cliente expecifico

    const inputNome = document.querySelector('[data-nome');
    const inputEmail = document.querySelector('[data-email');

    try{
        const dados = await clienteService.expecificaClientes(id)
        inputNome.value = dados.nome; //mostra os valores já obtidos na tabela para atualizar
        inputEmail.value = dados.email;
    }
    catch(erro){
        console.log(erro);
        window.location.href = '../telas/erro.html'
    }

    

    const formulario = document.querySelector('[data-form]');

    formulario.addEventListener('submit', async (evento)=> {
        evento.preventDefault()

        try{
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = "../telas/edicao_concluida.html"
        }
        catch(erro){
            console.log(erro);
            window.location.href = '../telas/erro.html'
        }
        
    })
}) ()
