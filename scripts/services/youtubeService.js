var youtubeApp = angular.module('youtubeApp');
var apiToken = ' AIzaSyD9Iis-5U8f62a5bJztVAWCkNBBzC1V--w';

youtubeApp.service('youtubeService', function ($http) {
    this.search = function (query) {
        return $http({ method: 'GET', url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + apiToken }).then(function (res) {
            console.log(res.data.items);
            return res.data.items;
        });
    };
});