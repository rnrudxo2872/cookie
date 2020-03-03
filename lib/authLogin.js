var cookie = require('cookie');

module.exports.IsOwner = function (req,res){
    let isOwner = false
    let cookies = {}
    if(req.headers.cookie){
        cookies = cookie.parse(req.header.cookie);
    }
    if(cookies.email === 'rnrudxo@gmail.com' && cookies.password === '111111'){
        isOwner = true
    }
    return isOwner
}

