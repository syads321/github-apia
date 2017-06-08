app.factory('loadUser', function(Get, $http) {
    var user = 'andhikamaheva';
    return function($root) {
        if ($root.user.loaded == false) {
            $http.get('https://api.github.com/users/andhikamaheva').success(function(resp) {
                $root.user = resp;
                $root.user.loaded = true;
            });
        }

    };
});