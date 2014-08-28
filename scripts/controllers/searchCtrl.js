var youtubeApp = angular.module('youtubeApp');

youtubeApp.controller('searchCtrl', function($scope, youtubeService) {
    $scope.search = function() {
        youtubeService.search($scope.query).then(function(res) {
            $scope.results = res;
        });
    };
});