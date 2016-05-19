/**
 * Pessoa Fisica classe filha de Pessoa.
 */
(function (){
    "use strict";
    var cpf;

    Obj.PessoaFisica.prototype = new Obj.Pessoa();

    Obj.PessoaFisica.prototype.setCpf = function(cpf){
        this.cpf = cpf;
    };

    Obj.PessoaFisica.prototype.getCpf = function(){
        return this.cpf;
    };

}());
