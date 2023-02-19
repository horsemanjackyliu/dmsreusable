sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("com.sap.dmsapp1.controller.View1", {
			onInit: function () {
				// OPTIONAL: pass the same settings here, if not added in 'manifest.json' as per previous steps
				// this.getView().byId("sdi-container").setSettings({
				//   "repositoryId": "0f9acd7b-6fca-425c-8c89-ec8f61b373cd",
				//   "objectId": "a8624670009c2626e559cb36",
				//   "forceLoad": false
				// });
			  },
			  onComponentCreated: function(oEvent) {
				this._oDocumentTable = oEvent.getParameter("component");
				// OPTIONAL: set a folder as home folder
				this._oDocumentTable.setHomeFolder("a8624670009c2626e559cb36");
				// OPTIONAL: request a navigation to a repository & folder during runtime
				this._oDocumentTable.requestNavigationAndOpen("0f9acd7b-6fca-425c-8c89-ec8f61b373cd", "a8624670009c2626e559cb36");
			  }
		});
	});
