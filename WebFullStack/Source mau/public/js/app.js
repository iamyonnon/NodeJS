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
    $scope.formData = [];
    svTodo.laydulieu().then(function(response){
        $scope.todos = response.data;

        console.log($scope.todos);
       
    });

    $scope.themdulieu = () => {
        var todo = {
            text: $scope.formData.text,
            isDone: true
        }

        // svTodo.themdulieu(todo).then(() => {

        // })
    }
}]);
