const express = require('express');
const app = express();

const userRouter = require('./Routes/user')

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dsingh197:anbk0ButpAna0Ayv@cluster0.tao9fuo.mongodb.net/?retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(()=>{
    console.log("Momgo connected")
})
.catch((err)=>{
    console.log("Momgo NOT connected",err)
})

app.use(express.json());

app.use('/user', userRouter)

// app.use('/',(req, res, next)=>{
//     res.status(200).json({
//         message:"Hellow World"
//     });
// });

app.use((req, res, next) => {
    const error = new Error('Not Found');
    next(error);
});

app.use((error,req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});


module.exports = app;