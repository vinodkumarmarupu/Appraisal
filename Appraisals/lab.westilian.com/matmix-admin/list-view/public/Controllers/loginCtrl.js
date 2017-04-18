
App.controller('loginCtrl', function($scope,$http,$rootScope,$location){
$scope.register=function(){
$location.path('/registration');
}
$scope.login=function(){

$http.get("http://localhost:3000/loginApi?email="+$scope.email+"&password="+$scope.password).then (function(response){
//console.log("http://localhost:3000/loginApi?email="+$scope.email+"&password="+$scope.password);
$scope.loginData=response.data;
localStorage.setItem('role',response.data.role);
if(response.data.success=="Check your credentials"){
console.log("error");
}else if(response.data.role=="dev"){
localStorage.setItem('email',$scope.loginData._id);
console.log("dev");

$rootScope.Name=$scope.loginData._id;
console.log(JSON.stringify(response.data));

$location.path("/home");
}else if(response.data.role=="lead"){
localStorage.setItem('email',$scope.loginData._id);
console.log("lead");
window.location.assign("/home");
}else if(response.data.role=="manager"){
console.log("manager");
localStorage.setItem('email',$scope.loginData._id);
window.location.assign("/home");
}else if(response.data.role=="hr"){
console.log("hr");
localStorage.setItem('email',$scope.loginData._id);
window.location.assign("/home");
}else{
console.log("nothing");
}
//alert("status"+status+"config"+JSON.stringify(config)+"statusText"+statusText);
});
}
})