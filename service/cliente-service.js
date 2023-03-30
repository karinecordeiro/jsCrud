const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`) // o fetch já faz o get e devolve uma promisse
    .then(resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: { //que tipo de info está enviando
            'Content-type' : 'application/json'
        }, 
        //dados que seram preenchidos
        body: JSON.stringify ({ //transforma em texto
            nome:nome,
            email:email,
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente cliente')
    })
}
const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE' 
    })
    .then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover um ciente')
        }
    })
}

const expecificaClientes = (id) => {
    return fetch(`http://localhost:3000/profile//${id}`) 
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível expecificar um cliente cliente')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile//${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        }, 
        body: JSON.stringify ({ 
            nome:nome,
            email:email,
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar um cliente cliente')
    })
}

//exportar todos itens dentro do objeto clienteService para facil leitura do código
export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    expecificaClientes,
    atualizaCliente,
}