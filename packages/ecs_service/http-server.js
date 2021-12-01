var http = require("http")
var hostname = process.env.BIND_IP || "0.0.0.0" 
var port = process.env.BIND_PORT || 3000 

var response =JSON.stringify({ message : "Hello, World!i" }) 

var server = http.createServer(function (req, res) {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/json")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With")
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
    res.end(response)
  })

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`)
  })
  