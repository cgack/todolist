(function () {
    angular.module("todolist")
        .factory("todoService", todoService);

    todoService.$inject = ["$http"];

    function todoService($http) {
        return {
            apiBase: "http://localhost:61874/api/",
            getAll: function () {
                return $http.get(this.apiBase + "todo");
            },
            get: function(id) {
                return $http.get(this.apiBase + "todo/" + id);
            },
            add: function(todo) {
                return $http.post(this.apiBase + "todo", todo);
            },
            update: function(todo) {
                return $http.put(this.apiBase + "todo/" + todo.id, todo);
            },
            remove: function(id) {
                return $http.delete(this.apiBase + "todo/" + id);
            }

        }

    }
})();