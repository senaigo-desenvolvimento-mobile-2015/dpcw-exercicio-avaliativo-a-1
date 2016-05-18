/**
 * Chamadas globais
 */

/*
 * Movimento da imagem no eixo x
 */
Functions.timers.add(function(){
    box.style.left = x+"px";
    if(++x > 50) return false;
});
/*
 * Movimento da imagem no eixo y
 */
Functions.timers.add(function(){
    box.style.top = y+"px";
    y +=2;
    if(y > 120) return false;
});
/*
 * Executando a animação
 */
Functions.timers.start();
/*Foco no id*/
id.focus();
/*Limpa os campos no load do formulário*/
Functions.limparCampos();
