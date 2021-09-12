const express = require('express');
const app = express();

//Ayarlar
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

// Routes
const employeeRouters = require('./routes/employeeRoute')
//Route
app.use('/employee',employeeRouters)

app.get('/',(req,res)=>{
  res.send("Hello World form NodeJS express.");
});




app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})