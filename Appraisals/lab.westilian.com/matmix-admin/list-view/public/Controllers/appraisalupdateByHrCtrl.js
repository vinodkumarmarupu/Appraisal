		
App.controller('appraisalupdateByHrCtrl', function($scope,$http,$location,$rootScope){
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
var AppraisalListHr={
"_id":localStorage.getItem('apprisalIdByHr')
}

$http.post("http://localhost:3000/getApprisalBasedOnId",AppraisalListHr).then(function(response){
console.log(JSON.stringify(response.data));
console.log(response.data[0].email);
  $scope.apHRemail=response.data[0].email,
 $scope.apHRname=response.data[0].name,
 $scope.apHRdesignation=response.data[0].designation,
 $scope.apHRmonth=response.data[0].month,
 $scope.apHRtimeInposition=response.data[0].TimeInPosition,
 $scope.apHRtrDetails=response.data[0].TrainingDetails,
 $scope.apHRprojects=response.data[0].Projects,
 $scope.apHRresponsibilities=response.data[0].responsibilities
 $scope.apHRdfInterest=response.data[0].difficultyInterest,
 $scope.apHRachievements=response.data[0].achievements
  $scope.apHRtlname=response.data[0].TLname,
 $scope.tlmail=response.data[0].TLemail,
  $scope.apHRtlcomment=response.data[0].TLcomment,
 $scope.apHRtlrating=response.data[0].TLrating,
  $scope.apHRmgrname=response.data[0].managerName,
 $scope.apHRmgrcomment=response.data[0].managerComment,
 $scope.apHRmgrrating=response.data[0].managerRating,
 $scope.hrname=response.data[0].HRname,
 $scope.hrmail=response.data[0].HRemail,
 $scope.mgrname=response.data[0].managerName,
 $scope.mgrmail=response.data[0].managerEmail
 

})



$scope.updateApprisalByHr=function(){
var UpdateAppraisalJson=
{       
       "_id":localStorage.getItem('apprisalIdByHr'),
	   "HRcomment":$scope.apHRhrcomment,
	   "HRrating":$scope.apHRhrrating,
	   "status":"3",
	   "HRSubmitted":"1"
		
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
window.location.assign('/appraisalListViewByHr');
}
})
}
});
