var foodApp = angular.module('foodApp',[]);

foodApp.controller('foodCtrl',function($scope){
	$scope.selectedRow = 0;
	$scope.foodItems = [{
		name:'Noodles',
		price:'10',
		quantity:'1'
	},
	{
		name:'Pasta',
		price:'20',
		quantity:'2'
	},
	{
		name:'Pizza',
		price:'30',
		quantity:'1'
	},
	{
		name:'Chicken tikka',
		price:'100',
		quantity:'1'
	}];
	$scope.setClickedRow = function(index){
		$scope.selectedRow = index;
	}
	
	$scope.$watch('selectedRow', function() {
		console.log('Do Some processing');
	});
});

foodApp.directive('arrowSelector',['$document',function($document){
	return{
		restrict:'A',
		link:function(scope,elem,attrs,ctrl){
			var elemFocus = false;             
			elem.on('mouseenter',function(){
				elemFocus = true;
				console.log(elemFocus);
			});
			elem.on('mouseleave',function(){
				elemFocus = false;
				console.log(elemFocus);
			});
			$document.bind('keydown',function(e){
				if(elemFocus){
					if(e.keyCode == 38){
						console.log(scope.selectedRow);
						if(scope.selectedRow == 0){
							return;
						}
						scope.selectedRow--;
						scope.$apply();
						e.preventDefault();
					}
					if(e.keyCode == 40){
						if(scope.selectedRow == scope.foodItems.length - 1){
							return;
						}
						scope.selectedRow++;
						scope.$apply();
						e.preventDefault();
					}
				}
			});
		}
	};
}]);