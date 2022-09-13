//usando operador ternario a média de notas

var nota1 = 10;
var nota2  = 5;
var nota3 = 6;
var somatorio  = nota1+nota2+nota3;
var media = ((nota1+nota2+nota3)/3);


console.log('o somatório das notas 1, 2 e 3 é: ', somatorio);
console.log('a sua média foi: ', media);

console.log(media>=7? 'Você passou ':'Está reprovado');
