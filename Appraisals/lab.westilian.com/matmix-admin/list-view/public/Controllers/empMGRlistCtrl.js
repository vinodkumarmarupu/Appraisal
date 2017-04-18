
App.controller('empMGRlistCtrl', function($scope,$http){
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

document.getElementById("empList").style.display="block";

$http.get("/getEmpBasedOnId?tlmail="+id).then (function(response){

console.log(response.data.success);

if(response.data.success=="noting was found"){

$scope.emptyResponse="NO Records";

}else{
console.log(response.data);
$scope.result1=response.data;
}

})
//window.location.assign("/updateProfileByHr");

}

$scope.id1="ds";


$http.get("/getEmpBasedOnTlId?mgrmail="+localStorage.getItem("email")+"&role=lead").then (function(response){

console.log(response.data.length);
if(response.data.success=="noting was found"){

$scope.emptyResponse="NO Records";

}else{

$scope.result=response.data;
}

})

});
