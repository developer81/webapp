sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], function (Controller, MessageToast, JSONModel) {
    "use strict";
    // redefinir o controler 
    // vamos fazer uma extensão
    return Controller.extend("fiorinet.template.controller.Worklist", {

        // Eventos 

        // Esses eventos serão chamados uma vez, toda vez que o controller for carregado
        // onInit seria como o Initilizatizion
        onInit: function () {

            // definindo objeto de dados
            var oMsg = {
                MsgInicial: "Seja bem vindo!"
            }
            //Criação de modelo json
            var oMsgModel = new JSONModel();

            //atribui objeto de dados ao modelo
            oMsgModel.setData(oMsg);

            // Data Binding
            // Atribui o modelo à view
            this.getView().setModel(oMsgModel, "messages");


            //cria um novo modelo ja definindo o objeto
            var oPessoaModel = new JSONModel({
                nome: "Steve",
                sobrenome: "Jobs",
                habilitado: true,
                endereco: {
                    rua: "Avenida Victor Hugo 156",
                    cidade: "Paris",
                    cep: "12345",
                    pais: "França"
                }
            });
            // Atribui o modelo à view 
            this.getView().setModel(oPessoaModel, "pessoa");

            // cria array (lista de registros)
            var oFuncionarios = {
                Funcionarios: [
                    {
                        nome: "Steve",
                        sobrenome: "Jobs",
                        habilitado: true,
                    },
                    {
                        nome: "Burt",
                        sobrenome: "Preynolds",
                        habilitado: false,
                    },
                    {
                        nome: "Mike",
                        sobrenome: "Taison",
                        habilitado: false,
                    },
                    {
                        nome: "Tim",
                        sobrenome: "Burton",
                        habilitado: true,
                    },

                ]
            };

            //cria um novo modelo ja com objeto definido
            var oFunModel = new JSONModel(oFuncionarios);
            this.getView().setModel(oFunModel, "empregados")
        },

        onFuncionarioSelected: function (oEvent) {
            var oSelectedItem = oEvent.getSource();
            //se não for modelo default, informar nome do modelo. 
            //Ex:getBindingContext("pessoa");
            var oContext = oSelectedItem.getBindingContext("empregados");
            var sPath = oContext.getPath();
            var oProductDetailPanel = this.byId("detalhePanel");
            oProductDetailPanel.bindElement({
                path: sPath,
                // se não for modelo default, preencher nome do modelo
                model: "empregados"
                //opcional. se tiver associação com outra entidade, pode ser informado 
                //propriedade de navegação
                //expand: 'endereco'
            });
        },

        // onBeforeRendering seria como o Module PBO 
        // uso comum: buscar dados do serviço OData no BackEnd
        onBeforeRendering: function () {

        },

        // onAfterRendering seria como o Module PAI
        // uso comum: validar dados e alterar UI de acordo com Dados
        onAfterRendering: function () {

        },

        // AT Exit Screen
        // uso comum: limpar variaveis ao sair dessa View
        onExit: function () {

        },


        // Implementação Metodos Customizados - Inicio
        onClique: function () {
            // Mostrar alerta usando Javascript nativo
            //alert("Press Clique pelo Controller");

            // Ao incluir o paramentro de entrada "sap/m/MessageToast"
            // é alterado a forma de exibição da chamada do mensagem ao clicar no botão
            //MessageToast.show("Hello World!");

            //coletar o modelo que está na tela 
            var oModel = this.getView().getModel("messages");

            //coletar os dados do modelo
            var oDados = oModel.getData();

            MessageToast.show(oDados.MsgInicial);

        },
        onShowDetails: function (oEvent) {

            //this.getOwnerComponent().getRouter().navTo("detailPage");
            var oSelectedItem = oEvent.getSource();
            var oContext = oSelectedItem.getBindingContext();
            var sPath = oContext.getPath();
            var obj = oContext.getObject();

            this.getOwnerComponent().getRouter().navTo("detailPage", {
                idPath: obj.ClienteID
            });

        }

        // Implementação Metodos Customizados - Fim

    });
});