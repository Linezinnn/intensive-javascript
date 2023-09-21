function exerciseOne(){
    alert("Hello World!")
}

function exerciseTwo(){
    let numberOne = Number(prompt("Escreva o 1º número: "))
    let numberTwo = Number(prompt("Escreva o 2º número: "))

    const result = numberOne + numberTwo

    alert(`A soma da operação: ${numberOne} + ${numberTwo} = ${result}`)
}

function exerciseThree(){
    let number = prompt("Escreva algo: ")
    const condition = number / 2

    if(condition){
        alert("O que você escreveu é um número")
    }else{
        alert("O que você escreveu não é um número")
    }
}

function exerciseFour(){
    alert("Avaliando se um valor é uma string")

    let value = "a"
    const condition = typeof value == "string"
    
    if(condition){
        alert("O valor é uma string")
    }else{
        alert("O valor não é uma string")
    }
}

function exerciseFive(){
    alert("Avaliando se um valor é booleano")

    let value = true
    const condition = typeof value == "boolean"
    
    if(condition){
        alert("O valor é um booleano")
    }else{
        alert("O valor não é um booleano")
    }
}

function exerciseSix(){
    let numberOne = Number(prompt("Escreva o 1º número: "))
    let numberTwo = Number(prompt("Escreva o 2º número: "))

    const result = numberOne - numberTwo

    alert(`A soma da operação: ${numberOne} - ${numberTwo} = ${result}`)
}

function exerciseSeven(){
    let numberOne = Number(prompt("Escreva o 1º número: "))
    let numberTwo = Number(prompt("Escreva o 2º número: "))

    const result = numberOne * numberTwo

    alert(`A soma da operação: ${numberOne} x ${numberTwo} = ${result}`)
}

function exerciseEight(){
    let numberOne = Number(prompt("Escreva o 1º número: "))
    let numberTwo = Number(prompt("Escreva o 2º número: "))

    const result = numberOne / numberTwo

    alert(`A soma da operação: ${numberOne} / ${numberTwo} = ${result}`)
}

function exerciseNine(){
    let number = Number(prompt("Escreva um número: "))

    const condiiton = number % 2 == 0

    if(condiiton){
        alert("O número é par")
    }else{
        alert("O número não é par")
    }
}

function exerciseTen(){
    let number = Number(prompt("Escreva um número: "))

    const condiiton = number % 2 == 0

    if(!condiiton){
        alert("O número é impar")
    }else{
        alert("O número não é impar")
    }
}