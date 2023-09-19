const express = require("express");
const app = express();
require("dotenv").config();
const coursesRoutes = require("./routes/courses");
const userRoutes = require("./routes/users")

const path = require("path")

//Middlewares :- runs befor any function runs imagine like a home door
app.use(express.static(path.join(__dirname , "public")))
app.use(express.json());

app.get("/hello" , (req,res) => {
  let name = req.query.name
    res.render('hello.ejs',{
      name : name
    })
})

app.use("/api/courses", coursesRoutes);
app.use("/", userRoutes)

app.listen(process.env.PORT);

// GET http://localhost:5000/


