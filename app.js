// Task1: initiate app and run server at 3000
var express = require("express")
require("./db")
var app=express();
var port=3000;
const path=require('path');
const emodel = require("./model/employee");
app.use(express.json());
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 
app.listen(port,()=>{
    console.log(`SERVER IS UP AND RUNNING ${port}`)
})


//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'
app.get('/api/employeelist',async(req,res)=>{
    try {
        var data = await emodel.find();
        res.send(data)
    } catch (error) {
        res.send (error)
    }
})
//TODO: get single data from db  using api '/api/employeelist/:id'
app.get('/api/employeelist/:id',async(req,res)=>{
    try {
        var data = await emodel.findById(req.params.id);
        res.send(data)
    } catch (error) {
        res.send (error)
    }
})

//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.post("/api/employeelist",(req,res)=>{
    try {
        emodel(req.body).save();
        res.send()
    } catch (error) {
        res.send(error)    
    }
})





//TODO: delete a employee data from db by using api '/api/employeelist/:id'
app.delete('/api/employeelist/:id', async (req, res) => {
    try {
      console.log(req.params.id);
      await emodel.findByIdAndDelete(req.params.id);
      res.send();
    } catch (error) {
      res.send(error);
    }
  });




//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put('/api/employeelist', async (req, res) => {
    try {
        var update = await emodel.findOneAndUpdate({_id:req.body._id},req.body,{new : true});
          res.send();
    } catch (error) {
        res.send(error)
    }
});


//! dont delete this code. it connects the front end file.
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



