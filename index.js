var express = require('express')

var app = express()
var port = process.env.PORT || 3000

app.get('/:timestamp', function(req,res){
    var timestamp = req.params.timestamp
    res.send('timestamp: '+timestamp)
    
})

app.listen(port, function(){
    console.log('server is listening ' +port)
})