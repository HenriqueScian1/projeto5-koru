async function convertCurrency(amount, fromCurrency, toCurrency) {
  try {
    // Usando a API do fawazahmed0 que é gratuita e sem chave de API
    const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`);
    const data = await response.json();

    const exchangeRate = data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];

    if (!exchangeRate) {
      console.error(`Erro: Moeda de destino '${toCurrency.toUpperCase()}' não encontrada.`);
      return;
    }

    const convertedAmount = amount * exchangeRate;

    console.log(`\n${amount} ${fromCurrency.toUpperCase()} equivale a ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`);

  } catch (error) {
    console.error("Erro ao converter moeda:", error);
  }
}

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Uso: node index.js <valor> <moeda_origem> <moeda_destino>");
  console.log("Exemplo: node index.js 100 USD BRL");
} else {
  const amount = parseFloat(args[0]);
  const fromCurrency = args[1];
  const toCurrency = args[2];

  if (isNaN(amount)) {
    console.error("Erro: O valor deve ser um número.");
  } else {
    convertCurrency(amount, fromCurrency, toCurrency);
  }
}

