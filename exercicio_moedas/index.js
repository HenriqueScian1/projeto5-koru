const argumentos = process.argv;

const valor = argumentos[2];
const moedaOrigem = argumentos[3];
const moedaDestino = argumentos[4];

console.log('Valor: ', valor);
console.log('De: ', moedaOrigem);
console.log('Para: ', moedaDestino);

if(!valor || !moedaOrigem || !moedaDestino){
    console.log('Digite o valor, moeda origem e moeda destino');
    process.exit();
}

if (isNaN(valor)){
    console.log('Erro! O valor precisa ser um número!');
    process.exit();
}

if (moedaOrigem.length !== 3 || moedaDestino.length !== 3) {
    console.log('As moedas devem ter exatamente 3 letras. Ex: USD, BRL, EUR...');
    process.exit();
}

const fetch = require('node-fetch');

async function converterMoeda(valor, moedaOrigem, moedaDestino){
    try{
        const url = `https://api.frankfurter.app/latest?amount=${valor}&from=${moedaOrigem}&to=${moedaDestino}`;

        const resposta = await fetch(url);
        const dados = await resposta.json();

       
        if (!dados.rates || !dados.rates[moedaDestino]){
            console.log('Não é possível converter. Verifique os dados ou se as moedas são suportadas.');
            return;
        }

        const convertido = dados.rates[moedaDestino].toFixed(2);

        console.log(`Conversão: ${valor} ${moedaOrigem.toUpperCase()} = ${convertido} ${moedaDestino.toUpperCase()}`);
    } catch (erro){
        console.log('Erro na conversão: ', erro.message);
    }
}

converterMoeda(valor, moedaOrigem, moedaDestino);