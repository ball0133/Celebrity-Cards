angular.module('MyApp')


.controller('DetailsCtrl', function($scope, $routeParams, Items) {  
    $scope.itemID = $routeParams.pageNum;
    $scope.item = {}
    
    //    $http({method:'GET', url:'data/items.json'})
    Items.getOne($scope.itemID)
    .then(function(respsonse){
        //success
        var items = respsonse.data.items; //contents of json file
        items.forEach(function( i ){ // i represents one item in array
            if( i.id == $scope.itemID){
                $scope.item = i;
            }
        });
        
    }, function(response){
       //error 
    });
});