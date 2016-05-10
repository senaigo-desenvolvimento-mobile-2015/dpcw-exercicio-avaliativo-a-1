/**
 * CRUD Storage
 */
function LocalStorageFactory(){}
/**
 * Salvar
 * @param {Object} Objeto a ser persistido
 * @param {String} Tipo de pessoa que será persistido
 */
LocalStorageFactory.prototype.salvar = function(Objeto){
    localStorage.setItem(
        Objeto.getId(),
        JSON.stringify(Objeto)
    );
};
/**
 * Editar
 * @param {Object} Objeto a ser persistido
 * @param {String} Tipo de pessoa que será persistido
 */
LocalStorageFactory.prototype.editar = function(Objeto){
    localStorage.setItem(
        Objeto.getId(),
        JSON.stringify(Objeto)
    );
};
/**
 * Exclir
 * @param  {Object} Cliente
 */
LocalStorageFactory.prototype.excluir = function(id){
    localStorage.removeItem(id);
};
/**
 * Listar por id
 */
LocalStorageFactory.prototype.consultarPorId = function(id){
    var retrievedObject = localStorage.getItem(id);
    return JSON.parse(retrievedObject);
};
/**
 * Listar todos os itens
 */
LocalStorageFactory.prototype.listarTodos = function(){
    var values = {};
    var keys = Object.keys(localStorage);
    var i = keys.length;
    while (i--) {
        values[i] = localStorage.getItem(keys[i]);
    }
    return values;
};
