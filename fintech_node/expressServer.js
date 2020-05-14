const express = require('express')
const app = express()
const path = require('path')
var request = require('request')
var mysql = require('mysql')


app.set('views', path.join(__dirname, 'views')); // ejs file location
app.set('view engine', 'ejs'); //select view template engine


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0525',
    database : 'fintech'
  });

  connection.connect();


app.use(express.static(path.join(__dirname, 'public'))); // to use static asset (design)
app.use(express.json());
app.use(express.urlencoded({extended:false}));//ajax로 데이터 전송하는 것을 허용


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

/** service strart */
app.get('/signup', function(req, res){
    res.render('signup');
})

app.get('/authResult',function(req, res){
    var authCode = req.query.code;
    console.log(authCode);
    var option = {
        method : "POST",
        url : "https://testapi.openbanking.or.kr/oauth/2.0/token",
        header : {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        form : {
            code : authCode,
            client_id : '9Gd2iGZ6uC8C73Sx4StubaH1UIklincOEJAnkf18',
            client_secret : 'c3p6daWMkdGvM24WRCb0W2xdbXEqdCyGdcne7PlC',
            redirect_uri : 'http://localhost:3000/authResult',
            grant_type : 'authorization_code'
        }
    }
    request(option, function(err, response, body){
        if(err){
            console.error(err);
            throw err;
        }
        else{
            var accessRequestResult = JSON.parse(body);
            console.log(accessRequestResult);
            res.render('resultChild', {data : accessRequestResult} )
        }
    })
})

app.post('/signup', function(req, res){
    //data req get db store
    var userName = req.body.userName;
    var userEmail = req.body.userEmail;
    var userPassword = req.body.userPassword;
    var userAccessToken = req.body.userAccessToken;
    var userRefreshToken = req.body.userRefreshToken;
    var userSeqNo = req.body.userSeqNo; 
    console.log(userName, userAccessToken, userSeqNo);
    var sql = "INSERT INTO fintech.user (name, email, password, accesstoken, refreshtoken, userseqno) VALUES (?,?,?,?,?,?)";
    connection.query(sql, 
        [userName, userEmail, userPassword, userAccessToken, userRefreshToken, userSeqNo],
        function(err, result){
            if(err){
                console.error(err);
                res.json(0);
                throw err;
            }
            else{
                res.json(1);
            }
        });

})

app.listen(3000)