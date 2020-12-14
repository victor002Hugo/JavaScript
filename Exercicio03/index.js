function calcula_imc(){
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;
    
    var quadrado = (altura * altura);
    
    var calculo = (peso/quadrado);
    
    if(calculo<18.5){
    alert("Abaixo do peso com o indice: " + calculo);
    }
    else if(calculo>=18.5 && calculo<24.9){
    alert("Peso ideal (Parabéns) com o indice: " + calculo);
    }
    
    else if(calculo>=25 && calculo<29.9) {
    alert("Levemente acima do peso com o indice: " + calculo);
    }
    else if(calculo>=30 && calculo<34.9) {
    alert("Obesidade grau I com o indice: " + calculo);
    }
    else if(calculo>=35 && calculo<39.9) {
        alert("Obesidade grau II(Severa) com o indice: " + calculo);
    }
    else if (calculo>40)
    alert("Obesidade grau III (mórbida) indice: " + calculo);
    }
