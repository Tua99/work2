.controller('AppCtrl',function ($scope,$state,$ionicPopup){

	$scope.login={};
	var user="admin";
	var password="123456";
	$scope.doLogin=function(){
		console.log("alert");
		console.log(password);
		console.log($scope.login.username);
		console.log($scope.login.password);
		if ($scope.login.username == user && $scope.login.password == password) {
		$state.go("history");
    }else{
		$ionicPopup.alert({
		 title: 'Login Fail!',
		 template: 'Invalid Username and Password '
		
    })
		 $state.go("login");
	}
}
})