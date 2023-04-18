$(document).ready(function() {
    $('.cabecalho-botao').click(function() {
        alert("Expandir Formulário");
    })

    $("form").on("submit", function(e) {
        console.log("Su")
        e.preventDefault();
    })

})
