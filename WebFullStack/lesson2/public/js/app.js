// angular
var app = angular.module("app.todos", []);

app.factory("svTodo",["$http", function($http){

    return{
        laydulieu: function (){
            return $http.get("/api/laydulieu");
        },
      
    }
}]);

app.controller("todoController", ['$scope', 'svTodo', function ($scope, svTodo) {
   

    $scope.todos = [];

    svTodo.laydulieu().then(function(response){
        $scope.todos = response.data[0];

        console.log($scope.todos);
       
    });
    


}]);
