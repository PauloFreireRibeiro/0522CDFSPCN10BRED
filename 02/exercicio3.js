// Cotação do dólar no dia 3 de maio de 2022.
let cotacaoDoDolarHoje = 4.97;
let valorMinimoDeCompraDeDolar = 100;
let valorMaximoDeCompraDeDolar = 2500;

function converterRealParaDolar(real) {
    let result=real*cotacaoDoDolarHoje;
    if(valorMaximoDeCompraDeDolar<real){
        return "Valor excede o limite máximo!"
    }else if(valorMinimoDeCompraDeDolar>real){
        return "Valor insuficiente!";
    }
return `Você pode comprar $ ${result}`;
}
// Utilize as mensagens a seguir como base do retorno esperado:
// A compra mínima permitida é de $ XXX,XX.
// A compra máxima permitida é de $ XXXX,XX.
// Você pode comprar $ XXX,XX.
console.log(converterRealParaDolar(1500));
