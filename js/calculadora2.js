function somar() {
    let num1 = parseInt(prompt('Digite o primeiro numero: '))
    let num2 = parseInt(prompt('Digite o segundo numero: '))
    let resultado = num1 + num2

    if(isNaN(resultado)){
        console.log('Digite apenas números!')
    } else {
        console.log('A soma de ' + num1 + ' e ' + num2 + ' é: ' + resultado)
    }
    
}

function subtrair() {
    let num1 = parseInt(prompt('Digite o primeiro numero: '))
    let num2 = parseInt(prompt('Digite o segundo numero: '))
    let resultado = num1 - num2

    if(isNaN(resultado)){
        console.log('Digite apenas números!')
    } else {
        console.log('A subtração de ' + num1 + ' e ' + num2 + ' é: ' + resultado)
    }
}

function multiplicar() {
    let num1 = parseInt(prompt('Digite o primeiro numero: '))
    let num2 = parseInt(prompt('Digite o segundo numero: '))
    let resultado = num1 * num2
     
    if(isNaN(resultado)){
        console.log('Digite apenas números!')
    } else {
        console.log('A multiplicação de ' + num1 + ' e ' + num2 + ' é: ' + resultado)
    }
}

function dividir() {
    let num1 = parseInt(prompt('Digite o primeiro numero: '))
    let num2 = parseInt(prompt('Digite o segundo numero: '))
    let resultado = num1 / num2

    if (num1 == 0 || num2 == 0) {
        console.log('Não se pode dividir por zero');
    } else if(isNaN(resultado)){
        console.log('Digite apenas números!')
    } else {
        console.log('A divisão de ' + num1 + ' e ' + num2 + ' é: ' + resultado)
    }
}