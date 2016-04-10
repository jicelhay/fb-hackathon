var classModule = angular.module('classModule');

classModule.controller("mediaCtrl", function ($scope, $cordovaCamera,$ionicModal) {


  $scope.albums = [{title: 'Paseo de curso' ,images: [{
    'src' : 'img/ionic.png'
  }, {
    'src' : 'img/ionic.png'
  }, {
    'src' : 'img/ionic.png'
  },{
    'src' : 'img/ionic.png'
  }, {
    'src' : 'img/ionic.png'
  }, {
    'src' : 'img/ionic.png'
  }]}];

    $scope.takePhoto = function () {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
          $scope.imgURI = "data:image/jpeg;base64," + imageData;
      }, function (err) {
          // An error occured. Show a message to the user
      });
    };

    $scope.choosePhoto = function () {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            // An error occured. Show a message to the user
        });
    };


  $scope.showImages = function(index,album) {
    $scope.selectedAlbum = album;
    $scope.activeSlide = index;
    $scope.showModal('modules/class/templates/image-popover.html');
  };

  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      console.log('llegue');
      $scope.modal.show();
    });
  };

  // Close the modal
  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };



});
