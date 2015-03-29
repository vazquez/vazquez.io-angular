'use strict';

angular.module('vazquezio')
  .controller('MainCtrl', function ($scope) {
    $scope.projects = [
        {"id": 0, "name": "Mozilla Webmaker", "desc": "A landing page that focuses on improving conversion and enhacing the voice of Mozilla.", "img": "webmaker.jpg"},
        {"id": 1, "name": "Mozilla Webmaker App", "desc": "A mobile app with a goal of allowing people to easily create digital and publishable content", "img": "webmaker-app.jpg"},
        {"id": 2, "name": "500px Uploader", "desc": "Uploading photos should be easy. This one does the trick.", "img": "500.jpg"}
    ];
  });
