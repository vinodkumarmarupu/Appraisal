
App.controller('empHRlistCtrl', function($scope,$http,DTOptionsBuilder, DTColumnBuilder){

$scope.vm = {};

    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
      .withOption('order', [0, 'asc']);

if(localStorage.getItem('role')=="dev"){
console.log(localStorage.getItem('role'));
$scope.h1=true;
$scope.tleplist=true;
$scope.h2=true;
$scope.h3=true;
$scope.h5=true;
$scope.h4=true;
//$scope.tlAPList,$scope.mgrempList,$scope.mgrAPList,$scope.hrempList,$scope.hrAPList=true;
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
localStorage.setItem('empId',id);
window.location.assign("/updateProfileByHr");

}


$http.get("/empListApi").then (function(response){

console.log(response.data.length);

$scope.result=response.data;

})


$scope.getList=function(){

var json={
 
 "status":0

	
};

$http.post('http://localhost:3000/empListApi',json).then(function(response){

$scope.result=response.data;
})

}

$scope.updatedList=function(){

var json={
 
 "status":1

	
};

$http.post('http://localhost:3000/empListApi',json).then(function(response){

$scope.result=response.data;
})

}


});
