# projeto5-koru
Desenvolvimento do Projeto 5 do curso de Desenvolvimento de Software Fullstack do curso Boticário com colaboração do grupo Koru
Projeto - Criando um CLI
• Projeto: Construir uma ferramenta simples de linha de comando (CLI) usando
Node.js.
• Ideia: Um CLI que busca dados de uma API pública (ex: piadas do Chuck Norris)
e exibe no terminal.
• Passos:
o Inicializar um projeto Node (`npm init -y`).
o Instalar pacotes necessários.
o Usar `fetch` com `async/await` para buscar dados da API.
o Exibir os resultados formatados no `console.log()`.
o Publicando a CLI no NPM!
Projeto Prático - Crie um CLI
O foco é construir uma ferramenta de linha de comando simples usando Node.js,
interagindo com uma API externa e exibindo dados no terminal.
Cada grupo pode ter sua ideia, algumas ideias vão abaixo:
CLI de Consulta de CEP
• Descrição: Criar um CLI que consulta informações de endereço a partir de um
CEP usando uma API pública (como ViaCEP).
• Funcionalidades:
o Receber o CEP como argumento.
o Validar o formato do CEP.
o Buscar os dados de endereço na API.
o Exibir o endereço completo no terminal.
• Habilidades Aplicadas: Fetch de dados de API, Promises/async/await,
validação básica (if/else, manipulação de strings), manipulação de objetos e
exibição.
CLI de dados de Câmbio
• Descrição: Desenvolver um CLI que converte um valor de uma moeda para
outra usando uma API de cotação de moedas.
• Funcionalidades:
o Receber o valor, a moeda de origem e a moeda de destino como
argumentos.
o Buscar as taxas de conversão na API.
o Calcular o valor convertido.
o Exibir o resultado formatado.
• Habilidades Aplicadas: Fetch de dados de API, Promises/async/await,
manipulação de números, operações matemáticas, tratamento de argumentos,
exibição formatada.
CLI de Piadas
• Descrição: Os alunos podem criar um CLI que busca piadas de uma API pública
(como a do Chuck Norris ou outras APIs de piadas).
• Funcionalidades:
o Receber um comando para buscar uma piada aleatória.
o Opcional: Permitir buscar piadas por categoria (se a API suportar).
o Exibir a piada formatada no terminal.
• Habilidades Aplicadas: Fetch de dados de API, Promises/async/await,
manipulação de strings, exibição no console.
CLIs com chatGPT / Gemini / IA
Algumas ideias:
• Geração de Ideias Criativas
• Sumarização de Texto
• Tradutor de Texto
• Análise de Sentimento
• Pontos importantes
o Chave de API: Os alunos precisarão obter uma chave de API no site da
OpenAI. Ensine-os a gerenciar essa chave de forma segura (usando
variáveis de ambiente no .env).
o Requisição POST: A API do ChatGPT geralmente envolve fazer
requisições POST com um corpo JSON específico. Isso solidifica o
aprendizado sobre diferentes métodos HTTP com fetch.
o Estrutura da Resposta: A resposta da API é um objeto JSON com uma
estrutura aninhada. Os alunos precisarão navegar nesse objeto para
extrair o texto gerado.
o Custos: Reforce a questão dos custos e a importância de usar a API com
moderação durante a fase de aprendizado.
o Bibliotecas Auxiliares: Para lidar com variáveis de ambiente (.env), pode
ser útil introduzir a biblioteca dotenv. Para um parsing de argumentos
mais amigável, yargs ou commander continuam sendo boas opções
como extras.
Pontos de Atenção
• Complexidade: Mantenha os projetos relativamente simples, focando nos
conceitos principais da aula (Node.js, fetch, Promises/async/await, NPM).
• APIs Públicas: Utilize APIs que não exijam chaves de API complexas ou até sem
autenticação nesta fase.
• Argumentos da Linha de Comando: Inicialmente, os alunos podem
simplesmente ler argumentos básicos usando process.argv em Node.js. Se
houver tempo e interesse, pode-se introduzir bibliotecas simples como yargs ou
commander para um parsing de argumentos mais robusto, mas isso pode ser
um "extra".
• Publicação no NPM: Um passo extra interessante seria guiar os alunos a
publicarem suas CLIs simples no NPM (Aula 7 menciona isso nos detalhes).
