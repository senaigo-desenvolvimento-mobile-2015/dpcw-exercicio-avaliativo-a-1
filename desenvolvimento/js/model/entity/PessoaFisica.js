/**
 * Pessoa Fisica classe filha de Pessoa.
 */
function PessoaFisica(){}

var cpf;

PessoaFisica.prototype = new Pessoa();

PessoaFisica.prototype.setCpf = function(cpf){
    this.cpf = cpf;
};

PessoaFisica.prototype.getCpf = function(){
    return this.cpf;
};