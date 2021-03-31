sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("uitable.controller.View1", {
			onInit: function () {
				var a=10;
				sap.ui.getCore().getConfiguration().setLanguage("hi");
				// var i18nModel = new sap.ui.model.resource.ResourceModel({

				// 	bundleUrl : "./i18n/i18n_hi.properties",
					
				// 	bundleLocale : "hi"
					
				// 	});
				
			},
			onClick:function(oevent){
				debugger;
			var a=	oevent.getSource().getRows();
			}
		});
	});
