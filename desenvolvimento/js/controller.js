/**
* Controlador Principal
*/
/**
* Persistencia dos dados no storage
*/
var salvar = function(){
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
    // Telefone
    var objTelefone = new Telefone();
    objTelefone.setNumero(telefone.value);
    objPessoa.setTelefone(objTelefone.getNumero());
    // Salva
    storageFactory.salvar(objPessoa);
};
var excluir = function(id){
    var storageFactory = new LocalStorageFactory();
    storageFactory.excluir(id);
};
/**
 * Lista os itens cadastrados no load da página
 */
var listarItens = function(){
    var storageFactory = new LocalStorageFactory();
    var items = storageFactory.listarTodos();
    var key;
    var storage;
    var tr, td;
    var count = 0;
    if(Object.keys(items).length > 0){
        for(key in items){
            storage = JSON.parse(items[key]);
            tr = listagem.insertRow(listagem.rows.length);
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = storage.id;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = storage.nome;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = storage.endereco;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = storage.telefone;
            td = tr.insertCell(tr.cells.length);
            if(typeof storage.cpf !== 'undefined'){
                td.innerHTML = "CPF: "+storage.cpf;
            }else{
                td.innerHTML = "CNPJ: "+ storage.cnpj +' IE.:'+ storage.inscricaoEstadual;
            }
            td.setAttribute("align", "center");
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = '<button type="button" class="bt-editar" name="button" title="Editar" alt="Editar" onclick="editar(\`'+storage.id+'\`);">&#x261D;</button> <button type="button" name="button" title="Excluir" alt="Excluir" class="bt-excluir" onclick="excluir(\`'+storage.id+'\`);">&#x2672;</button>';
            count++;
        }
        tbFoot.innerHTML = "Total de <b>"+count+"</b> registro(s)";
    }else{
        listagem.innerHTML = '<tr><td colspan="6">N&atilde;o h&aacute; dados cadastrados at&eacute; o momento</td></tr>';
    }
};
