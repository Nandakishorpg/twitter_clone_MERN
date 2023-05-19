const express = require('express');
const app = express()



app.use(express.json())


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
  
  app.use(express.urlencoded({ extended: true }))

//   app.use('/register',registerRouter)
//   app.use('/login',loginRouter)
//   app.use('/profile',profileViewRouter)
//   app.use('/docView',doctorViewRouter)
//   app.use('/booking',bookingRouter)
//   app.use('/viewAppointments',viewAppointments)

  app.listen(2000, () => {
    console.log('server started at port 2000')
  })