/**
 * Telefone Agregado à pessoa.
 */
(function (){
    "use strict";
    var numero;

    // Construtor
    Obj.Telefone.prototype = function(numero){
        this.numero = numero;
    };

    Obj.Telefone.prototype.setNumero = function(numero){
        this.numero = numero;
    };

    Obj.Telefone.prototype.getNumero = function(){
        return this.numero;
    };

}());
