var axios = require('axios');

var id = '#20909294';
var sec = 'your_secret_id';
var param = '?client_id=' + id + '&client_secret=' + sec;

function getUsersInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUsersInfo(username)
        })).then(function (info) {
            return info.map(function (user) {
                return user.data;
            })
        }).catch(function (err) {
            console.warn('Error in getPlayersInfo', err)
        }) 
    }
};

module.exports = helpers;