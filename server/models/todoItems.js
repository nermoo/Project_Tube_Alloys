const mongoose =require('mongoose');

const items=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    Item:{
        type:String,
        require:true,
    }
})

const item=mongoose.model("items",items);
module.exports=item;
