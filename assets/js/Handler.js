
///<reference path="angular.min.js" /> 

var app = angular.module("module", []);
app.controller("basecontroller", function($scope) { 

$scope.profilename= " UI/UX Designer/ Developer"
$scope.inqnestname= "Inqnest Marketing Solutions Pvt Ltd, Bangalore."
$scope.inqnedate = "Sept 2015"

$scope.tourname= "Tour Company Recreation Pvt. Ltd, Gurgaon."
$scope.tourdate = "Aug 2014 – April 2015"
$scope.profileweb ="Web Designer/ UI Developer"

$scope.profileflash ="Web Designer/ Flash Designer"
$scope.ridingname= "Riding House InfoTech Pvt Ltd, Gurgaon."
$scope.ridingdate= "Oct 2012 – May 2014"

$scope.grapesname = "Grapes Software Pvt Ltd. (New Delhi)"
$scope.grapdate = "Nov 2011 – May 2012 "

});

app.controller ("skillcontroller",function($scope){
	
$scope.skillhtml = "XHTML/CSS 2"

$scope.skillhtml5 = "HTML5/CSS3"

$scope.skillframwork = "BOOTSTRAP FRAMEWORK"

$scope.skilljavasc = "JAVASCRIPT, JQUERY & ANGULAR JS"

$scope.skillwiredesign = "WIREFRAMING , DESIGNING & CREATIVITY"
	
	});
	


	
	
