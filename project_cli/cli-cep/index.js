async function consultCEP(cep) {
  // 1. Validar o formato do CEP
  const cepRegex = /^\d{8}$/;
  if (!cepRegex.test(cep)) {
    console.error("Erro: CEP inválido. Use o formato XXXXXXXX (apenas números).");
    return;
  }

  try {
    // 2. Buscar dados de endereço na API ViaCEP
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      console.error("Erro: CEP não encontrado.");
      return;
    }

    // 3. Exibir o endereço completo no terminal
    console.log(`\nEndereço para o CEP ${cep}:`);
    console.log(`  Logradouro: ${data.logradouro}`);
    console.log(`  Bairro: ${data.bairro}`);
    console.log(`  Cidade: ${data.localidade}`);
    console.log(`  Estado: ${data.uf}`);
    console.log(`  DDD: ${data.ddd}`);
  } catch (error) {
    console.error("Erro ao consultar o CEP:", error);
  }
}

// Receber o CEP como argumento
const cepArgument = process.argv[2];

if (!cepArgument) {
  console.log("Uso: node index.js <CEP>");
  console.log("Exemplo: node index.js 01001000");
} else {
  consultCEP(cepArgument);
}

