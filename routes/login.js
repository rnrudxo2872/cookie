var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

router.get('', (req, res) => {
    title = `login`;
    var list = template.list(req.list, ``);
    var html = template.control_HTML(title, list, `<div id="article">
    <h2>${title}</h2>
    <form action="login_process" method="POST">
    <p><input type="text" name="email" placeholder="email"></p>
    <p><input type="password" name="password" placeholder="password"></p>
    <p><input type="submit"></p>
    </form>
  </div>`)

    res.send(html);

}) //route,routing 갈림길에서 적당한 응답을 해주는 역할
module.exports = router;