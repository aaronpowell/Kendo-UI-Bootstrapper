var express = require('express'),
    app = module.exports = express.createServer(),
    viewEngine = 'jade',
    dir = __dirname + '/tests',
    matcher = new RegExp("spec\\.(js|coffee)$", 'i'),
    tests = dir + '/specs/',
    fs = require('fs');

// Configuration
app.set('views', dir + '/views');
app.set('view engine', viewEngine);
app.use('/static', express.static(dir + '/lib'));
app.use('/src', express.static(__dirname + '/src'));
app.use('/kendo', express.static(dir + '/lib/kendoui'));

app.get('/specs.js', function (req, res) {
    var files = fs.readdirSync(tests).filter(function (x) {
        return x.match(matcher);
    });
    var js = '';
    
    for (var i = 0, il = files.length; i < il; i++) {
        js += fs.readFileSync(tests + files[i]);
    }
    res.send(js, { 'Content-Type': 'application/javascript' });
});

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(process.env.PORT || 3000);
