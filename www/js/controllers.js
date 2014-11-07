angular.module('happy.controllers', [])

.controller('MoodCtrl', function($scope) {

	var init = function () {
	   var mySwiper = new Swiper('.swiper-container',{
	    //Your options here:
	    mode:'vertical',
	    loop: true
	  }); 
	};//end of function

	// init the view
	init();
})//end of Mood Controller


.controller('AnalyticsCtrl', function($scope, $ionicModal, $timeout){

	

	// Create the settings modal that we will use later
  $ionicModal.fromTemplateUrl('templates/settings.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeSettings = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.settings = function() {
    $scope.modal.show();
  };

})//end of Analytics Controller


/////////////////////////////////////////////////////////////////////////////////////////////////////

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})


//Side menu js controller 
  function ContentController($scope, $ionicSideMenuDelegate) {
      $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
      };//end of toggle eval
  }//end of function

