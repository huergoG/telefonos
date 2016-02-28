(function() {

    'use strict';
	
	angular
		.module('demoApp',['telefono'])
		.controller('telefonoController',telefonoController);

		function telefonoController($scope){
			var tel = this;

			tel.telefono = 1123456789;
		};
	
})();