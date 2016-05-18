/**
 * Controlador
 */
(function (){
    "use strict";
    Controlador = {
        /**
         * Persiste os dados no storage
         */
        salvar : function(){
            if(Functions.validar()){
                var storageFactory = new LocalStorageFactory();
                var objPessoa = {};
                if(pessoafisica.checked){
                    objPessoa = new PessoaFisica();
                    objPessoa.setCpf(cpf.value);
                }else{
                    objPessoa = new PessoaJuridica();
                    objPessoa.setCnpj(cnpj.value);
                    objPessoa.setInscricaoEstadual(inscricaoEstadual.value);
                }
                objPessoa.setId(id.value);
                objPessoa.setNome(nome.value);
                objPessoa.setEndereco(endereco.value);
                /* Telefone */
                var objTelefone = new Telefone();
                objTelefone.setNumero(telefone.value);
                objPessoa.setTelefone(objTelefone.getNumero());
                /* Salva */
                if(storageFactory.salvar(objPessoa)){
                    Functions.calert("success","Cadastrado com sucesso!", function(){
                        Functions.removeDomElemment(objPessoa.getId());
                        Functions.addrow(objPessoa);
                        Controlador.novoRegistro();
                        Functions.contarRegistros();
                    });
                }else{
                    Functions.calert("info","Erro ao realizar cadastro.");
                }
            }
        },
        /**
         * Exclusão do dado no storage
         */
        excluir : function(id){
            var storageFactory = new LocalStorageFactory();
                if(storageFactory.excluir(id)){
                Functions.calert("success","Registro removido com sucesso!", function(){
                    Functions.removeDomElemment(id);
                    Functions.limparCampos();
                    Functions.contarRegistros();
                });
            }else{
                Functions.calert("info","Erro ao realizar cadastro.");
            }
        },
        /**
         * Editar regitros selecionado por id.
         */
        editar : function(id){
            var storageFactory = new LocalStorageFactory();
            Functions.preencherCamposParaEdicao(storageFactory.consultarPorId(id));
            form.scrollTop = -100;
            nome.focus();
        },
        /**
         * Habilita o formulário para cadastro de um novo registro.
         */
        novoRegistro : function(){
            Functions.limparCampos();
        },
        /**
         * Lista os itens cadastrados no load da página
         */
        listarItens : function(){
            var storageFactory = new LocalStorageFactory();
            var items = storageFactory.listarTodos();
            var key;
            var storage;
            if(Object.keys(items).length > 0){
                for(key in items){
                    Functions.addrow(JSON.parse(items[key]));
                }
            }
            Functions.contarRegistros();
        }
    };
}(Controlador));
