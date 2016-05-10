/**
 * CRUD Storage
 */
function ClienteBusiness(){}
/**
 * Salvar
 * @param  {Object} Cliente
 */
ClienteBusiness.prototype.salvar = function(Cliente){

    localStorage.setItem(
        "Cliente["+Cliente.getId()+"]",
        JSON.stringify(Cliente)
    );
};
/**
 * Editar
 * @param  {Object} Cliente
 */
ClienteBusiness.prototype.editar = function(Cliente){

    localStorage.setItem(
        "Cliente["+Cliente.getId()+"]",
        JSON.stringify(Cliente)
    );
};
/**
 * Exclir
 * @param  {Object} Cliente
 */
ClienteBusiness.prototype.excluir = function(id){

    localStorage.removeItem("Cliente["+id+"]");

};
/**
 * Listar por id
 */
ClienteBusiness.prototype.consultarPorId = function(id){

    var retrievedObject = localStorage.getItem('Cliente['+id+"]");
    console.log('Cliente: ', JSON.parse(retrievedObject));

};
