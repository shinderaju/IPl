angular.module('myApp').service('teamService', teams);
/*
* perpose : set and get team name
* @ param {String} -teamName
* @ return{String} -teamName
*/
function teams() {
    var team = {};
    return {
        setTeam: function(teamName) {
            var team = teamName;
            this.team = team.replace(/\s/g, '');
            //team = teamName;
        },
        getTeam: function() {
            return this.team;
        }
    }
};
