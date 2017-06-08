app.factory('fetchData', function(Url, $http, $httpParamSerializer, $location) {
    return function(name, params, callback) {
        var serialize = $httpParamSerializer(params);
        var cb = callback || function() {};
        console.log(serialize)
        $http.get(Url[name] + '?' + serialize).success(function(resp) {
            cb(resp);
            for (var a in params) {
                console.log(params[a])
                $location.search(a, params[a]);
            }
            // $location.search('sort', params.sort);
        })

    };
});