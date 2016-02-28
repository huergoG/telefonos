(function() {

    'use strict';
	
	angular
		.module('telefonoDirective',['ui-mask'])
		.directive('telefono',telefono);

		function telefono(){
			return {
		     	template : '<div  ng-class="gridClass" ng-transclude ></div>',
			  	restrict: 'A',
		      	transclude: true,
		      	replace:true,
		      	scope:true,
		      	controller: function($scope, $element, $attrs, $injector){
				// declare some default values
				$scope.gridClass = 'userBox';
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
					});
			  	},
		      	link: function postLink(scope, element, attrs) {
		     	 }
	    	};
		}
})();