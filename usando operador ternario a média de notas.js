//usando operador ternario a média de notas

var nota1 = 2;
var nota2  = 5;
var nota3 = 1;
var somatorio  = nota1+nota2+nota3;
var media = ((nota1+nota2+nota3)/3);


console.log('o somatório das notas 1, 2 e 3 é: ', somatorio);
console.log('a sua média foi: ', media);

if (media>=7){
    console.log('vc passou')}
else if (media<=6.9 && media>=3){
    console.log('está de recuperação')
}   
else{
    console.log('reprovado')
}