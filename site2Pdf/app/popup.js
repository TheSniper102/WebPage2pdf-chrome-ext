var app = angular.module("convertModule", ['chieffancypants.loadingBar']);
var ConvertController = function ($scope, $http, $log) {

    $scope.PageUrl ;

    var onError = function (reasone) {
        $scope.error = "could not featch data";
       
    };

    var onFetchComplete = function (response) {
    };


    var getActiveTab = function (callback) {
     
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                callback(tabs[0]);
            });
    };


    $scope.ConvertPage = function (PageUrl) {
        getActiveTab(function (tab) {
            $log.log(tab);
        });
        $http.get("http://freehtmltopdf.com/?convert=" + PageUrl)
         .then(onFetchComplete, onError);
    };
};
app.controller("ConvertController", ConvertController);



