Projeto 5 - Koru
Curso: Desenvolvimento de Software Fullstack (O Boticário)
Grupo: Koru
Tema: Criando uma ferramenta de Linha de Comando (CLI) com Node.js

💡 Descrição do Projeto
Este projeto tem como objetivo construir uma ferramenta simples de linha de comando (CLI), utilizando Node.js, para interagir com uma API pública e exibir os dados no terminal.

⚙️ Etapas do Desenvolvimento
Inicializar um projeto Node

bash
Copiar
Editar
npm init -y
Instalar pacotes necessários

Usar fetch com async/await para buscar dados da API

Exibir os resultados formatados com console.log()

(Opcional) Publicar a CLI no NPM

🔧 Propostas de CLIs
🔹 1. CLI de Consulta de CEP
Descrição:
Consulta informações de endereço a partir de um CEP utilizando uma API pública (ex: ViaCEP).

Funcionalidades:

Receber o CEP como argumento

Validar o formato do CEP

Buscar dados de endereço na API

Exibir o endereço completo no terminal

Habilidades Aplicadas:

Requisições com fetch

Uso de async/await

Validação de strings

Manipulação de objetos e exibição no terminal

🔹 2. CLI de Conversão de Moedas
Descrição:
Converte valores entre diferentes moedas usando uma API de câmbio.

Funcionalidades:

Receber valor, moeda de origem e destino como argumentos

Buscar taxa de conversão na API

Calcular o valor convertido

Exibir resultado formatado

Habilidades Aplicadas:

Fetch de dados de API

Operações matemáticas e tratamento de argumentos

Manipulação de números e exibição no terminal

🔹 3. CLI de Piadas
Descrição:
Busca piadas em uma API pública (ex: Chuck Norris Jokes API).

Funcionalidades:

Buscar uma piada aleatória por comando

(Opcional) Buscar piadas por categoria

Exibir piada formatada no terminal

Habilidades Aplicadas:

Requisições fetch

Uso de async/await

Manipulação de strings e exibição no console

🔹 4. CLIs com APIs de IA (ChatGPT / Gemini)
Ideias de Aplicações:

Geração de ideias criativas

Sumarização de texto

Tradução de texto

Análise de sentimento

Pontos Importantes:

Chave de API: Necessária e deve ser armazenada com segurança em variáveis de ambiente (.env)

Requisição POST: Utilizada para enviar prompts e receber respostas da API

Estrutura de Resposta: JSON aninhado — navegar até o texto gerado

Custos: Utilizar com moderação durante o aprendizado

Bibliotecas Auxiliares:

dotenv para variáveis de ambiente

yargs ou commander para parsing de argumentos

📌 Pontos de Atenção
Complexidade:
Manter o projeto simples, com foco nos conceitos de Node.js, fetch, Promises, async/await e NPM

APIs Públicas:
Prefira APIs que não exigem autenticação ou chaves de API complexas

Argumentos da Linha de Comando:
Utilizar process.argv no início
(Extras: yargs ou commander para parsing mais avançado)

Publicação no NPM:
Incentivado como passo extra (mencionado na Aula 7)

