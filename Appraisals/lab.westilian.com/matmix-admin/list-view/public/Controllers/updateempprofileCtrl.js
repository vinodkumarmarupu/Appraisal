	
App.controller('updateempprofileCtrl', function($scope,$http,$location,$rootScope){
if(localStorage.getItem('role')=="dev"){
console.log(localStorage.getItem('role'));
$scope.h1=true;
$scope.tleplist=true;
$scope.h2=true;
$scope.h3=true;
$scope.h5=true;
$scope.h4=true;

}if(localStorage.getItem('role')=="lead"){
console.log(localStorage.getItem('role'));
$scope.h2=true;
$scope.h3=true;
$scope.h4=true;
$scope.h5=true;

$scope.mgrempList,$scope.mgrAPList,$scope.hrempList,$scope.hrAPList=true;
}if(localStorage.getItem('role')=="manager"){
$scope.tleplist=true;
$scope.h1=true;
$scope.h4=true;
$scope.h5=true;
}if(localStorage.getItem('role')=="hr"){
$scope.tleplist=true;
$scope.h1=true;
$scope.h2=true;
$scope.h3=true;

} 

$scope.update=function(){
$location.path("/updateProfile");
}
$scope.APForm=function(){
$location.path("/appraisalForm");
}
$scope.homePage=function(){
$location.path("/home");
}


$scope.emp1=function(){
$location.path("/empListViewForTl");
}
$scope.ap1=function(){
$location.path("/appraisalListViewByTl");
}
$scope.emp2=function(){
$location.path("/empListViewForManager");
}
$scope.ap2=function(){
$location.path("/appraisalListViewByManager");
}
$scope.emp3=function(){
$location.path("/empListViewForHr");
}
$scope.ap3=function(){
$location.path("/appraisalListViewByHr");
}
$scope.logout=function(){
$location.path("/login");
}

$http.get("http://localhost:3000/getEmpBasedOnId?_id="+localStorage.getItem('email')).then(function(response){
console.log(JSON.stringify(response.data));
 $scope.uemail=response.data[0]._id,
 $scope.ufname=response.data[0].fname,
 $scope.ulname=response.data[0].lname,
 $scope.udesignation=response.data[0].designation,
 $scope.uphone=response.data[0].phonenumber

})



$scope.updateProfile=function(){
var updateEmpJson=
{       
     "_id":$scope.uemail,
	 "fname":$scope.ufname,
	 "lname":$scope.ulname,
	 "designation":$scope.udesignation,
	 "phonenumber":$scope.uphone
		
	}

$http.post("http://localhost:3000/empUpdateProfile",updateEmpJson).then (function(response){

console.log(JSON.stringify(response.data));

$scope.result=response.data;
console.log(JSON.stringify($scope.result));
if(response.data.error=="failed"){

$scope.data="unable to update the details";

}
else{

$scope.data="Succesfully Updated!!!";

}


})
}

});