function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique o ano!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade <= 10){ 
                //Criança
                img.setAttribute('src', 'homem_bebe.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homem_jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem_adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade <= 10){ 
                //Criança
                img.setAttribute('src', 'mulher_bebe.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulher_jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher_adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img) //
    }
}