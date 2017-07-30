var fs = require('fs');
var Promise = require("bluebird");

var fileUrl = './products.json'

function loadJSONfile(filename, encoding) {
    // default encoding is utf8
    if (typeof (encoding) == 'undefined') encoding = 'utf8';

    return new Promise((resolve, reject) => {
        let obj;
        fs.readFile(fileUrl, encoding, function (err, data) {
            if (!err) {

                obj = (data);
                resolve(obj);
            }
        })

    });
}


function myRoutes(app) {

    app.get('/', function (req, res) {
        res.send('welcome. go to /products')
    });

    app.get('/products', function (req, res) {
        loadJSONfile(__dirname + fileUrl)
            .then((response) => {
                res.send(response)
            })
    });

    app.get('/productNames', function (req, res) {
        loadJSONfile(__dirname + fileUrl)
            .then((response) => {
                return new Promise((resolve, reject) => {
                    let arr = JSON.parse(response);
                    let parsedArray = arr.map((item) => {
                        return item.productName;
                    })
                    resolve(parsedArray);
                })
                    .then((response) => {
                        res.send(response)
                    })
            })
    })


app.get('/averageAges', function(req,res){
    descriptionArray= [];
    loadJSONfile(__dirname + fileUrl)
    .then((response)=>{
        return new Promise((resolve, reject)=>{
            
            JSON.parse(response).map((item)=>{
                descriptionArray.push(item.description)
            })
            resolve(descriptionArray);
        })
    })
    .then((response)=>{
        res.send(response)
    })
})

// MySQL downloads:

// https://dev.mysql.com/downloads/mysql/
// https://dev.mysql.com/downloads/workbench/


apt.get('/cenas', function(req,res){
    res.send('olarilolela')
})




}

module.exports = {
    myRoutes
}