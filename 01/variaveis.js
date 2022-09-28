
// 1. Permite armazenar uma informacão que posteriormente poderá ser substituída.
let mensagem = "Olá";

// 1.1. Nesse trecho de código, o texto "Olá" é substituído por "Hi". 
mensagem = "Hi";

// 2. Permite armazenar uma informação, porém ão poderá substituir o valor.
const nomeDoAluno = "Fulano"

// 2.1. Nesse trecho de código o Nodejs retorna um error, pois estamos tentando modificar o valor "Fulano".
// nomeDoAluno = "Sicrano"; // TypeError: Assignment to constant variable (Tipo do Erro: Atribuição à variável constante).
// nomeDoAluno = "Beltrano"; // TypeError: Assignment to constant variable (Tipo do Erro: Atribuição à variável constante).

// Nota: Quando comentámos o trecho de código, ele passa a não ser executado.

// 3. Apresentação do código no terminal.
// Nota: Você pode utilizar operadores Matemáticos + para concatenar/mesclar valores.
console.log(mensagem + " " + nomeDoAluno);

