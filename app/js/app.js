var demoApp = angular.module('demoApp',['ngRoute']);
demoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {templateUrl: 'list.html', controller: 'ListController'});
    $routeProvider.when('/create', {templateUrl: 'form.html', controller: 'CreateController'});
    $routeProvider.otherwise({redirectTo: '/list'});
}]);

demoApp.factory('Tasks',function(){
    var tasks = [
        {description: 'first entry',completed:false},
        {description: 'another entry',completed:false},
        {description: 'some other entry',completed:false},
        {description: 'last entry',completed:false}
    ];
    return {
        list:function(){
            return tasks;
        },
        add:function(task){
            tasks.push(task);
        },
        delete:function(task){
            tasks.splice(tasks.indexOf(task),1);
        },
        remaining:function(){
            var counter = 0;
            angular.forEach(tasks,function(task){
                if(!task.completed) counter ++;
            });
            return counter;
        },
        clearCompleted:function(){
            var oldTasks = tasks;
            tasks = [];
            angular.forEach(oldTasks,function(task){
                if(!task.completed) tasks.push(task);
            });
            return tasks;
        }
    };
});

function DemoController($scope,Tasks) {
    $scope.tasks = Tasks.list()
    $scope.addTask = function(){
        var newTask = $scope.task;
        newTask.completed = false;
        Tasks.add(newTask);
        $scope.task = {};
    }
    $scope.remaining = function(){
        return Tasks.remaining();
    }
    $scope.clearCompleted = function(){
        $scope.tasks = Tasks.clearCompleted();
    }
    $scope.deleteTask = function(task){
        Tasks.delete(task)
    }
}