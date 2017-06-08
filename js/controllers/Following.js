app.controller('Following', function($scope, $rootScope, loadUser, fetchData) {
    //loadUser($rootScope);
    $rootScope.activePage = 'following';
    $scope.followings = [];
    fetchData('following', {}, function(resp) {
        $scope.followings = resp;
        loadUser($rootScope);
    });
});