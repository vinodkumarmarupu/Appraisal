
App.controller('appraisalFormCtrl', function($scope,$http,$location,$rootScope){
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


$http.get("http://localhost:3000/getEmpApprisalBasedOnId?_id="+localStorage.getItem('email')).then(function(response){
console.log(JSON.stringify(response.data));

if(response.data.success=="noting was found"){

}else{
  $scope.apmonth=response.data[0].month,
 $scope.aptimeInposition=response.data[0].TimeInPosition,
 $scope.aptrDetails=response.data[0].TrainingDetails,
 $scope.approjects=response.data[0].Projects,
 $scope.apresponsibilities=response.data[0].responsibilities
 $scope.apdfInterest=response.data[0].difficultyInterest,
 $scope.apachievements=response.data[0].achievements,
 $scope.empsubmitted=response.data[0].EmpSubmitted
 alert(response.data[0].EmpSubmitted);
 }
 

})




$scope.register=function(){

var insertAppraisalJson=
{       
        "_id":$scope.apemail,
		"name":$scope.apname,
		"designation":$scope.apdesignation,
		"month":$scope.apmonth,
		"TimeInPosition":$scope.aptimeInposition,
		"TrainingDetails":$scope.aptrDetails,
		"Projects":$scope.approjects,
		"responsibilities":$scope.apresponsibilities,
		"difficultyInterest":$scope.apdfInterest,
		"achievements":$scope.apachievements,
		"TLname":$scope.tlname,
		"TLemail":$scope.tlmail,
		"managerName":$scope.mgrname,
		"managerEmail":$scope.mgrmail,
		"HRname":$scope.hrname,
		"HRemail":$scope.hrmail,
		"status":"0",
		"empsubmitted":"0",
		"TLSubmitted":"0",
		"managerSubmitted":"0",
		"HRSubmitted":"0"
		
		
	}
console.log(JSON.stringify(insertAppraisalJson));
$http.post("http://localhost:3000/createApprisalForm",insertAppraisalJson).then (function(response){

console.log(JSON.stringify(response.data));


if(response.data.error=="error"){

$scope.result="Email Already Exists!!!";
console.log($scope.result);
alert("Some Thing Went Wrong!!!");


}
else{
$scope.result=response.data;
console.log(JSON.stringify($scope.result));
$scope.apprisal="Success";
//$location.path("/login");
}



})
}
console.log( localStorage.getItem('email'));
$scope.finalSubmit=function(){


var insertAppraisalJson=
{       
        "_id":localStorage.getItem('email'),
		"name":$scope.apname,
		"designation":$scope.apdesignation,
		"month":$scope.apmonth,
		"TimeInPosition":$scope.aptimeInposition,
		"TrainingDetails":$scope.aptrDetails,
		"Projects":$scope.approjects,
		"responsibilities":$scope.apresponsibilities,
		
		"difficultyInterest":$scope.apdfInterest,
		"achievements":$scope.apachievements,
		"TLname":$scope.tlname,
		"TLemail":$scope.tlmail,
		"managerName":$scope.mgrname,
		"managerEmail":$scope.mgrmail,
		"HRname":$scope.hrname,
		"HRemail":$scope.hrmail,
		"status":"0",
		"empsubmitted":"1",
		"TLSubmitted":"0",
		"managerSubmitted":"0",
		"HRSubmitted":"0"
		
		
	}
console.log(JSON.stringify(insertAppraisalJson));
$http.post("http://localhost:3000/updateApprisal",insertAppraisalJson).then (function(response){

console.log(JSON.stringify(response.data));


if(response.data.error=="error"){

$scope.result="Email Already Exists!!!";
console.log($scope.result);
alert("Some Thing Went Wrong!!!");


}
else{
$scope.result=response.data;
console.log(JSON.stringify($scope.result));
$scope.apprisal="Success";
//$location.path("/login");
}



})
}


});