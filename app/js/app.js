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
}