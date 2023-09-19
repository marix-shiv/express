const express = require('express');
const router = express.Router();

router.all("/users",(req,res) => {
    res.send("HIII")
});

router.get("/getURL", (req, res) => {
    //http://localhost:8081/getURL
    let url = req.protocol + "://" + req.host + process.env.PORT + req.originalUrl;
    console.log(url);
  });

module.exports = router