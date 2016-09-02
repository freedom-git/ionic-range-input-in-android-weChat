'use strict';

var app = angular.module('app', ['ionic', 'z-range']);
app.controller('IndexCtrl', function ($scope) {
    //angular version
    console.log('angular version : ' + angular.version.full);

    $scope.range={
        value:5,
        min:0,
        max:10000,
        step:1
    };

    $scope.range1={
        value:5,
        min:0,
        max:10,
        step:1
    };

    $scope.range2={
        value:50,
        min:0,
        max:100,
        step:10
    };

    $scope.range3={
        value:16,
        min:0,
        max:30,
        step:2
    };

    $scope.range4={
        value:5000,
        min:0,
        max:10000,
        step:50
    };

});