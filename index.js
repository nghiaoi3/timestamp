var express = require('express')

var app = express()
var port = process.env.PORT || 3000

app.get('/', function(res,req){
    res.send('hello')
    
})

app.listen(port, function(){
    console.log('server is listening ' +port)
})