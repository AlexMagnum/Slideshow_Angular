var app = angular.module("myApp", [])
.controller("myCtrl", function($scope, $interval){
	$scope.imgArr =[
	{url: "Img/1.jpg", title: "Caption №1"},
	{url: "Img/2.jpg", title: "Caption №2"},
	{url: "Img/3.jpg", title: "Caption №3"},
	{url: "Img/4.jpg", title: "Caption №4"}
	];
	$scope.butChange =[
	act1 = "clicked",
	act2 = "",
	act3 = "",
	act4 = ""
	];
	$scope.currValue = $scope.imgArr[0].url;
	$scope.currText = $scope.imgArr[0].title;
	$scope.count = 0;
	$scope.curr = 1;

	$scope.nextSlide = function(){
		if($scope.count == 3)
		{
			$scope.count = 0;
			$scope.currValue = $scope.imgArr[$scope.count].url;
			$scope.currText = $scope.imgArr[$scope.count].title;
			$scope.butChangeFunc($scope.count);
		}
		else{
			$scope.count++;
			$scope.currValue = $scope.imgArr[$scope.count].url;
			$scope.currText = $scope.imgArr[$scope.count].title;
			$scope.butChangeFunc($scope.count);
		}
		$scope.curr = $scope.count+1;
	}
	
	$scope.prevSlide = function(){	
		if($scope.count == 0){
			$scope.count = 3;
			$scope.currValue = $scope.imgArr[$scope.count].url;
			$scope.currText = $scope.imgArr[$scope.count].title;
			$scope.butChangeFunc($scope.count);
		}else{
			$scope.count--;
			$scope.currValue = $scope.imgArr[$scope.count].url;
			$scope.currText = $scope.imgArr[$scope.count].title;
			$scope.butChangeFunc($scope.count);
		}
		$scope.curr = $scope.count+1;
	}

	$scope.butChangeFunc = function(x){
		for (var i = 0; i < $scope.butChange.length; i++) {
			if(i === x)
			{
				$scope.butChange[i] = "clicked";
			}else{
				$scope.butChange[i] = "";
			}
		}
	}

	$scope.butClickChange = function(x){
		switch(x){
			case 1:
			$scope.currValue = $scope.imgArr[0].url;
			$scope.currText = $scope.imgArr[0].title;
			$scope.count = 0;
			$scope.butChangeFunc($scope.count);
			break;
			case 2:
			$scope.currValue = $scope.imgArr[1].url;
			$scope.currText = $scope.imgArr[1].title;
			$scope.count = 1;
			$scope.butChangeFunc($scope.count);
			break;
			case 3:
			$scope.currValue = $scope.imgArr[2].url;
			$scope.currText = $scope.imgArr[2].title;
			$scope.count = 2;
			$scope.butChangeFunc($scope.count);
			break;
			case 4:
			$scope.currValue = $scope.imgArr[3].url;
			$scope.currText = $scope.imgArr[3].title;
			$scope.count = 3;
			$scope.butChangeFunc($scope.count);
			break;
		}
		$scope.curr = $scope.count + 1;
	}

	$interval(function(){ $scope.nextSlide(); }, 5000);
});

