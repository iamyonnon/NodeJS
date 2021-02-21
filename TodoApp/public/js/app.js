// angular
var app = angular.module("app.todos", ["xeditable"]);

app.factory("svTodos",["$http", function($http){

    return{
        laydulieu: function (){
            return $http.get("/api/laydulieu");
        },
        themdulieu: function(todoData){
            return $http.post("/api/themdulieu", todoData);
        },
        xoadulieu : (todoData) => {
            return $http.delete("/api/xoadulieu" + id);
        }
       
    }
}]);

app.controller("todoController", ['$scope', 'svTodos', function ($scope, svTodos) {

    $scope.appName = "Todo Dashboard";
    $scope.formData = {};
    $scope.loading = true;

    $scope.todos = [];

    //load data from api
    svTodos.laydulieu().then(function(response){
        $scope.todos = response.data;
        $scope.loading = false;
    });
    

    $scope.themdulieu = function () {


        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        //console.log(todo);

       svTodos.themdulieu(todo).then(function(response){
           $scope.todos = response.data;
           $scope.formData.text = "";
       })


       //Xoa du lieu
       svTodos.xoadulieu(todo) = () => {
        svTodos.xoadulieu(todo._id).then((response) => {
            $scope.todos = response.data;
        })
       }
    }


}]);

