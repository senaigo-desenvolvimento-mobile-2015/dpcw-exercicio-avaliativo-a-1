/**
 * Telefone Agregado à pessoa.
 */
function Telefone(){}

var numero;

Telefone.prototype.setNumero = function(numero){
    this.numero = numero;
};

Telefone.prototype.getNumero = function(){
    return this.numero;
};
