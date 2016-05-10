/**
* Principal
*/
if(typeof(Storage) !== "undefined") {

    var id = document.getElementById("identificador");
    var nome = document.getElementById("nome");
    var endereco = document.getElementById("endereco");
    var telefone = document.getElementById("telefone");
    var cpf = document.getElementById("cpf");
    var cnpj = document.getElementById("cnpj");
    var pessoafisica = document.getElementById("pessoafisica");
    var Pessoajuridica = document.getElementById("Pessoajuridica");

    /**
    * [function description]
    * @return {[type]} [description]
    */
    var salvar = function(){
        var dao;
        var objPessoa;
        if(pessoafisica.checked){
            objPessoa = new Cliente();
            dao = new ClienteBusiness();
            objPessoa.setCpf(cpf.value);
        }else{
            objPessoa = new PessoaJuridica();
            dao = new PessoaJuridicaBusiness();
            objPessoa.setCnpj(cnpj.value);
        }
        objPessoa.setId(id.value);
        objPessoa.setNome(nome.value);
        objPessoa.setEndereco(endereco.value);

        var objTelefone = new Telefone();
        objTelefone.setNumero(telefone.value);
        objPessoa.setTelefone(objTelefone.getNumero());

        dao.salvar(objPessoa);
    };
} else {
    alert("Não há suporte para o armazenamento no navegador.");
}
