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

			tel.telefono = 1123456789;
		};
	
})();