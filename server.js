var express = require('express');
const multer = require('multer');
const path = require("path");
var cors = require('cors');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


app.post("/api/fileanalyse", upload.single('upfile'), (req, res) => {
  res.json({name: req.file.originalname, type:req.file.mimetype, size: req.file.size*10})
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
