app.controller('Profile', function($scope, $rootScope, loadUser, fetchData) {
    $rootScope.activePage = 'profile';
    $scope.init = true;
    $scope.repositories = [];
    fetchData('subscribe', $scope.params, function(resp) {
        loadUser($rootScope);
        $scope.init = false;
        $scope.repositories = resp;
    })
});