
App.controller('hrAppraisallistCtrl', function($scope,$http){
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


$scope.ApprisalList=function(){

var apprisalListHR={
"HRemail":localStorage.getItem("email"),
"status":"2",
"HRSubmitted":"0"
}


$http.post("http://localhost:3000/getApprisalBasedOnId",apprisalListHR).then (function(response){

if(response.data.success=="noting was found"){

$scope.result="Noting Was found!!!";
}
else{
$scope.result=response.data;
}
})
}


$scope.UpdatedApprisalList=function(){
var apprisalListhR={
"HRemail":localStorage.getItem("email"),
"HRSubmitted":"1"
}


$http.post("http://localhost:3000/getApprisalBasedOnId",apprisalListhR).then (function(response){

if(response.data.success=="noting was found"){

$scope.result="Noting Was found!!!";
}
else{
$scope.result=response.data;
}
})
}

$scope.requsetingApprisal=function(){

var JSON={

"date":"april",
"HRAparisalStatus":0,
"status":1

};

$http.post('http://localhost:3000/empListApi',JSON).then(function(response ){

$scope.result=response.data;

})


}

$scope.requsetedApprisal=function(){

var JSON={
"date":"april",
"HRAparisalStatus":1,
"status":1
};

$http.post('http://localhost:3000/empListApi',JSON).then(function(response){

$scope.result=response.data;

})


}

$scope.edit=function(id){

$http.get("http://localhost:3000/getEmpBasedOnId?_id="+id).then(function(response){
console.log(JSON.stringify(response.data));
 
 
 var insertAppraisalJson=
{       
        "_id":id,
		"name":response.data[0].fname,
		"designation":response.data[0].designation,
		"month":response.data[0].date,
		"TLname":response.data[0].tlname,
		"TLemail":response.data[0].tlmail,
		"managerName":response.data[0].mgrname,
		"managerEmail":response.data[0].mgrmail,
		"HRname":response.data[0].hrname,
		"HRemail":response.data[0].hrmail,
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


var updateEmpApprisalJson=
{       
        "_id":id,
		"HRAparisalStatus":"1",
		"empAparisalStatus":"0"
		
		
	}

$http.post("http://localhost:3000/empUpdateProfile",updateEmpApprisalJson).then (function(response){

console.log(JSON.stringify(response.data));

$scope.result=response.data;
})
}
})
})
}
});
