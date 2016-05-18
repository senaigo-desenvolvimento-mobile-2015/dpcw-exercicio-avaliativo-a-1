/**
 * Super classe Pessoa
 */
(function (){
    "use strict";
    var id;
    var nome;
    var endereco;
    var telefone;

    Pessoa.prototype.setId = function(id){
        this.id = id;
    };

    Pessoa.prototype.getId = function(){
        return this.id;
    };

    Pessoa.prototype.setNome = function(nome){
        this.nome = nome;
    };

    Pessoa.prototype.getNome = function(){
        return this.nome;
    };

    Pessoa.prototype.setEndereco = function(endereco){
        this.endereco = endereco;
    };

    Pessoa.prototype.getEndereco = function(){
        return this.endereco;
    };

    Pessoa.prototype.setTelefone = function(telefone){
        this.telefone = telefone;
    };

    Pessoa.prototype.getTelefone = function(){
        return this.telefone;
    };
}(Pessoa));
