/**
 * Funções gerais
 */
(function (){
	"use strict";
    Functions = {
        /**
         * Habilita campos para pessoa fisica
         */
        checkPessoaFisica : function(act){
            divCnpj.classList.add("hidden");
            divInscEstadual.classList.add("hidden");
            divCpf.classList.remove("hidden");
            pessoafisica.checked = true;
            if(typeof act === "undefined"){
                this.limparCampos();
            }
        },
        /**
         * Habilita campos para pessoa juridica
         */
        checkPessoaJuridica : function(act){
            divCnpj.classList.remove("hidden");
            divInscEstadual.classList.remove("hidden");
            divCpf.classList.add("hidden");
            pessoajuridica.checked = true;
            if(typeof act === "undefined"){
                this.limparCampos();
            }
        },
        /**
         * Limpa todos os inputs da tela e coloca o focus no campo id.
         */
        limparCampos : function(){
            var elements = document.getElementsByTagName("input");
            for (var i=0; i < elements.length; i++) {
                if (elements[i].type == "text") {
                    elements[i].value = "";
                }
            }
            this.modoEdicao(false);
            id.focus();
        },
        /**
         * Validação dos campos obrigatórios
         */
        validar : function(){
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
                this.calert('error', ret);
                return false;
            }
        },
        /**
         * Cria mensagens de alerta ao usuário dinamicamente.
         */
        calert : function(tipo, message, callback){
            this.removeDomElemment("output");
            clearTimeout(this.defineTime);
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
            this.defineTime();
            /*
            *  Executa o callback caso tenha sido chamado.
            */
            if(typeof callback === "function"){
                callback();
            }
        },
        /**
         * Temporisador
         */
        defineTime : function(){
            return setTimeout(function(){
                Functions.removeDomElemment("output");
            }, 10000); /*10 sec.*/
        },
        /**
         * Remove um elemento por id se ele existir no DOM
         */
        removeDomElemment : function(el, callback){
            if (document.contains(document.getElementById(el))) {
                document.getElementById(el).remove();
            }
            /*
             *  Executa o callback caso tenha sido chamado.
             */
            if(typeof callback === "function"){
                callback();
            }
        },
        /**
         * Adiciona linha
         */
         addrow : function(obj, callback){
             this.removeDomElemment("message-empty");

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
             td.innerHTML = '<button type="button" class="bt-editar" name="button" title="Editar" alt="Editar" onclick="Controlador.editar(\''+obj.id+'\');">&#x261D;</button> <button type="button" name="button" title="Excluir" alt="Excluir" class="bt-excluir" onclick="Controlador.excluir(\''+obj.id+'\');">&#x2672;</button>';
             /*
              *  Executa o callback caso tenha sido chamado.
              */
             if(typeof callback === "function"){
                 callback();
             }
         },
        /**
         * Preenche o formulário para edição do registro
         */
        preencherCamposParaEdicao : function(obj){
            this.modoEdicao(true);
            id.value = obj.id;
            nome.value = obj.nome;
            endereco.value = obj.endereco;
            telefone.value = obj.telefone;
            if(typeof obj.cpf !== 'undefined'){
                cpf.value = obj.cpf;
                this.checkPessoaFisica(false);
            }else{
                cnpj.value =  obj.cnpj;
                inscricaoEstadual.value = obj.inscricaoEstadual;
                this.checkPessoaJuridica(false);
            }
        },
        /**
         * Prepara o forulário para edição
         */
        modoEdicao : function(editar){
            if(editar){
                id.setAttribute("readonly", "true");
            }else{
                id.removeAttribute("readonly");
            }
        },
        /**
         * Conta a quantidade de registros na tabela
         */
        contarRegistros : function(){
            var numRegistros = document.querySelectorAll("tbody tr[id]").length;
            if(numRegistros <= 0){
                listagem.innerHTML = '<tr><td colspan="6" id="message-empty">N&atilde;o h&aacute; dados cadastrados em seu navegador at&eacute; o momento</td></tr>';
            }
            tbFoot.innerHTML = 'Total de <b>'+numRegistros+'</b> registro(s)';
            return numRegistros;
        },
        /**
         * Animação usando temporisador
         */
        timers : {
             timerID : 0,
             timers : [],
             add : function(fn){
                 this.timers.push(fn);
             },
             start : function(){
                 if(this.timerID){
                     return;
                 }
                 (function runNext(){
                     if(Functions.timers.timers.length > 0 ){
                         for(var i = 0; i < Functions.timers.timers.length; i++){
                             if(Functions.timers.timers[i]() === false){
                                 Functions.timers.timers.splice(i, 1);
                                 i--;
                             }
                         }
                         Functions.timers.timerID = setTimeout(runNext, 100);
                     }
                 })();
             },
             stop : function(){
                 clearTimeout(this.timerID);
                 this.timerID = 0;
            }
        }
    };
}(Functions));
