/**
 * CRUD Storage
 */
function PessoaJuridicaBusiness(){}
/**
 * Salvar
 * @param  {Object} Cliente
 */
PessoaJuridicaBusiness.prototype.salvar = function(PessoaJuridica){

    localStorage.setItem(
        "PessoaJuridica["+PessoaJuridica.getId()+"]",
        JSON.stringify(PessoaJuridica)
    );
};
/**
 * Editar
 * @param  {Object} Cliente
 */
PessoaJuridicaBusiness.prototype.editar = function(PessoaJuridica){

    localStorage.setItem(
        "PessoaJuridica["+PessoaJuridica.getId()+"]",
        JSON.stringify(PessoaJuridica)
    );
};
/**
 * Exclir
 * @param  {Object} Cliente
 */
PessoaJuridicaBusiness.prototype.excluir = function(id){

    localStorage.removeItem("PessoaJuridica["+id+"]");

};
/**
 * Listar por id
 */
PessoaJuridicaBusiness.prototype.consultarPorId = function(id){

    var retrievedObject = localStorage.getItem('PessoaJuridica['+id+"]");
    console.log('PessoaJuridica: ', JSON.parse(retrievedObject));

};
