(function() {

    'use strict';
	
	angular
		.module('demoApp',['telefono','ngMaterial'])
		.config(function($mdThemingProvider) {
  			$mdThemingProvider.theme('default')
    			.primaryPalette('teal');
		})
		.controller('telefonoController',telefonoController);

		function telefonoController($scope){
			var tel = this;

			tel.mask = '(99) 9999-9999';
			tel.mask_placeholder = "";
			tel.telefono = 1123456789;
		};
	
})();