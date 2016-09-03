/**
 *controller for fecth particular team data
 *
 */
angular.module('myApp').controller('player_ctrl', demo1);
/*
* Purpose : function to set object of firebase
*/
function demo1($scope, $firebaseObject, teamService) {
    var teamName = teamService.getTeam();
    var fbref = firebase.database().ref(teamName);
    var fbObject = $firebaseObject(fbref);

    fbObject.$loaded().then(function(obj) {
        //  console.log(JSON.stringify(obj));
        $scope.data = obj;
    });

};
