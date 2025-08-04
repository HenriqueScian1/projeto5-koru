async function getJoke(category) {
  let url = 'https://api.chucknorris.io/jokes/random';
  if (category) {
    url += `?category=${category}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error(`Erro: ${data.error}`);
      return;
    }

    console.log(data.value);
  } catch (error) {
    console.error('Erro ao buscar a piada:', error);
  }
}

const categoryArg = process.argv[2];

if (categoryArg) {
  getJoke(categoryArg);
} else {
  getJoke();
}

