/**
 * Header
 */
if(typeof(Storage) === "undefined") {
    alert("Atenção!\n\nNão há suporte para o armazenamento em seu navegador atual.\nO que for feito, não será persistido.");
}
/**
 * Definição dos componentes
 */
var id = document.getElementById("identificador");
var nome = document.getElementById("nome");
var endereco = document.getElementById("endereco");
var telefone = document.getElementById("telefone");
var cpf = document.getElementById("cpf");
var cnpj = document.getElementById("cnpj");
var inscricaoEstadual = document.getElementById("inscricaoEstadual");
var pessoafisica = document.getElementById("pessoafisica");
var pessoajuridica = document.getElementById("Pessoajuridica");
var divCnpj = document.getElementById("cnpjdiv");
var divInscEstadual = document.getElementById("iediv");
var divCpf = document.getElementById("cpfdiv");
var listagem = document.getElementById("tblistagem");
var tbFoot = document.getElementById("tbfoot");
var tableList = document.getElementById("tableList");
