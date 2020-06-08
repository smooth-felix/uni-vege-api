const mongoose = require('mongoose');

const Farmer = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
    location: {
        // type: {
        //   type: String, 
        //   enum: ['Point'], 
        //   required: true
        // },
        // coordinates: {
        //   type: [Number],
        //   required: true
        // }
      }

})

module.exports = mongoose.model('Farmer' , Farmer);
