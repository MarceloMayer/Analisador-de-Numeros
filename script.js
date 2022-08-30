
var num = []


let resposta = document.getElementById('resposta')

function adicionar() {


    let number = document.getElementById('inputNumber')
    let numberValue = Number(number.value)
    let numberSelected = document.getElementById('selected-number')



    if (numberValue < 1 || numberValue > 100) {
        window.alert("número fora do range")

    } else if (num.indexOf(numberValue) != -1) {
        //para verificar se o número é repetido
        window.alert("número repetido")
    } else {
        numberSelected.innerHTML += `Valor  ${numberValue} selecionado <br>`

        number.value = ""//limpa o valor do input após ele ser adicionado

        //adicionando os valores ao array "num" por push
        num.push(numberValue)
        resposta.innerHTML=""//caso adicione valor posterior e clique em adicionar, ele limpa o resultado antigo
    }
}


function finalizar() {

    var soma = 0//importante! caso a soma n seja zerada a todo click, o resultado é alterado a cada click em finalizar

if (resposta.innerHTML=="") {

    //somando os valores do array
for (var i = 0; i < num.length; i++) {
    soma += num[i]
     
 }
 //colocando o array num em ordem crescente
 var numCrescente = num.sort((a, b) => a - b)

    resposta.innerHTML=""
    resposta.innerHTML += `Ao todo, temos ${num.length} elementos<br>`
    resposta.innerHTML += `O menor valor informado foi ${numCrescente[0]}<br>`
    resposta.innerHTML += `Somando os valores, temos: ${soma} <br>`
    resposta.innerHTML += `A média dos valores digitados é ${(soma/num.length).toFixed(2)} `
} else {
    resposta.innerHTML=""//ao clicar em finalizar ele limpa a resposta
    //segundo click em finalizar, a resposta volta
   
}





    
}