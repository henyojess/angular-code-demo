function DemoController($scope){
    $scope.tasks = [
        {description: 'first entry',completed:false},
        {description: 'another entry',completed:false},
        {description: 'some other entry',completed:false},
        {description: 'last entry',completed:false}
    ];

    $scope.addTask = function(){
        var newTask = $scope.task;
        newTask.completed = false;
        $scope.tasks.push(newTask);
        $scope.task = {};
    }

    $scope.remaining = function(){
        var counter = 0;
        angular.forEach($scope.tasks,function(task){
            if(!task.completed) counter ++;
        });
        return counter;
    }

    $scope.clearCompleted = function(){
        var oldTasks = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(oldTasks,function(task){
            if(!task.completed) $scope.tasks.push(task);
        });
    }
}