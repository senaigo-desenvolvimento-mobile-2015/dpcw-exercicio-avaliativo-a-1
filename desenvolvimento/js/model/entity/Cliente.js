/**
 * Cliente classe filha de Pessoa.
 */
function Cliente(){}

var cpf;

Cliente.prototype = new Pessoa();

Cliente.prototype.setCpf = function(cpf){
    this.cpf = cpf;
};

Cliente.prototype.getCpf = function(){
    return this.cpf;
};
