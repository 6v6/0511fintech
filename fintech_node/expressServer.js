const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views')); // ejs file location
app.set('view engine', 'ejs'); //select view template engine

app.use(express.static(path.join(__dirname, 'public'))); // to use static asset (design)
app.use(express.json());
app.use(express.urlencoded({extended:false}));//폼데이터를 전송하는 것을 허용


// root 라우터
app.get('/', function (req, res) {
    var title = "javascript"
    res.send('<html><h1>'+title+'</h1><h2>contents</h2></html>')
})

// ejs --> view와 logic을 분리
app.get('/ejs', function (req, res) {
    res.render('test')
})

// test 라우터
app.get('/test', function(req, res) {
    res.send('Test')
})

// design
app.get('/design', function(req, res) {
    res.render('designTest');
})

//datasend Router add
app.get('/dataSend', function(req, res){
    res.render('dataSend');
})

app.post('/getTime', function(req, res){
    var nowTime = new Date();
    res.json(nowTime);
})

app.post('/getData',function(req, res){
    console.log(req.body); //ajax로 보낸 데이터를 req.body.데이터의key 값응로 접근
    var userData = req.body.userInputData;
    console.log('userData = ',userData);
    res.json(userData + "!!!!!");
})

app.listen(3000)