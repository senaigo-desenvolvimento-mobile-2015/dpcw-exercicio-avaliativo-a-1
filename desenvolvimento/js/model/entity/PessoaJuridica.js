/**
 * Pessoa Juridica Filho de Pessoa.
 */
(function (){
    "use strict";
    var inscricaoEstadual;
    var cnpj;

    PessoaJuridica.prototype = new Pessoa();

    PessoaJuridica.prototype.setInscricaoEstadual = function(inscricaoEstadual){
        this.inscricaoEstadual = inscricaoEstadual;
    };

    PessoaJuridica.prototype.getInscricaoEstadual = function(){
        return this.inscricaoEstadual;
    };

    PessoaJuridica.prototype.setCnpj = function(cnpj){
        this.cnpj = cnpj;
    };

    PessoaJuridica.prototype.getCnpj = function(){
        return this.cnpj;
    };
}(PessoaJuridica));
