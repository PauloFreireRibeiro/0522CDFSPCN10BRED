function retornarDiagnosticoDoUsuario(alturaDoUsuario, pesoDoUsuario) {
    
    let imc= pesoDoUsuario/(alturaDoUsuario*alturaDoUsuario);
    let diagnostico="";
   
    if(imc>=18.5 && imc<=24.5){
        diagnostico="normal";
    }else if(imc>=25.5 && imc<=29.9){
            diagnostico="sobrepeso";
    }else if(imc>=30 && imc<40){
        diagnostico="Obesidade";
    }else if(imc<18.5){
        diagnostico="Desnustrição";
    }else{
        diagnostico="Obesidade Grave";
    
    }

     return diagnostico
}
// Utilize a mensagem a seguir como base do retorno esperado:
// Seu diagnóstico é XXXXXX.
console.log("Seu diagnóstico é "+ retornarDiagnosticoDoUsuario(1.70,98));