function smallestCommons(arr) {
  var num1 = arr[0];
  var num2 = arr[1];
  var newArr1 = [num1];
  var newArr2 = [num2];
  var bool = true;
  var nextNum1 = num1;
  var nextNum2 = num2;
  var lcm;

  while (bool === true) {
    nextNum1 = nextNum1 + num1;
    nextNum2 = nextNum2 + num2;
    newArr1.push(nextNum1);
    newArr2.push(nextNum2);
    console.log(nextNum2);
    for (var i = 0; i < newArr1.length; i++) {
      if(newArr1.indexOf(newArr2[i]) !== -1) {
        lcm = newArr1[i];
        bool = false;
      }
    } // end for loop
  } // end while loop
  console.log(lcm);
  return lcm;
} // end function

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
