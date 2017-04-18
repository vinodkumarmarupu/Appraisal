		
App.controller('appraisalupdateByTlCtrl', function($scope,$http,$location,$rootScope){
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
var AppraisalListTL={
"_id":localStorage.getItem('aprisalId')
}

$http.post("http://localhost:3000/getApprisalBasedOnId?_id=",AppraisalListTL).then(function(response){
console.log(JSON.stringify(response.data));
  $scope.apTLemail=response.data[0]._id,
 $scope.aptlname=response.data[0].name,
 $scope.aptdesignation=response.data[0].designation,
 $scope.aptmonth=response.data[0].month,
 $scope.apttimeInposition=response.data[0].TimeInPosition,
 $scope.apttrDetails=response.data[0].TrainingDetails,
 $scope.aptprojects=response.data[0].Projects,
 $scope.aptresponsibilities=response.data[0].responsibilities
 $scope.aptdfInterest=response.data[0].difficultyInterest,
 $scope.aptachievements=response.data[0].achievements
  $scope.tlname=response.data[0].TLname,
 $scope.tlmail=response.data[0].TLemail,
 $scope.hrname=response.data[0].HRname,
 $scope.hrmail=response.data[0].HRemail,
 $scope.mgrname=response.data[0].managerName,
 $scope.mgrmail=response.data[0].managerEmail
 
 

})



$scope.updateApprisalByTL=function(){
var UpdateAppraisalJson=
{       
       "_id":localStorage.getItem('aprisalId'),
	   "TLcomment":$scope.apttlcomment,
	   "TLrating":$scope.apttlrating,
	   "status":"1",
	   "TLSubmitted":"1"
		
	}
console.log(JSON.stringify(UpdateAppraisalJson));
$http.post("http://localhost:3000/updateApprisal",UpdateAppraisalJson).then (function(response){

console.log(JSON.stringify(response.data));


if(response.data.error=="error"){

$scope.result="Email Already Exists!!!";
console.log($scope.result);
}
else{
$scope.result=response.data;
console.log(JSON.stringify($scope.result));
window.location.assign("/appraisalListViewByTl");
}
})
}
});
