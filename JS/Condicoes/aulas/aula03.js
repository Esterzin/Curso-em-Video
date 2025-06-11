//let idade = Number(prompt("Digite sua idade"))

let idade = 68
if (idade < 16) {
    console.log("Não vota")
} else if ((idade >= 16 && idade < 18) || idade > 65) {
    console.log("Voto opcional")
} else {
    console.log("Voto obrigatório")
}


var agora = new Date()
var min = new Date()
var hora = agora.getHours()
var minutos = min.getMinutes()
console.log(`São ${hora} horas e ${minutos} minutos! `) 