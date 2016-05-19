/**
 * Header, escopo global
 */
(typeof(Storage) === "undefined") &&
    alert("Atenção!\n\nNão há suporte para o armazenamento em seu navegador atual.\nO que for feito, não será persistido.");  // jshint ignore:line
/**
 * Definição dos componentes
 */
var Componente = {
    id : document.getElementById("identificador"),
    nome : document.getElementById("nome"),
    endereco : document.getElementById("endereco"),
    telefone : document.getElementById("telefone"),
    cpf : document.getElementById("cpf"),
    cnpj : document.getElementById("cnpj"),
    inscricaoEstadual : document.getElementById("inscricaoEstadual"),
    pessoafisica : document.getElementById("pessoafisica"),
    pessoajuridica : document.getElementById("pessoajuridica"),
    divCnpj : document.getElementById("cnpjdiv"),
    divInscEstadual : document.getElementById("iediv"),
    divCpf : document.getElementById("cpfdiv"),
    listagem : document.getElementById("tblistagem"),
    tbFoot : document.getElementById("tbfoot"),
    tableList : document.getElementById("tableList"),
    regCount : document.getElementById("regCount"),
    box : document.getElementById("box"),
    form : document.getElementById("form"),
    x : 0,
    y : 20,
};
/**
 * Objetos
 */
var Obj = {
    Controlador : {},
    Functions : {},
    Pessoa : function Pessoa(){},
    PessoaFisica : function PessoaFisica(){},
    PessoaJuridica : function PessoaJuridica(){},
    Telefone : function Telefone(){},
    LocalStorageFactory : function LocalStorageFactory(){},
};
