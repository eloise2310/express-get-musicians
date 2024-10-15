const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.use(express.json());
app.use(express.urlencoded());

app.get("/musicians", async (request, response) => {
    const musicians = await Musician.findAll({});
    response.json(musicians)
})

app.get("/musicians/:id", async (request, response) => {
    const number = request.params.id;
    const musician = await Musician.findByPk(number);
    response.json(musician)
})

app.post("/musicians", async (request, response) => {
    const newMusician = await Musician.create(request.body);
    response.json(newMusician)
})

app.put("/musicians/:id", async (request, response) => {
    const updatedMusician = await Musician.update(request.body, {where: {id: request.params.id}});
    response.json(updatedMusician);
})

app.delete("/musicians/:id", async (request, response) => {
    const deletedMusician = await Musician.destroy({where: {id: request.params.id}});
    response.json(deletedMusician)
})








module.exports = app;