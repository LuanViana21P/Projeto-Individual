var respostas = [
    'true',
    'true',
    'true',
    'true',
    'true',
    'true',
    'true',
    'true',
    'true',
    'true',
]

var pontuacao = 0;
var resp = ''
var proxima = 0
var tela_atual = 1
var idUsuario = Number(sessionStorage.ID_USUARIO);
console.log(idUsuario)

function verificar(value) {
    resp = value;
}


function enviar() {
    proxima++
    if (proxima == 1) {
        pergunta1.style = "display: none"
        pergunta2.style = "display: flex"
    } else if (proxima == 2) {
        pergunta2.style = "display: none"
        pergunta3.style = "display: flex"
    } else if (proxima == 3) {
        pergunta3.style = "display: none"
        pergunta4.style = "display: flex"
    } else if (proxima == 4) {
        pergunta4.style = "display: none"
        pergunta5.style = "display: flex"
    } else if (proxima == 5) {
        pergunta5.style = "display: none"
        pergunta6.style = "display: flex"
    } else if (proxima == 6) {
        pergunta6.style = "display: none"
        pergunta7.style = "display: flex"
    } else if (proxima == 7) {
        pergunta7.style = "display: none"
        pergunta8.style = "display: flex"
    } else if (proxima == 8) {
        pergunta8.style = "display: none"
        pergunta9.style = "display: flex"
    } else if (proxima == 9) {
        pergunta9.style = "display: none"
        pergunta10.style = "display: flex"
        btn_finalizar.style = "display: flex"
    }



    if (resp.length == 0) {
        alert("Selecione uma opção para prosseguir")
    } else {
        for (
            var contador = 0;
            contador <= respostas.length + 1;
            contador++
        ) {
            if (respostas.indexOf(resp) > -1) {
                pontuacao += 100;
                tela_atual++;

                break;
            } else {
                tela_atual++;
                break;
            }
        }

    }


}

function finalizar() {

    fetch("/usuarios/finalizar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            pontuacaoServer: pontuacao,
            usuarioServer: idUsuario
        })
    })
        .then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {

                 setTimeout(() => {
                     window.location = "ranking.html";
                 }, "3000")

            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}