
// create an express app
const express = require("express")
var cors = require('cors');
var XLSX = require("xlsx");
const app = express()
app.use(cors())

// use the express-static middleware
app.use(express.static("public"))//to make the app show you static files like imgs

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.get("/data", function (req, res) {
  var datapathexcel = "editsitedynamic.xlsx";
  var wb = XLSX.readFile(datapathexcel);
  var sheetName = wb.SheetNames[0];
  var sheetValue = wb.Sheets[sheetName];
  var mydata = XLSX.utils.sheet_to_json(sheetValue);
   res.send(mydata);
  })

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));