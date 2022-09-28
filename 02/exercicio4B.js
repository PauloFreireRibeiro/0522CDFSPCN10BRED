function retornarDiagnosticoDoUsuario(alturaDoUsuario, pesoDoUsuario) {
const imc=pesoDoUsuario/(alturaDoUsuario**2);
let diagnostico=0;
switch(imc) {
case imc>=18.5 && imc<=24.5:
diagnostico="normal";
break;
case imc>=25.5 && imc<=29.9:
    diagnostico="sobrepeso";
break;
case imc>=30 && imc<40:
    diagnostico="Obesidade";
break;
case imc>=40:
    diagnostico="Obesidade Grave";
break;

}
 return console.log(`Seu diagnostico é ${imc.toFixed(0)} você está ${diagnostico}.` );
}
console.log(retornarDiagnosticoDoUsuario(1.70,100));