var app = angular.module('myapp',['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'partials/home.html',
		controller : 'mainCtrl'
	})
	.when('/json', {
		templateUrl : 'partials/json.html',
		controller : 'mainCtrl'
	})
	.when('/xml', {
		templateUrl: 'partials/xml.html',
		controller: 'mainCtrl'
	})
	.when('/escape', {
		templateUrl: 'partials/escape.html',
		controller: 'mainCtrl'
	})
	.when('/encode', {
		templateUrl: 'partials/encoder.html',
		controller: 'mainCtrl'
	})
	.when('/convert', {
		templateUrl: 'partials/convert.html',
		controller: 'mainCtrl'
	});
});
app.controller('mainCtrl', function($scope) {
	$scope.message = "Welcome";
	$scope.options = [
		{json:"JsonFormat"}, 
		{xml:"XmlFormat"}, 
		{escape:"EscapeJAVA"}, 
		{encode:"URLEncoder"}, 
		{convert:"XML-JSON Conversion"} 
	];
	var x2js = new X2JS();
	$scope.formatdata = function(data,type) {
		switch(type) {
			case 'json' : $scope.outputdata = vkbeautify.json(data); break;
			case 'xml' : $scope.outputdata = vkbeautify.xml(data); break;
			case 'encode': $scope.outputdata = encodeURIComponent(data); break;
			case 'decode': $scope.outputdata = decodeURIComponent(data); break;
			case 'escape': $scope.outputdata = JSON.stringify(data); break;
			case 'unescape': $scope.outputdata = JSON.parse(data); break;
			case 'jsontoxml': $scope.outputdata = vkbeautify.xml(x2js.json2xml_str(JSON.parse(data))); break;
			case 'xmltojson': $scope.outputdata = vkbeautify.json(JSON.stringify(x2js.xml_str2json(data))); break;
		}
	}
});	
app.directive("inputwell", function() {
	return {
		restrict : 'E',
		replace: true,
		transclude: true,
		scope: {
			placeholder: "@"
		},
		templateUrl : "partials/inputtemplate.html",
		controller : "mainCtrl"
	}
});