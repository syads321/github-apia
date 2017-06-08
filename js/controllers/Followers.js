app.controller('Followers', function($scope, $rootScope, $http, fetchData, loadUser) {
    $rootScope.activePage = 'follower';
    $scope.followers = [];
    fetchData('follower', {}, function(resp) {
        $scope.followers = resp;
        loadUser($rootScope);
    });
});