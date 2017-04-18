
App.controller('empRegistrationCtrl', function($scope,$http,$location,$rootScope){
$scope.register=function(){
var updateEmpJson=
{       
        "email":$scope.email,
		"fname":$scope.fname,
		"lname":$scope.lname,
		"desig":$scope.desig,
		"phone":$scope.phone,
		"password":$scope.password,
		"role":$scope.role,
		"status":"0",
		"HRAparisalStatus":"0",
		"empAparisalStatus":"0"
		
	}
console.log(JSON.stringify(updateEmpJson));
$http.post("http://localhost:3000/empRegistrationApi",updateEmpJson).then (function(response){

console.log(JSON.stringify(response.data));


if(response.data.error=="error"){

$scope.result="Email Already Exists!!!";
console.log($scope.result);


}
else{
$scope.result=response.data;
console.log(JSON.stringify($scope.result));

window.location.assign("/login");
}



})
}



});
	