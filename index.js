var express = require('express')

var app = express()
var port = process.env.PORT || 3000

app.get('/:timestamp', function(req,res){
    var timestamp = req.params.timestamp;
    res.json(getJson(timestamp));

})

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Obtober', 'November', 'December'];

function getJson(timestamp) {
    var date;
    var result = {
        unix: null,
        natural : null
        
    }
    if (!isNaN(parseInt(timestamp))) {
        // if timestamp is a NUMBER string, parse it to NUMBER, and create a Date object
        date = new Date(parseInt(timestamp*1000))
        
        //  values of result JSON

        result.unix = date.getTime();
        result.natural = months[date.getMonth()]+' '+date.getDate() + ','+date.getFullYear() 
        
    } else {
        // if timestamp isnot a NUMBER string, create a Date object without parsing it
        date = new Date(timestamp)
        
                //  values of result JSON
        result.unix = date.getTime();
        result.natural = months[date.getMonth()]+' '+date.getDate() + ','+date.getFullYear() 
    }
    return result;
}
app.listen(port, function(){
    console.log('server is listening ' +port)
})