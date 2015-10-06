var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
    $http({
        method: 'GET',
        url: '/memes/json'
    }).then(function (response){
        var i = 0;
        // get the default captions for each image
        while (i < response.data.length) {
            $scope["Message" + i] = response.data[i].message;
            i++;
        }
    })
}]);
