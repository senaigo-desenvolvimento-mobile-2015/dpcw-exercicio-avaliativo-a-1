/**
 * CRUD Storage
 */
(function (){
    "use strict";
    // Construtor
    Obj.LocalStorageFactory.prototype = function(){};
    /**
     * Salvar
     * @param {Object} Objeto a ser persistido
     */
    Obj.LocalStorageFactory.prototype.salvar = function(Objeto){
        localStorage.setItem(Objeto.getId(),JSON.stringify(Objeto));
        return true;
    };
    /**
     * Excluir
     */
    Obj.LocalStorageFactory.prototype.excluir = function(id){
        localStorage.removeItem(id);
        return true;
    };
    /**
     * Listar por id
     */
    Obj.LocalStorageFactory.prototype.consultarPorId = function(id){
        var retrievedObject = localStorage.getItem(id);
        return JSON.parse(retrievedObject);
    };
    /**
     * Listar todos os itens
     */
    Obj.LocalStorageFactory.prototype.listarTodos = function(){
        var values = {};
        var keys = Object.keys(localStorage);
        var i = keys.length;
        while (i--) {
            values[i] = localStorage.getItem(keys[i]);
        }
        return values;
    };

}());
