app.controller('Stars', function($scope, $rootScope, loadUser, Url, $http, $httpParamSerializer, fetchData) {
    $rootScope.activePage = 'stars';
    $scope.starred = [];
    $scope.init = true;
    $scope.params = {
        sort: 'created',
        direction: 'asc'
    };
    $scope.sorts = [
        'created',
        'updated',
    ]
    $scope.directions = [
        'asc',
        'desc'
    ]
    $scope.$watch('params', function(val) {
        if ($scope.init == false) {
            fetchData('starred', $scope.params, function(resp) {
                $scope.starred = resp;
            });
        }
    }, true)
    fetchData('starred', $scope.params, function(resp) {
        $scope.starred = resp;
        loadUser($rootScope);
        $scope.init = false;
    })
});