// sintaxe da funçao
function nome(/* argumetos, parametros*/){ //argumentos, parametros: sao entradas de dados para funcao utilizar
    //bloco de codigo, logica
}

//executar, chamado pelo nome
nome()

function somaDoisNumeros(n1, n2){
    //let n1 = 10;
    //let n2 = 30;

    let resultado = n1 + n2;
    console.log(resultado)

    return resultado;
}

 //console.log(somaDoisNumeros())

// os parametro/argumentos
somaDoisNumeros(20, 50);
somaDoisNumeros(100, 400);