app.factory('Url', function() {
    var baseUrl = 'https://api.github.com/users/';
    var username = 'andhikamaheva';
    var url = {
        getUser: baseUrl + username,
        repos: baseUrl + username + '/repos',
        starred: baseUrl + username + '/starred',
        following: baseUrl + username + '/following',
        follower: baseUrl + username + '/followers',
        subscribe: baseUrl + username + '/subscriptions'
    }
    return url;
})