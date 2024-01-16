sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"

], function (Controller, History) {
    "use strict";
    return Controller.extend("fiorinet.template.controller.Object", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detailPage").attachPatternMatched(this._onObjectMatched
                , this);
        },

        _onObjectMatched: function (oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            var sPath = oArgs.idPath;
            this.getView().bindElement({
                path: "/ClienteSet('" + sPath + "')",
                expand: 'vendas',
                events: {
                    change: this._onBindingChange.bind(this)
                }
            });
        },

        _onBindingChange: function (oEvent) {
            // No data for the binding
            if (!this.getView().getBindingContext()) {
                this.getRouter().getTargets().display("notFound");
            }
        },


        onNavBack: function (oEvent) {
            var oHistory, sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getOwnerComponent().getRouter().navTo("appHome", {}, true);
            }
        }
    });
});