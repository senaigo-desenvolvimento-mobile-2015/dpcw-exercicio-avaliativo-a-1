/**
 * Funções gerais
 *
 */
/**
 * Habilita campos para pessoa fisica
 */
var checkPessoaFisica = function(){
    divCnpj.classList.add("hidden");
    divInscEstadual.classList.add("hidden");
    divCpf.classList.remove("hidden");
    inputClear();
};
/**
 * Habilita campos para pessoa juridica
 */
var checkPessoaJuridica = function(){
    divCnpj.classList.remove("hidden");
    divInscEstadual.classList.remove("hidden");
    divCpf.classList.add("hidden");
    inputClear();
};
/**
 * Limpa todos os inputs da tela e coloca o focus no campo id.
 */
var inputClear = function(){
    var elements = document.getElementsByTagName("input");
    for (var i=0; i < elements.length; i++) {
        if (elements[i].type == "text") {
            elements[i].value = "";
        }
    }
    id.focus();
};
