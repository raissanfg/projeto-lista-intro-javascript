// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt('Qual a altura do retangulo?')
  let largura = prompt('Qual a largura do retangulo?')
  console.log(`altura: ${altura}`);
  console.log(`largura: ${largura}`);
  console.log(altura * largura);
}



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt('Em que ano estamos?')
  let anoDeNascimento = prompt('Em que ano voçê nasceu?')
  let idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome:");
  let idade = prompt("Digite sua idade:");
  let email = prompt("Digite seu email:");
  let mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt('Digite sua primeira cor favorita:')
  let cor2 = prompt('Digite sua segunda cor favorita:')
  let cor3 = prompt('Digite sua terceira cor favorita:')
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let letraMaiuscula = string.toUpperCase();
  return letraMaiuscula;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let quantosIngressosPrecisamos = custo / valorIngresso
  return quantosIngressosPrecisamos;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array.unshift(array.pop());

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.lenght === string2.lenght &&
    string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = +prompt('Digite o ano atual:')
  let nascimento = +prompt('Digite seu ano de Nascimento:')
  let anoDeEmissao = +prompt('Digite o ano de emissao do seu RG:')
  let idadeAtual = anoAtual - nascimento
  let anoDesdeEmissao = anoAtual - anoDeEmissao

  console.log(idadeAtual <= 20 && anoDesdeEmissao >= 5 ||
    idadeAtual > 20 && idadeAtual <= 50 && anoDesdeEmissao >= 10 ||
    idadeAtual > 50 && anoDesdeEmissao >= 15);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let divididoPor4 = ano % 4 === 0
  let naoDivididoPor100 = ano % 100 !== 0
  let divididoPor400 = ano % 400 === 0
  let anoBissexto = (divididoPor4 && naoDivididoPor100) || divididoPor400
  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let quantosAnos = prompt('Você tem mais de 18 anos?')
  let anoDeEnsino = prompt('Você possui ensino médio completo?')
  let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  let inscricao = quantosAnos === "sim" && anoDeEnsino === "sim" && disponibilidade === "sim";

  console.log(inscricao);

}