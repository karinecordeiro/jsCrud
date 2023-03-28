const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`) // o fetch já faz o get e devolve uma promisse
    .then(resposta => {
        return resposta.json();
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
        return resposta.body
    })
}
const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE' 
    })
}

const expecificaClientes = (id) => {
    return fetch(`http://localhost:3000/profile//${id}`) 
    .then(resposta => {
        return resposta.json();
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
        return resposta.json();
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