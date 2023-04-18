$(document).ready(function() {
    $('.cabecalho-botao').click(function() {
        $(".formulario").slideDown();
    })

    $(".formulario-botao-resetar").click(function() {
        $(".formulario").slideUp();
    })

    $("form").on("submit", function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $(".formulario-url").val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href = "${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real" class="tamanho-real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn(1000);
        $(".formulario-url").val("");
    

    })

})
