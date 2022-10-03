const mongoose = require ('mongoose')
const SubmitSchema = new mongoose.Schema({
    name : { type: String, require: true },
    age: { type: String, require: true },
    Title: {type: String, require: true },
    CityState: { type: String, require: true},
  SuccessStory: {type: String, require: true},
  SalaryIncrease: { type: String, require: true},
  UploadPhoto: {type: String, }
  

});
const Submit = mongoose.model("User", SubmitSchema);
  module.exports = Submit;
  