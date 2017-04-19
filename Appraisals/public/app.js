var App=angular.module('myApp', ['ngRoute','myApp.Controllers','datatables'])

App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
	.when('/index', {
            templateUrl: 'public/index.html',
			controller:'indexCtrl'
            
        })
 .when('/login', {
            templateUrl: 'login.html',
            controller: 'loginCtrl'
        })
        // home page
        .when('/home', {
            templateUrl: 'Home.html',
            controller: 'homeCtrl'
        })

        // nerds page that will use the NerdController
        .when('/appraisalForm', {
            templateUrl: 'appraisalForm.html',
            controller: 'appraisalFormCtrl'
        })
		.when('/appraisalListViewByHr', {
            templateUrl: 'appraisalListViewByHr.html',
            controller: 'hrAppraisallistCtrl'
        })
		.when('/appraisalListViewByManager', {
            templateUrl: 'appraisalListViewByManager.html',
            controller: 'managerAppraisallistCtrl'
        })
		.when('/appraisalListViewByTl', {
            templateUrl: 'appraisalListViewByTl.html',
            controller: 'tlAppraisallistCtrl'
        })
		.when('/appraisalUpdateByHr', {
            templateUrl: 'appraisalUpdateByHr.html',
            controller: 'appraisalupdateByHrCtrl'
        })
		.when('/appraisalUpdateByManager', {
            templateUrl: 'appraisalUpdateByManager.html',
            controller: 'appraisalupdateByManagerCtrl'
        })
		.when('/appraisalUpdateByTl', {
            templateUrl: 'appraisalUpdateByTl.html',
            controller: 'appraisalupdateByTlCtrl'
        })
		
		.when('/empListViewForHr', {
            templateUrl: 'empListViewForHr.html',
            controller: 'empHRlistCtrl'
        })
		.when('/empListViewForManager', {
            templateUrl: 'empListViewForManager.html',
            controller: 'empMGRlistCtrl'
        })
		.when('/empListViewForTl', {
            templateUrl: 'empListViewForTl.html',
            controller: 'empTLlistCtrl'
        })
		.when('/HrUpdateempprofile', {
            templateUrl: 'HrUpdateempprofile.html',
            controller: 'updateempprofilebyhrCtrl'
        })
		.when('/updateProfile', {
            templateUrl: 'updateProfile.html',
            controller: 'updateempprofileCtrl'
        })
		.when('/registration', {
            templateUrl: 'registration.html',
            controller: 'empRegistrationCtrl'
        })
 .otherwise({
	 redirectTo: '/login'
	 })
   
}])

