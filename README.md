
#### GDG DevFestPH 2013: AngularJS Code Demo ####

--------------------------------------------------------------------------------
#### Getting the Code
  Assuming git is installed:  
  git clone git@github.com:henyojess/angular-code-demo.git

#### Running the Code
  Assuming node.js is installed:
  cd angular-code-demo
  node scripts/web-server.js

#### Stepping through the evolution of the code:

    git checkout -f demo01  
    Code Demo#1: ng-app, ng-init and binding with {{}}
    
    * added script tag to load angular.js  
    * added ng-app directive to <html> opening tag
    * added <p> tag with ng-init directive as well as display of name value

    git checkout -f demo02  
    Code Demo#2:Bi-directional databinding with ng-model
    
    * added an input tag with ng-model to bind the value to the name expression
    
    git checkout -f demo03  
    Code Demo#3:Separating concerns with ng-controller and $scope
    
    * added ng-controller directive to <div> tag
    * removed ng-init from <p> tag
    * added script to load app.js
    * defined DemoController in app.js
    * initialized the name expression in $scope
    
    git checkout -f demo04  
    Code Demo#4:Display a list of tasks
    
    * removed the name definition in $scope
    * defined an array of tasks within the $scope of DemoController
    * replaced div content with <table> markup
    * added ng-repeat directive to <tr> tag
    * added binding to display task description and completed
    
    git checkout -f demo05  
    Code Demo#5: Allow adding of tasks
    
    * added form markup with ng-submit which calls the addTask() function
    * added text input bound to task.description expression
    * added addTask function to the DemoController
    
    git checkout -f demo06  
    Code Demo#6: Allow marking of completed tasks and remaining task display
    
    * added a <p> tag to display remaining task count
    * added a check icon header to the table
    * removed Completed table header
    * added a checkbox bound to task.completed expression in the $scope
    * added an expression that changes the class of a cell based on completed
    * added remaining function to the DemoController
    * added a completed class to the css definition
    
    git checkout -f demo07
    Code Demo#7: Allow task filtering
    * added a text input bound to the filterText expression
    * added a pipe and a filter that uses the value in filterText expression
    
    git checkout -f demo08
    Code Demo#8: Allow mass removal of completed tasks
    * added a button with ng-click directive that calls clearComleted()
    * added a clearComputed function to DemoController
    
    git checkout -f demo09
    Code Demo#9: Allow task deletion
    * added an <a> tag with ng-click to call the deleteTask function
    * added a deleteTask function to DemoController
    
    git checkout -f demo10
    Code Demo#10: Setup the demoApp module
    * declared the demoApp module dependent on ngRoute
    * declared the routing configuration
    * configured ng-app to load the demoApp module
    * added a script tag to load angular-route.js
    
    git checkout -f demo11
    Code Demo#11: Refactored business logic into a service
    * added a factory for Tasks service
    * modified DemoController to make use of the Tasks service
    
    git checkout -f demo12
    Code Demo#12: Implement Multiple View and Multiple Controllers
    * moved table listing to list.html and added a plus icon
    * moved form to form.html and added a cancel button
    * marked <div> tag with ng-view in index.html
    * renamed DemoController to ListController
    
    git checkout -f demo13
    Code Demo#13: Refactor controllers into module
    * transfer ListController definition into demoApp module
    * add CreateController definition to demoApp module
    * move addTask function from ListController to CreateController

