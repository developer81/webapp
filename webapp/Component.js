sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";
    return UIComponent.extend("fiorinet.template.Component", {


        metadata: {
            /*
            rootView: {
                "viewName" : " fiorinet.template.view.App",
                "type" : "XML",
                "async" : true,
                "id" : "app"
            }
            */
           manifest : "json"
        },

        // Initialization
        init: function () {
            // chama função init da super classe
            UIComponent.prototype.init.apply(this, arguments);

            // cria as views baseado na url/hash
            this.getRouter().initialize();

        },

        // Implementação Customizada do Component // Inicio

        // Implementação Customizada do Component // Fim
    });
}); 