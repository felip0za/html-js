function verificarIdade(idade) {
    const mensagem = `Idade : ${idade} anos`
    console.log(mensagem)

    if (idade >= 60) {
        console.log("Vei");
    } else {
        console.log("Nao Vei");
    }
}

verificarIdade('60')