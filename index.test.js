// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here

    test("testing musicians endpoint", async () => {
        const response = await request(app).get("/musicians")
    })

    test("testing musicians HTTP status code", async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })

    test("testing musician JSON string", async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(Array.isArray(responseData)).toBe(true);
    })

    test("testing find by pk works", async () => {
        const response = await request(app).get("/musicians/1");
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("id", 1)
    })

    
})
