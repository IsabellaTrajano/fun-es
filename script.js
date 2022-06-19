//1 - crie uma função que exiba uma mensagem no console
function frase(){
    console.log("Quando o sol e a lua se encontram temos um eclipse")
}
frase()
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function word(nome){
    console.log(nome)
}
word('Isabella')
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function me(nome, idade, estiloMusical){
    console.log(`Me chamo ${nome}, tenho ${idade} anos e gosto de ${estiloMusical}`)
}
me('Isabella', '23', 'pop')
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function oi(filme, música){
    console.log(filme, música)
}
oi('flootloose', 'bridges')

//*Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(numero){
    return numero*3
}
console.log(triplo(5))

