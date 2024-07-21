const mongoose = require('mongoose');

const foodSchema= new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    price :{
        type:Number,
        require:true,
        min:0
    },

    desc:{
        type:String,
        require:true,
        trim:true
    }
},{ versionKey :false ,timestamps:true})

const Food =mongoose.model('Food',foodSchema);

module.exports=Food;
