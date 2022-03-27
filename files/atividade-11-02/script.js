function mostrarAprovacao() {
    var nome = document.getElementById("nome").value;
    var  document = document.getElementById("media").value;
    var painel = document.querySelector("#painel");

    if (media >= 6) {
        painel.textContent = "Parabéns, " + nome + " você foi aprovado.";
    }
    else {
        painel.textContent = "Parabéns, " + nome + " você não foi aprovado.";
    }
}

function calcularMedia() {

    let nota1 = document.getElementById("nota1").value,
        nota2 = document.getElementById("nota2").value,
        painel = document.querySelector("#painel"),
        nome = document.querySelector("#nome").value;

    let n1 = parseInt(nota1),
        n2 = parseInt(nota2),
        media = (n1+n2)/2;

    if (media >= 6) {
        painel.textContent = "Parabéns, " + nome + " Você foi aprovado.";
    }
    else {
        painel.textContent = "Infelizmente, " + nome + " você não foi aprovado.";
    }

}
