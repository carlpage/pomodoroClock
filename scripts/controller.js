

smallestCommons([1,5]);

var myApp = angular.module('myApp', []);

myApp.controller('pomodoroController', function($interval) {
  console.log('in the controller');

  var vm = this;

  vm.break = 5;
  vm.session = 25;
  vm.timer = 25;
  vm.started = false;
  vm.seconds = 0;

  vm.incrementTimer = function() {
    vm.timer -= 1;
  }

  vm.breakChange = function(num) {
    console.log('here');
    num += vm.break;
  } // end breakChange

  vm.sessionChange = function(num) {
    console.log(num);
    console.log('{{{{}}}}');
    num += vm.session;
  } // end sessionChange

  vm.toggleTimer = function() {

  } // end toggleTimer







}); // end controller
