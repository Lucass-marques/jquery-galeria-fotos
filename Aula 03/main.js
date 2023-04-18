$(document).ready(function() {
    $('.cabecalho-botao').click(function() {
        $(".formulario").slideDown();
    })

    $(".formulario-botao-resetar").click(function() {
        $(".formulario").slideUp();
    })

    $("form").on("submit", function(e) {
        console.log("Su")
        e.preventDefault();
    })

})
