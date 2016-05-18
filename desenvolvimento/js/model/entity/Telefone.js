/**
 * Telefone Agregado à pessoa.
 */
(function (){
    "use strict";
    var numero;

    Telefone.prototype.setNumero = function(numero){
        this.numero = numero;
    };

    Telefone.prototype.getNumero = function(){
        return this.numero;
    };
}(Telefone));
