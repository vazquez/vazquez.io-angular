'use strict';

angular.module('vazquezio')
  .controller('MainCtrl', function ($scope) {
    $scope.projects = [
        {"id": 0, "name": "Mozilla Webmaker", "desc": "A landing page that focuses on improving conversion and enhacing the voice of Mozilla.", "img": "webmaker.jpg"},
        {"id": 1, "name": "Mozilla Webmaker Android App", "desc": "A mobile app with a goal of allowing people to easily create digital and publishable content.", "img": "webmaker-app.jpg"},
        {"id": 2, "name": "FreshBooks iOS 7 App", "desc": "Helping small businesses around the world invoice and track time right from their iPhone.", "img": "freshbooks.png"}
        // {"id": 3, "name": "500px Uploader", "desc": "This photo uploader helps place the most beautiful photography in the world up on the web.", "img": "500.jpg"}
    ];
  });
