function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resp = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900) {
        alert('[ERROR] Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imgs/bb-m.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imgs/jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imgs/adulto-m.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'imgs/idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imgs/bb-f.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imgs/jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imgs/adulto-f.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'imgs/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        resp.innerHTML = `Detectamos ${gen} com idade ${idade} anos`
        res.appendChild(img)
    }
}