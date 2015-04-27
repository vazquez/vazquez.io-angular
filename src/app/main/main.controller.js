'use strict';

angular.module('vazquezio')
  .controller('MainCtrl', function ($scope) {
    $scope.projects = [
        {"id": 0, "name": "Mozilla Webmaker", "desc": "A landing page that focuses on improving conversion and enhacing the voice of Mozilla.", "img": "webmaker.jpg"},
        {"id": 1, "name": "Mozilla Webmaker Android App", "desc": "A mobile app with a goal of allowing people to easily create digital and publishable content.", "img": "webmaker-app.jpg"},
        {"id": 2, "name": "FreshBooks iOS 7 App", "desc": "Helping small businesses around the world invoice and track time right from their iPhone.", "img": "freshbooks.png"}
        // {"id": 3, "name": "500px Uploader", "desc": "This photo uploader helps place the most beautiful photography in the world up on the web.", "img": "500.jpg"}
    ];
    $scope.intro = "Ever since I was yea high, I've been interested in how people think. Haven't you ever wondered? I'm sure you have. The feeling you get when someone finally gets you. That's what I wanted to do as a kid. Growing up around a family of musicians and artists, I decided to pursue meaning in art. But I took a slight detour. Art does not lie in the canvas. Well, of course it does, but it doesn't end there. Art lies in the experiences you and I share with the world. Our society is art. \n\ And the web is art too. So here I am, part-time musician and full-time experience maker. I've always thought of my life as a blank page. I am fascinated about code that can bring out the love in someone. I have been all around the world searching to make meaning. Time does not matter, the pursuit of excellence does. The web is my canvas, the code is my brush, and the passion well, you can never replace that.";
  });
