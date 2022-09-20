const express = require('express');
const app = express();
const config = require('config');


//Header - Fixed CORS policy
app.use((req,res,next)=>
{
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-headers',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization'
        );

        if(req.method==='OPTIONS')
        {
            res.header('Accept-Control-Methods','PUT,POST,PATCH,DELETE,GET');
            return res.status(200).json({

            })
        }
        next();
});



const userRouter = require('./Routes/user')
const dbConfig = config.get('myConn.dbConfig.dbName');

const mongoose = require("mongoose");
mongoose.connect(dbConfig, {
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