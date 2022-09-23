// Importando o Express para o projeto.
const Express = require('express');

// Inicianlizando o Express no projeto Node.js
const Aplicativo = new Express();

// Disponibilizo o meu Recurso (Endopoint) via Http.
Aplicativo.get('/',(RequisicaoCliente,RespostaServidor)=> RespostaServidor.send("Hello World"));

// Configuro a porta de acesso aos recuros do Express via Http.
Aplicativo.listen(1234, ()=> console.log("Servidor Okay..."));


