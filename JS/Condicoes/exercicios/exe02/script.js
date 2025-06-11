function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    
    if (fano.value.length == 0 || fano.value > ano ){
        alert("Erro! Verifique os dados novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotobebe-m.png')
            } else if(idade < 21){
                img.setAttribute('src', 'fotojovem-m.png')
            } else if(idade < 60){
                img.setAttribute('src', 'fotoadulto-m.png')
            } else{
                img.setAttribute('src','fotoidoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotobebe-f.png')
            } else if(idade < 21){
                img.setAttribute('src', 'fotojovem-f.png')
            } else if(idade < 60){
                img.setAttribute('src', 'fotoadulto-f.png')
            } else{
                img.setAttribute('src','fotoidoso-f.png')
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

