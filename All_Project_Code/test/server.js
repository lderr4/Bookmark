let server = require("../server.js")
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
const { expect } = chai;
var assert = chai.assert;

describe("Home Page!", () => {

    // Sample test case given to test / endpoint. 
    it("Returns the default welcome message", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
            // console.log("abc");
            // console.log(res);
            // console.log(res.body);
            expect(res).to.have.status(200);
          done();
        });
    });

    // Please add your test cases here.
  });
  describe("Registration Page!", () => {

    // Sample test case given to test / endpoint. 
    it("Returns the default welcome message", done => {
      chai
        .request(server)
        .get("/registration")
        .end((err, res) => {
            // console.log("abc");
            // console.log(res);
            // console.log(res.body);
            expect(res).to.have.status(201);
          done();
        });
    });

    // Please add your test cases here.
  });
  
  describe("Books Page", () => {

    // Sample test case given to test / endpoint. 
    it("Returns the default welcome message", done => {
        let book_selection = 'x';
        chai
        .request(server)
        .get("/books/x")
        .end((err, res) => {
            expect(res).to.have.status(404);
          done();
        });
    });

    // Please add your test cases here.
  });

