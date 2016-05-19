/**
 * Pessoa Juridica Filho de Pessoa.
 */
(function (){
    "use strict";
    var inscricaoEstadual;
    var cnpj;

    Obj.PessoaJuridica.prototype = new Obj.Pessoa();

    Obj.PessoaJuridica.prototype.setInscricaoEstadual = function(inscricaoEstadual){
        this.inscricaoEstadual = inscricaoEstadual;
    };

    Obj.PessoaJuridica.prototype.getInscricaoEstadual = function(){
        return this.inscricaoEstadual;
    };

    Obj.PessoaJuridica.prototype.setCnpj = function(cnpj){
        this.cnpj = cnpj;
    };

    Obj.PessoaJuridica.prototype.getCnpj = function(){
        return this.cnpj;
    };
}());
