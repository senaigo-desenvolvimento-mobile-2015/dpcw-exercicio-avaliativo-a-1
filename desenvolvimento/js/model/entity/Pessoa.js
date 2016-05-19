/**
 * Super classe Pessoa
 */
(function (){
    "use strict";
    var id;
    var nome;
    var endereco;
    var telefone;

    // Construtor
    Obj.Pessoa.prototype = function(id, nome, endereco, telefone){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    };

    Obj.Pessoa.prototype.setId = function(id){
        this.id = id;
    };

    Obj.Pessoa.prototype.getId = function(){
        return this.id;
    };

    Obj.Pessoa.prototype.setNome = function(nome){
        this.nome = nome;
    };

    Obj.Pessoa.prototype.getNome = function(){
        return this.nome;
    };

    Obj.Pessoa.prototype.setEndereco = function(endereco){
        this.endereco = endereco;
    };

    Obj.Pessoa.prototype.getEndereco = function(){
        return this.endereco;
    };

    Obj.Pessoa.prototype.setTelefone = function(telefone){
        this.telefone = telefone;
    };

    Obj.Pessoa.prototype.getTelefone = function(){
        return this.telefone;
    };
}());
