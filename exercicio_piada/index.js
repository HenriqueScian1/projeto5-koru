const fetch = require('node-fetch');

async function buscarPiada() {
  try {
    const url = 'https://api.chucknorris.io/jokes/random';
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (!dados || !dados.value) {
      console.log(' Não foi possível buscar a piada.');
      return;
    }

    console.log('\n🃏 Piada do dia:');
    console.log(`"${dados.value}"\n`);
  } catch (erro) {
    console.log(' Erro ao buscar a piada:', erro.message);
  }
}

buscarPiada();
