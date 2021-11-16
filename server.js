var express = require("express")
var http = require("http"), app
app = express()

app.use(express.urlencoded())
app.use(express.static(__dirname))

var port = process.env.PORT || 8080

http.createServer(app).listen(port)


