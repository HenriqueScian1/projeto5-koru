const argumentos = process.argv;
const cep = argumentos[2];

console.log('O CEP digitado foi:', cep);


if(!cep) {
    console.log('Informe o CEP com 8 dígitos!');
    process.exit();
}

const cepValido = /^[0-9]{8}$/.test(cep);

if (!cepValido){
    console.log('Cep INVÁLIDO! Informar CEP com 8 dígitos.');
    process.exit();
}

console.log('CEP válido:', cep);

const fetch = require('node-fetch');

async function buscarEndereco(cep){
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const resposta = await fetch(url);

        const dados = await resposta.json();

        if (dados.erro) {
            console.log('CEP Inexistente');
            return;
        }

        console.log(`Endereço encontrado:`);
        console.log(`Rua: ${dados.logradouro}`);
        console.log(`Bairro:  ${dados.bairro}`);
        console.log(`Cidade: ${dados.localidade}`);
        console.log(`Estado: ${dados.uf}`);
    }catch(erro){
        console.log('Erro', erro.message)
        
    }
}

buscarEndereco(cep);
