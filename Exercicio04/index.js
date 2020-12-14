function sacar() {
  var valor = parseInt(document.getElementById("numero").value);
  var quantidadeNotas50;
  var quantidadeNotas10;
  var quantidadeNotas5;
  var quantidadeNotas1;

  if (valor >= 50) {
    quantidadeNotas50 = valor / 50;
    valor % 50;
    alert("Quantidade de notas de 50: " + Math.trunc(quantidadeNotas50));
    if (valor % 50 != 0) {
      valor = valor - 50;
      if (valor >= 10) {
        quantidadeNotas10 = valor / 10;
        valor % 10;
        alert("Quantidade de notas de 10: " + Math.trunc(quantidadeNotas10));
        if (valor % 10 != 0) {
          valor = valor - 10;
          if (valor >= 5) {
            quantidadeNotas5 = valor / 5;
            valor % 5;
            alert("Quantidade de notas de 5: " + Math.trunc(quantidadeNotas5));
            if (valor % 5 != 0) {
              valor = valor - 5;
              if (valor >= 1) {
                quantidadeNotas1 = valor / 1;
                valor % 1;
                alert(
                  "Quantidade de notas de 1: " + Math.trunc(quantidadeNotas1)
                );
                if (valor % 1 != 0) {
                  valor = valor - 1;
                }
              }
            }
          }
        }
      }
    }
  } else if (valor >= 10) {
    quantidadeNotas10 = valor / 10;
    valor % 10;
    alert("Quantidade de notas de 10: " + Math.trunc(quantidadeNotas10));
    if (valor % 10 != 0) {
      valor = valor - 10;
      if (valor >= 5) {
        quantidadeNotas5 = valor / 5;
        valor % 5;
        alert("Quantidade de notas de 5: " + Math.trunc(quantidadeNotas5));
        if (valor % 5 != 0) {
          valor = valor - 5;
          if (valor >= 1) {
            quantidadeNotas1 = valor;
            alert("Quantidade de notas de 1: " + Math.trunc(quantidadeNotas1));
          }
        }
      }
    }
  } else if (valor >= 5) {
    quantidadeNotas5 = valor / 5;
    valor % 5;
    alert("Quantidade de notas de 5: " + Math.trunc(quantidadeNotas5));
    if (valor % 5 != 0) {
      valor = valor - 5;
      if (valor >= 1) {
        quantidadeNotas1 = valor / 1;
        valor % 1;
        alert("Quantidade de notas de 1: " + Math.trunc(quantidadeNotas1));
        if (valor % 1 != 0) {
          valor = valor - 1;
        }
      }
    }
  } else if (valor >= 1) {
    quantidadeNotas1 = valor / 1;
    valor % 1;
    alert("Quantidade de notas de 1: " + Math.trunc(quantidadeNotas1));
    if (valor % 1 != 0) {
      valor = valor - 1;
    }
  }
}
