/*
* purpose directive for download img from firebase
* @ param {String} -data
*/
angular.module('myApp').directive('imgUrl', function() {
    return {
        restrict: 'E',
        scope: {
            data : '='
        },
        templateUrl: 'template/img.html',
        controller: ['$scope', '$http', function($scope, $http) {
            $scope.getUrl = function() {
                var storage = firebase.storage();
                var storageRef = storage.ref($scope.data);
                storageRef.getDownloadURL().then(function(url) {
                    // Get the download URL for 'images/stars.jpg'
                   document.getElementById($scope.data).src = url;
                  //  console.log($scope.data);
                });
            }
        }],
        link: function($scope, element, attribute) {
            $scope.getUrl();
        }
    }
});
