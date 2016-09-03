/**
* FileName:home.js
* CreatedBy: raju
* Date :30-08-2016
*
*/

/**
 * controller for geting into all the teams
 */
angular.module('myApp').controller('team_ctrl', demo);

/*
* Purpose : function to set object of firebase
*/
function demo($scope, $firebaseObject, teamService) {
    //get firebase object of teaminfo
    var fbref = firebase.database().ref("tean_info/");
    var fbObject = $firebaseObject(fbref);
    fbObject.$loaded().then(function(obj) {
        $scope.data = obj;
    });
    //set tha name of team in response to onclick
    $scope.changeTeam = function(teamName) {
        teamService.setTeam(teamName);
    };
};
