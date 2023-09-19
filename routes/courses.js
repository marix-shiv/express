const express = require("express");
const router = express.Router()
const helper = require("../helper");

//Middlewares :- runs befor any function runs imagine like a home door

// GET API - rertrives the data
router.get("/api/courses", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin","http://localhost:5173")
  let data = await helper.readFile("data.json");
  res.send(data);
});

//get API :- retrives the data and sends it to the user

router.get("/api/courses/:id", async (req, res) => {
  let data = await helper.readFile("data.json");
  console.log("Get Url");
  let obj = data.find((e) => e.id == req.params.id);
  console.log(obj);
  if (obj) res.send(obj);
  else res.status(404).send("Error 404 Not Found");
});

//POST API :- add new data into the existing records
router.post("/api/courses", async (req, res) => {
  // console.log(req.body);
  let data = await helper.readFile("data.json");
  data.push(req.body);
  await helper.writeFile("data.json", JSON.stringify(data));
  res.send("success");
});

//PUT API :- update the data we need the id from params
router.put("/api/courses/:id", async (req, res) => {
  // console.log(req.body);
  let data = await helper.readFile("data.json");
  let objtoChange = data.find((e) => e.id == req.params.id);
  let indextoChange = data.findIndex((e) => e.id == req.params.id);
  data[indextoChange] = req.body;
  await helper.writeFile("data.json", JSON.stringify(data));
  res.send("success");
});

//Patch API :- update a single entry.
router.patch("/api/courses/:id", async (req, res) => {
  // console.log(req.body);
  let data = await helper.readFile("data.json");
  let objtoChange = data.find((e) => e.id == req.params.id);
  let indextoChange = data.findIndex((e) => e.id == req.params.id);
  data[indextoChange].name = req.body.name;
  await helper.writeFile("data.json", JSON.stringify(data));
  res.send("success");
});

//Delete API
router.delete("/api/courses/:id", async (req, res) => {
  let data = await helper.readFile("data.json");
  let idToDel = data.findIndex((e) => e.id == req.params.id);
  data.splice(idToDel,1)
  await helper.writeFile("data.json",JSON.stringify(data));
  res.send(data);
});

module.exports = router