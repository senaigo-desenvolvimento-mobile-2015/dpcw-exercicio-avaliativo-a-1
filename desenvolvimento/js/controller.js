/**
 * Controlador
 */
(function (){
    "use strict";
    Obj.Controlador = {
        /**
         * Persiste os dados no storage
         */
        salvar : function(){
            if(Obj.Functions.validar()){
                var storageFactory = new Obj.LocalStorageFactory();
                var objPessoa = {};
                if(Componente.pessoafisica.checked){
                    objPessoa = new Obj.PessoaFisica();
                    objPessoa.setCpf(Componente.cpf.value);
                }else{
                    objPessoa = new Obj.PessoaJuridica();
                    objPessoa.setCnpj(Componente.cnpj.value);
                    objPessoa.setInscricaoEstadual(Componente.inscricaoEstadual.value);
                }
                objPessoa.setId(Componente.id.value);
                objPessoa.setNome(Componente.nome.value);
                objPessoa.setEndereco(Componente.endereco.value);
                /* Telefone */
                var objTelefone = new Obj.Telefone();
                objTelefone.setNumero(Componente.telefone.value);
                objPessoa.setTelefone(objTelefone.getNumero());
                /* Salva */
                if(storageFactory.salvar(objPessoa)) {
                    Obj.Functions.calert(
                        "success","Cadastrado com sucesso!", function(){
                            Obj.Functions.removeDomElemment(objPessoa.getId());
                            Obj.Functions.addrow(objPessoa);
                            Obj.Functions.contarRegistros();
                        }
                    );
                    this.novoRegistro();
                }else{
                    Obj.Functions.calert("info","Erro ao realizar cadastro."); // jshint ignore:line
                }
            }
        },
        /**
         * Exclusão do dado no storage
         */
        excluir : function(id){
            var storageFactory = new Obj.LocalStorageFactory();
            (storageFactory.excluir(id)) ? Obj.Functions.calert(
                "success","Registro removido com sucesso!", function(){
                    Obj.Functions.removeDomElemment(id);
                    Obj.Functions.limparCampos();
                    Obj.Functions.contarRegistros();
            }) : Obj.Functions.calert("info","Erro ao realizar cadastro."); // jshint ignore:line
        },
        /**
         * Editar regitros selecionado por id.
         */
        editar : function(id){
            var storageFactory = new Obj.LocalStorageFactory();
            Obj.Functions.preencherCamposParaEdicao(storageFactory.consultarPorId(id));
            Componente.form.scrollTop = -100;
            Componente.nome.focus();
        },
        /**
         * Habilita o formulário para cadastro de um novo registro.
         */
        novoRegistro : function(){
            Obj.Functions.limparCampos();
        },
        /**
         * Lista os itens cadastrados no load da página
         */
        listarItens : function(){
            var storageFactory = new Obj.LocalStorageFactory();
            var items = storageFactory.listarTodos();
            var key;
            var storage;
            if(Object.keys(items).length > 0){
                for(key in items){
                    Obj.Functions.addrow(JSON.parse(items[key]));
                }
            }
            Obj.Functions.contarRegistros();
        }
    };
}());
