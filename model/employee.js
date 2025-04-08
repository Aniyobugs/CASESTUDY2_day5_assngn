var mongoose = require ("mongoose");
const empschema=mongoose.Schema(
    {
    name :String,
    location :String,
    position :String,
    salary :Number
})
const emodel=mongoose.model("employee",empschema)
module.exports=emodel;

