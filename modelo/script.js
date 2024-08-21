

function carregar () {
    var msg = document.getElementById("msg")
    var gif = document.getElementById("giphy")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora > 0 && hora < 12) {
        //Bom dia 
        gif.innerHTML = `<div id = "giphy"> <iframe src="https://giphy.com/embed/AwVvMXJtC6iGIncrgS" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> </div>`
        document.body.style.background = 'rgb(124,95,252)'
    } else if (hora > 12 && hora < 18) {
        //Boa tarde
        gif.innerHTML = `<div id = "giphy"> <iframe src="https://giphy.com/embed/hvfDsDi48kWAufPxaS" width="480" height="269" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> </div>`
        document.body.style.background = 'orange'
    }
      else {
        //Boa Noite 
        gif.innerHTML = `<div id = "giphy"> <iframe src="https://giphy.com/embed/LmgFqlSj5uZ1PCUaFR" width="480" height="466" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> </div>`
        document.body.style.background = 'rgb(09,00,49)'
      }
}




