app.controller('Repositories', function($scope, $rootScope, loadUser, $http, Url, $httpParamSerializer, fetchData, $location) {
    loadUser($rootScope);
    $rootScope.activePage = 'repositories';
    $scope.repositories = [];
    $scope.init = true;
    $scope.params = {
        type: 'owner',
        sort: 'full_name',
        direction: 'asc'
    };
    $scope.types = [
        'owner',
        'default'
    ]
    $scope.sorts = [
        'created',
        'updated',
        'pushed',
        'full_name'
    ]
    $scope.directions = [
        'asc',
        'desc'
    ]
    $scope.$watch('params', function(val) {
            if ($scope.init == false) {
                //   $scope.fetchRepos(val);
                fetchData('repos', val, function(resp) {
                    $scope.repositories = resp;

                })
            }
        }, true)
        // $scope.fetchRepos = function(params, callback) {
        //     var serialize = $httpParamSerializer(params);
        //     var cb = callback || function() {};
        //     $http.get(Url.repos + '?' + serialize).success(function(resp) {
        //         $scope.repositories = resp;
        //         cb();
        //     })
        // };
    fetchData('repos', $scope.params, function(resp) {
        loadUser($rootScope);
        $scope.init = false;
        $scope.repositories = resp;
    })
});