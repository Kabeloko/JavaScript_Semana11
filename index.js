const prompt = require('prompt-sync')();

var idade = parseInt(prompt("Digite sua idade: "));
var tempo = parseInt(prompt("Digite seu tempo de serviço: "));
var salario = parseFloat(prompt("Digite seu salário: "));
//&& idade>=65
if (idade >= 65 || tempo >= 30 || idade >= 60 && tempo >= 25) {
  console.log("Você pode se aposenar");
  if (tempo > 20) {
    var aposentadoria = salario * 0.8;
    if (aposentadoria <= 1212) {
      var aposentadoria = 1212;

    }
    if (aposentadoria >= 7087.22) {
      var aposentadoria = 7087.22;

    } else {

    }

  } else if (tempo <= 20) {
    var aposentadoria = salario * 0.6;
  }
  if (aposentadoria <= 1212) {
    var aposentadoria = 1212;

  }
  if (aposentadoria >= 7087.22) {
    var aposentadoria = 7087.22;

  } else {
    console.log("Seu salário de aposentado será:  ", aposentadoria);
  }

} else {
  console.log("Você não pode se aposentar!")
}
// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar

// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)

// Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
