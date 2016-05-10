/**
 * Pessoa Juridica Filho de Pessoa.
 */
function PessoaJuridica(){}

var inscricaoEstadual;
var cnpj;

PessoaJuridica.prototype = new Pessoa();

PessoaJuridica.prototype.setInscricaoEstadual = function(inscricaoEstadual){
    this.inscricaoEstadual = inscricaoEstadual;
};

PessoaJuridica.prototype.setInscricaoEstadual = function(){
    return this.inscricaoEstadual;
};

PessoaJuridica.prototype.setCnpj = function(cnpj){
    this.cnpj = cnpj;
};

PessoaJuridica.prototype.setCnpj = function(){
    return this.cnpj;
};
