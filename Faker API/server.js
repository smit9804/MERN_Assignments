const express = require("express");
const { company } = require("faker");
const app = express();
const port = 8000;
const faker = require("faker");



app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/", (req, res) => {
    res.json({"message": "ok"});
    });
    

class User {
    constructor() {
        this.id = faker.random.number();
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.phone_number = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}


class Address { //establish the address before company to create the instance of address to be used by the company class below
    constructor() {
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zip = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

class Company {
    constructor() {
        this.id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zip : faker.address.zipCode(),
            country : faker.address.country()};
    }
}



app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.json(newUser);
})
app.get("/api/company/new", (req, res) => {
    const newCompany = new Company();
    res.json(newCompany);
})
app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json({"company": newCompany, "user": newUser});
})

app.listen(port, () => console.log(`Listening on port: ${port}`));