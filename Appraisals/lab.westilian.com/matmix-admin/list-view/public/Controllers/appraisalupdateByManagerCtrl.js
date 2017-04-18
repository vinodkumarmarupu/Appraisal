		
App.controller('appraisalupdateByManagerCtrl', function($scope,$http,$location,$rootScope){
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
var AppraisalListMGR={
"_id":localStorage.getItem('apprisalIdByManager')
}

$http.post("http://localhost:3000/getApprisalBasedOnId",AppraisalListMGR).then(function(response){
console.log(JSON.stringify(response.data));
console.log(response.data[0].email);
  $scope.apMgremail=response.data[0]._id,
 $scope.apMgrname=response.data[0].name,
 $scope.apMgrdesignation=response.data[0].designation,
 $scope.apMgrmonth=response.data[0].month,
 $scope.apMgrtimeInposition=response.data[0].TimeInPosition,
 $scope.apMgrtrDetails=response.data[0].TrainingDetails,
 $scope.apMgrprojects=response.data[0].Projects,
 $scope.apMgrresponsibilities=response.data[0].responsibilities
 $scope.apMgrdfInterest=response.data[0].difficultyInterest,
 $scope.apMgrachievements=response.data[0].achievements
  $scope.apMgrtlname=response.data[0].TLname,
 $scope.tlmail=response.data[0].TLemail,
  $scope.apMgrtlcomment=response.data[0].TLcomment,
 $scope.apMgrtlrating=response.data[0].TLrating,
 $scope.hrname=response.data[0].HRname,
 $scope.hrmail=response.data[0].HRemail,
 $scope.mgrname=response.data[0].managerName,
 $scope.mgrmail=response.data[0].managerEmail
 

})



$scope.updateApprisalByManager=function(){
var UpdateAppraisalJson=
{       
       "_id":localStorage.getItem('apprisalIdByManager'),
	   "managerComment":$scope.apMgrmgrcomment,
	   "managerRating":$scope.apMgrmgrrating,
	   "status":"2",
	   "managerSubmitted":"1"
		
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
window.location.assign('/appraisalListViewByManager');
}
})
}
});
	