const express = require('express')
const app = express()
const mongoose = require("mongoose");
const Submit = require("./models/Submit");
app.use(express.urlencoded({ extended: false }));


require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});


// THE MONEY //

app.set("view engine", "jsx");
// Creates Links to JSX
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.static("public"));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.render('index')
})

// Creating Route for Success Page //

app.get('/SuccessStories', (req, res) => {
    res.render('Success')
  })
  
// Creating Route for Job Board //

app.get('/LandAJob', (req, res) => {
    res.render('Jobboard')
  })

// Creating Route for Resume //

app.get('/NewResume', (req, res) => {
  res.render('Resumes')
})

// Creating Route for Cover Letter //

app.get('/CovaMe', (req, res) => {
  res.render('CoverLetters')
})


// Creating Route for LinkedIn //

app.get('/LinkedO', (req, res) => {
  res.render('LinkedIn')
})

// Creating Route for Submission Button //

app.post('/SubmitNow',(req, res) => {
  res.send('Submit.Create')

  Submit.create
  (req.body);
})

 // name: "First Name, Last Name",
      // age: "number",
      // Title: "Temp Design",
      // CityState: "",
      // SuccessStory: "input",
      // SalaryIncrease: "input",
      // UploadPhoto: "img"



app.listen("3000", () => {
    console.log("ServerRunning, you better go catch it. ");
  });