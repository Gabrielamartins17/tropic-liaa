documento.addEventListener('DOMContentLoaded', função(){
    const botaoDeAcessibilidade = document.getElementById('botão-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', função (){
     botaoDeAcessibilidade.classList.alternar('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

     const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
     botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

    })

     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');

     const alternaContraste = documento.getElementById('alterna-contraste')

     let tamanhoAtualFonte = 1;

     aumentaFonteBotao.addEventListener('click', função(){
         tamanhoAtualFonte += 0.1;
         documento.corpo.estilo.fontSize = '${tamanhoAtualFonte}rem'

     })

     diminuiFonteBotao.addEventListener('click', função(){
         tamanhoAtualFonte -= 0.1;
         documento.corpo.estilo.fontSize = '${tamanhoAtualFonte}rem'

     })

     alternaContraste.addEventListener('click', função(){
         documento.corpo.classList.toggle('alto-contraste')
     })


 })

 ScrollReveal().revelar('#inicio', { atraso: 500 });
 ScrollReveal().revelar('#tropicalia', { atraso: 500 });
 ScrollReveal().revelar('#galeria', { atraso: 500 });
 ScrollReveal().revelar('#contato', { atraso: 500 });