/**
 * perform routing according to state
 */
angular.module('myApp', ['ui.router', 'firebase'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'template/home.html',
                controller: 'team_ctrl'
            })
            .state('player', {
                url: '/player?portfolioId',
                templateUrl: 'template/player.html',
                controller: function($scope, $stateParams) {
                    $scope.portfolioId = $stateParams.portfolioId;
                }
            })
    });
