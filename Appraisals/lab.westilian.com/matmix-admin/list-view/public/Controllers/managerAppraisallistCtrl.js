App.controller('managerAppraisallistCtrl', function($scope,$http){
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
$scope.edit=function(id){
//alert(id);
localStorage.setItem('apprisalIdByManager',id);
window.location.assign("/appraisalUpdateByManager");

}

var apprisalListMGR={
"managerEmail":localStorage.getItem("email"),
"status":"1",
"managerSubmitted":"0"
}


$http.post("http://localhost:3000/getApprisalBasedOnId",apprisalListMGR).then (function(response){

if(response.data.success=="noting was found"){

$scope.result="Noting Was found!!!";
}
else{
$scope.result=response.data;
}
})
var apprisalListMGR={
"managerEmail":localStorage.getItem("email"),
"managerSubmitted":"1"
}


$http.post("http://localhost:3000/getApprisalBasedOnId",apprisalListMGR).then (function(response){

if(response.data.success=="noting was found"){

$scope.result1="Noting Was found!!!";
}
else{
$scope.result1=response.data;
}
})

});
