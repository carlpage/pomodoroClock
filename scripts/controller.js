var myApp = angular.module('myApp', []);

myApp.controller('pomodoroController', function($interval) {
  console.log('in the controller');

  var vm = this;

  vm.break = 5;
  vm.session = 25;

  vm.incrementTimer = function() {
    vm.timer -= 1;
  }

  vm.breakChange = function(num) {

  } // end breakChange

  vm.sessionChange = function(num) {

  } // end sessionChange

  vm.toggleTimer = function() {

  } // end toggleTimer

}); // end controller
