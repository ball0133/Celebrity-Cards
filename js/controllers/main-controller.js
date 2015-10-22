angular.module('MyApp')

.controller('MainCtrl', function($scope, $http, Items) {
    
    //FETCH json data
    
    $scope.allData; //all data fetched
    
//    $http({method:'GET', url:'data/items.json'})
    Items.getAll()
    .then(function(respsonse){
        //success
        $scope.allData = respsonse.data; //contents of json file
    }, function(response){
       //error 
    });
});