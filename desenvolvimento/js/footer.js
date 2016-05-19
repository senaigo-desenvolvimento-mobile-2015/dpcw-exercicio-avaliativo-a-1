/**
 * Chamadas globais
 */

/*Foco no id*/
Componente.id.focus();
/*
* Movimento da imagem no eixo x
*/
Obj.Functions.timers.add(function(){
    Componente.box.style.left = Componente.x+"px";
    if(++Componente.x > 50) return false;
});
/*
 * Movimento da imagem no eixo y
 */
Obj.Functions.timers.add(function(){
    Componente.box.style.top = Componente.y+"px";
    Componente.y +=2;
    if(Componente.y > 120) return false;
});
/*
 * Executando a animação
 */
Obj.Functions.timers.start();
/*Limpa os campos no load do formulário*/
Obj.Functions.limparCampos();
