//variavel pra pegar os imputs
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado")



function calcular(){
    console.log("calculando");
//o que entrar na imput vai parar as variaveis da funcao
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value

//calculos

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas);

    //pega os caluclos joga no resultado e imprime na tela
    resultado.innerHTML = `<p>${qtdTotalCarne / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Litros de Refrigerante</p>`

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 200;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}