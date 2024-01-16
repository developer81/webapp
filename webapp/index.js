// Isso seria uma função como a SE37
sap.ui.define([

    // Nessa parte define os paramentros de entrada que são os componentes que deseja inicializar
    // Aqui é uma declaração o XMLView
    "sap/ui/core/mvc/XMLView",
    // A declaração do controle abaixo é para executar o compoment não mais pela View
    "sap/ui/core/ComponentContainer"

    // E abaixo do Function são os eventos propriamente ditos
    // E aqui é inicializado XMLView
    ], function (XMLView, ComponentContainer) {

    "use strict";
    
    //Como foi declarado o controle "ComponentContainer", o codigo abaixo não é mais necessário
    //e será substiuito pelo código abaixo
    /*
    XMLView.create({
        viewName: "fiorinet.template.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
    */

    new ComponentContainer({
        name : "fiorinet.template",
        settings : {
            id : "template"
        },
        async : true
    }).placeAt("content");
    
});