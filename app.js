const express = require('express');
const bodyParser = require('body-parser');
const student = require ('./routes/student.routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost/studentDb",{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to Database');
}).catch(err=>{
    console.log('Connot Connect to Database',err)
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/student', student);

app.listen(3000,()=>{console.log('Connected to port 3000')});
