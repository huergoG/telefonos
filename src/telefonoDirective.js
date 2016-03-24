(function() {

    'use strict';
	
	angular
		.module('telefonoDirective',['ui.mask'])
		.directive('telefono',telefono);

		function telefono(){
			return {
		     	//template : 'ui-mask="{{mask}}" ui-mask-placeholder ui-mask-placeholder-char="{{mask_placeholder}}"',
			  	restrict: 'A',
		      	transclude: false,
		      	require: 'ngModel',
		      	replace:false,
		      	scope:{
		      	},
		      	compile: function ($scope,$element,$attrs){
		      			//$element.$attr;
		      			console.log("on compile",$scope,$element);

		      	},
		      	controller: function($scope, $element, $attrs, $injector){
				// declare some default value
					console.log("controller",$element,$attrs);
					$scope.mask = "(99) 9999-9999";
					$scope.mask_placeholder = "";
				
			  	},
		      	link: function postLink(scope, element, attrs) {
		      		console.log("link",element);
		     	 }
	    	};
		}
})();