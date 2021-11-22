//Pedir um nome
//var nome = prompt("digite seu nome:");

//var ano_nasc = parseInt(prompt("Digite o ano de nasc:"));
//var idade = 2021 - ano_nasc;

//alert("Olá, "+nome+" voce tem "+idade+"anos");

//Funções: 4 maneiras
//1- função sem parametro e sem retorno
//2- função sem parametro e com retorno
//3- função com parametro e sem retorno
//4- função sem parametro e com retorno

//Exemplo tipo1
//function teste(){
//console.log('OBA');
//}

//for (var i = 1; i <= 10; i++) {
//teste();
	
//} 

//exemplo 2

//function soma(){
	//var total = 10+15;
	//return total;
//}

//var recebi = soma();
//console.log("retornou da função: " + soma());

//exemplo 3
//var num1= 10;
//var num2= 20;
 
//function soma(a,b){
	//var total_soma= a+b;
	//console.log(total_soma);
//}

//soma(num1, num2);

//exemplo 4
//var num1 = 10;
//var num2 = 20;
//function soma (a,b){
	//var total_soma = a+b;
	//return total_soma;
//}

//var retorno= soma(num1,num2);
//console.log(retorno);

//quero fazerv as 4 operações basicas com os dois numeros!
var num1 = 10;
var num2 = 20;



function soma(a,b){
var total = a + b;
return total;
}



function multiplicacao(a,b){
var total = a * b;
return total;
}



function subtracao(a,b){
var total = a / b;
return total;
}



function divisao(a,b){
var total = a - b;
return total;
}



function raiz(a,b){
var total = Math.sqrt(a);
return total;
}



console.log("A soma é: " + soma (num1,num2))
console.log("A multiplicação é: " + multiplicacao(num1,num2))
console.log("A subtração é: " + subtracao(num1,num2))
console.log("A divisão é:" + divisao(num1,num2))
console.log("A raiz quadrada de " + num1 + " é " + raiz(num1));