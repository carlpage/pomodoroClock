angular.module('myApp', []);

angular.module('myApp').controller('pomodoroController', pomodoroController);

pomodoroController.$inject = ['$interval'];

function pomodoroController($interval) {
  console.log('in the controller');

  var vm = this;

  vm.break = 5;
  vm.session = 25;
  vm.sessionName = 'Session';
  vm.timeLeft = vm.session;
  vm.currentTotal;

  var runTimer = false;
  var secs = 60 * vm.timeLeft;
  vm.originalTime = vm.session;

  function secondsToHms(d) {
    console.log(d);
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return (
      (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
    );
  } // end secondsToHms
 
  vm.breakChange = function(time) {
    console.log('here');
    if (!runTimer) {
      vm.break += time;
      if (vm.break < 1) {
        vm.break = 1;
      }
      if (vm.sessionName === 'Break') {
        vm.timeLeft = vm.break;
        vm.originalTime = vm.break;
        secs = 60 * vm.break;
      }
    }
  }; // end breakChange

  vm.sessionChange = function(time) {
    console.log(time);
    console.log(runTimer);
    if (!runTimer) {
      console.log(vm.sessionName);
      if (vm.sessionName === 'Session') {
        vm.session += time;
        if (vm.session < 1) {
          vm.session = 1;
        }
        vm.timeLeft = vm.session;
        vm.originalTime = vm.session;
        secs = 60 * vm.session;
      }
    }
  }; // end sessionChange

  vm.toggleTimer = function() {
    console.log('in toggleTimer');
    if (!runTimer) {
      if (vm.currentName === 'Session') {
        vm.currentLength = vm.session;
      } else {
        vm.currentLength = vm.break;
      }

      updateTimer();
      runTimer = $interval(updateTimer, 1000);
    } else {
      $interval.cancel(runTimer);
      runTimer = false;
    }
  }; // end toggleTimer

  function updateTimer() {
    secs -= 1;
    if (secs < 0) {
      // audio
      var ogg = 'https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg';
      var audio = new Audio(ogg);
      audio.play();

      if (vm.sessionName === 'Break') {
        vm.sessionName = 'Session';
        vm.currentLength = vm.session;
        vm.timeLeft = 60 * vm.session;
        vm.originalTime = vm.session;
        secs = 60 * vm.session;
      } else {
        vm.sessionName = 'Break';
        vm.currentLength = vm.break;
        vm.timeLeft = 60 * vm.break;
        vm.originalTime = vm.break;
        secs = 60 * vm.break;
      }
    } else {
      vm.timeLeft = secondsToHms(secs);
      var denom = 60 * vm.originalTime;
      var perc = Math.abs((secs/denom) * 100 - 100);
    }
  } // end updateTimer

} // end pomodoroController
