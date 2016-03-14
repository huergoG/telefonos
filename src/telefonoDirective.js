(function() {

    'use strict';
	
	angular
		.module('telefonoDirective',['ui.mask'])
		.directive('telefono',['$filter',

		function telefono($filter){
			return {
		     	restrict: 'A',
		      	scope:true,
		      	require: 'ngModel',
		      	controller: function($scope, $element, $attrs, $injector){
				// declare some default values
				/*$scope.gridClass = 'userBox';
				$scope.$on('grid-block-select', function(evt,
						targetComponentId, command){
						// check that our instance is the target
						if(targetComponentId === $scope.$id){
						// we can add any number of actions here
					  if(command.setClass){
						// change the button style from default
							$scope.gridClass = 'userBox ' + command.setClass;
						}
						}else{
						  $scope.gridClass = 'userBox';
						}
					});*/
			  	},
		      	link: function postLink(scope, element, attrs,ngModel) {

		      		ngModel.$parsers.unshift(parseTel);
		      		
		      		ngModel.$formatters.unshift(formatTel);
		     	   
		     	   function parseTel(input){
		     	   		console.trace();
		     	   	if (input.length!==undefined){
		     	   		console.log("parsers before",input);
		     	   		
		     	   		console.log(element,attrs);
		     	   		attrs.$set('uiMask', setUiMask(input));
		     	   		attrs.$set('uiMaskPlaceholder', '');
		     	   		console.log("uimask parser",attrs.uiMask,input);
		     	   		return input;
		     	   	}
		     	   }

		     	   function formatTel(input){
		     	 		console.trace();
		     	 		console.log("formatter before",input);
		     	 		input = $filter('tel')(input);
		     	 		console.log("formatter after",input);
		     	 		//ngModel.$setViewValue(input);
		     	 		//ngModel.$render();
		     	 		return input;
		     	 	
		     	   }

		     	   function setUiMask(input){
		     	   		console.trace();
						var aux = $filter('tel')(input);
						console.log("setUiMask",aux);
						var mask = aux.replace(/[0-9]/g,'9');
						console.log("setUiMask",mask);
						return mask;
		     	   }	
		     	}
	    	};
		}
	]);
})();