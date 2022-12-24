const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose.set('strictQuery', true);
    return mongoose.connect('mongodb+srv://kira:kira@cluster0.0iwcmem.mongodb.net/mocktest');
}
module.exports = dbConnect;
