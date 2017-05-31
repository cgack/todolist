(function () {
    angular.module("todolist")
        .controller("TodoController", TodoController);

    TodoController.$inject = ["$scope", "todoService"];
    function TodoController($scope, todoService) {
        $scope.today = new Date();
        this.$onInit = function () {
            todoService.getAll().then(function (response) {
                
                $scope.todos = response.data;
                for (var i = 0; i < $scope.todos.length; i++) {
                    $scope.todos[i].dueDate = new Date($scope.todos[i].dueDate);
                }
            });
        }
        
        $scope.createTodo = function() {
            var todo = $scope.newTodo;
            todoService.add(todo).then(function(response) {
                response.data.dueDate = new Date(response.data.dueDate);
                $scope.todos.push(response.data);
            });
            $scope.newTodo = null;
        }

        $scope.updateTodo = function(todo) {
            todoService.update(todo);
        }

        $scope.markComplete = function(todo) {
            todo.complete = true;
            todoService.update(todo);
        }

        $scope.removeTodo= function(todo) {
            todoService.remove(todo).then(function() {
                for (var i = 0; i < $scope.todos.length; i++) {
                    if ($scope.todos[i].id == todo) {
                        $scope.todos.splice(i, 1);
                        break;
                    }
                }
            });
        }

    }
})();