let http = require('http');
let cookie = require('cookie')

http.createServer(function (request, response) {
    console.log(request.headers.cookie)
    let cookies = [];
    if(request.headers.cookie !== undefined){
    cookies = cookie.parse(request.headers.cookie);//parse는 undefined시 못찾아서 에러가 남.
    }
    console.log(cookies.yummy_cookie)
    response.writeHead(200, {
        'Set-Cookie': ['yummy_cookie=choco', 'tasty_cookie=strawberry',
    `Permanent=cookies; Max-Age=${60*60*24*30}`]
    })
    response.end('Cookie!');
}).listen(3000);