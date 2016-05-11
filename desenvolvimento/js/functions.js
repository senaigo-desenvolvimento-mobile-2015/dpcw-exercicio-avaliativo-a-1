/**
 * Funções gerais
 *
 */
var runTime = null;
/**
 * Habilita campos para pessoa fisica
 */
var checkPessoaFisica = function(limparCampos){
    divCnpj.classList.add("hidden");
    divInscEstadual.classList.add("hidden");
    divCpf.classList.remove("hidden");
    pessoafisica.checked = true;
    if(typeof limparCampos === "undefined"){
        inputClear();
    }
};
/**
 * Habilita campos para pessoa juridica
 */
var checkPessoaJuridica = function(limparCampos){
    divCnpj.classList.remove("hidden");
    divInscEstadual.classList.remove("hidden");
    divCpf.classList.add("hidden");
    pessoajuridica.checked = true;
    if(typeof limparCampos === "undefined"){
        inputClear();
    }
};
/**
 * Limpa todos os inputs da tela e coloca o focus no campo id.
 */
var inputClear = function(){
    var elements = document.getElementsByTagName("input");
    for (var i=0; i < elements.length; i++) {
        if (elements[i].type == "text") {
            elements[i].value = "";
        }
    }
    id.focus();
};
/**
 * Validação dos campos obrigatórios
 */
var validar = function(){
    var elements = document.getElementsByTagName("input");
    var error={};
    /*
     * Percorre todos os inputs do formulário verificando os que estão marcados
     * como required e, caso esteja vazio,
     */
    for (var i=0; i < elements.length; i++) {
        if (elements[i].hasAttribute("required") && elements[i].value === "") {
            error[i] = elements[i].getAttribute("name");
        }
    }
    if(Object.keys(error).length <= 0){
        return true;
    }else{
        var ret = "O(s) campo(s) listado(s) abaixo n&atilde;o pode(m) ser vazio(s):<br>";
        for(var e in error){
            ret += '<p>-&nbsp;'+error[e]+'</p>';
        }
        output('error', ret);
        return false;
    }
 };
/**
 * Cria mensagens de alerta ao usuário dinamicamente.
 */
var output = function(tipo, message, callback){
    removeDomElemment("output");
    clearTimeout(defineTime);
    var div = document.createElement("div");
    div.id = "output";
    div.className = "alert "+tipo;
    var msgDiv = document.createElement("div");
    msgDiv.className = "msg";
    msgDiv.innerHTML = message;
    div.appendChild(msgDiv);
    document.body.appendChild(div);
    /*
     * Tempo da menssagem
     */
    defineTime();
    /*
    *  Executa o callback caso tenha sido chamado.
    */
    if(typeof callback === "function"){
        callback();
    }
};
/**
 * Remove um elemento por id se ele existir no DOM
 */
var removeDomElemment = function(el, callback){
    if (document.contains(document.getElementById(el))) {
        document.getElementById(el).remove();
    }
    /*
     *  Executa o callback caso tenha sido chamado.
     */
    if(typeof callback === "function"){
        callback();
    }
};
/**
 * Temporisador
 */
var defineTime = function(){
    return setTimeout(function(){
        removeDomElemment("output");
    }, 10000); /*10 sec.*/
};
/**
 * Adiciona linha
 */
 var addrow = function(obj, callback){
     removeDomElemment("message-empty");

     tr = listagem.insertRow(listagem.rows.length);
     td = tr.insertCell(tr.cells.length);
     tr.id = obj.id;
     td.innerHTML = obj.id;
     td = tr.insertCell(tr.cells.length);
     td.innerHTML = obj.nome;
     td = tr.insertCell(tr.cells.length);
     td.innerHTML = obj.endereco;
     td = tr.insertCell(tr.cells.length);
     td.innerHTML = obj.telefone;
     td = tr.insertCell(tr.cells.length);
     if(typeof obj.cpf !== 'undefined'){
         td.innerHTML = "CPF: "+obj.cpf;
     }else{
         td.innerHTML = "CNPJ: "+ obj.cnpj +' IE.:'+ obj.inscricaoEstadual;
     }
     td.setAttribute("align", "center");
     td = tr.insertCell(tr.cells.length);
     td.innerHTML = '<button type="button" class="bt-editar" name="button" title="Editar" alt="Editar" onclick="editar(\`'+obj.id+'\`);">&#x261D;</button> <button type="button" name="button" title="Excluir" alt="Excluir" class="bt-excluir" onclick="excluir(\`'+obj.id+'\`);">&#x2672;</button>';
     /*
      *  Executa o callback caso tenha sido chamado.
      */
     if(typeof callback === "function"){
         callback();
     }
 };
 var preencherCamposParaEdicao = function(obj){
    id.value = obj.id;
    nome.value = obj.nome;
    endereco.value = obj.endereco;
    telefone.value = obj.telefone;
    if(typeof obj.cpf !== 'undefined'){
        cpf.value = obj.cpf;
        checkPessoaFisica(false);
    }else{
        cnpj.value =  obj.cnpj;
        inscricaoEstadual.value = obj.inscricaoEstadual;
        checkPessoaJuridica(false);
    }
 };
/**
 * Incrementa o contador
 */
var incrementaContador = function(){
    var p = ++contador;
    tbFoot.innerHTML = 'Total de <b>'+p+'</b> registro(s)';
};
/**
 * Decrementa o contador
 */
var decrementaContador = function(){
    var p = --contador;
    tbFoot.innerHTML = 'Total de <b>'+p+'</b> registro(s)';
};
