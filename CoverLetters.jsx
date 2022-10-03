const React = require("react");
class CoverLetters extends React.Component{
    render() {
    return (
        <html>
            <head> 
            <link rel = "stylesheet" type="text/css" href = "/CSS/CoverLetter.css" />
            
</head>

<h2> Do you need a cover letter? </h2>
<p class = "Homepage"> <a href="http://localhost:3000/"> Go Back to Homepage </a> </p>

<div class= "CardHolders">

<div class="card">

 <img src="https://media.istockphoto.com/vectors/writing-cover-letter-vector-concept-vector-id963528696?k=20&m=963528696&s=612x612&w=0&h=_X5Z1EoUnr5FCHHv2_j6O9L6JMS5i7PbmgkhFDDkniY=" class="AllImages" alt="..."/>
 <div class="card-body">
   <h5 class="card-title"> General Cover Letter </h5>
   <p class="card-text"> If you're applying for multiple jobs and need a general cover letter this is the best option</p>
   <a href="http://127.0.0.1:5500/Test.html" class="btn btn-primary"> $79.99 </a>
 </div>
 </div>
 </div>

 <br/>

 <div class="card"> 
   <img src= "https://1951043.fs1.hubspotusercontent-na1.net/hub/1951043/hubfs/Icons/Resumes.jpg?width=380&name=Resumes.jpg" class="AllImages" alt="..."/>
   <div class="card-body">
     <h5 class="card-title"> Specific Cover Letter</h5>
     <p class="card-text"> If you need a specific cover letter; geared toward a department. This is the best option </p>
     <a href="#" class="btn btn-primary"> $129.99 </a>
   </div>
   </div>

   <br/>


     {/* FORM */}    {/* FORM */}    {/* FORM */}

     
<form action="/SubmitNow" method="post">


<div className = "SuccessStories"> 

<h2> We Want to Hear From You! </h2>
     
     <label> Full Name </label>
     <input type = "text" name = "name"/>
     
     <br/>

     <label> Experience Level </label>
     <input type = "text" name = "age"/>
     <br/>

     <label> Title </label>
     <input type = "text" name = "Title" />
     <br/>

     <label> City, State </label>
     <input type = "text" name = "CityState" />
     <br/>

     <label> Mini-Bio </label>
     <input type = "text" name = "SuccessStory"/>
     <br/>
     
     <label> Current Salary </label>
     <input type = "text" name = "SalaryIncrease"/>
     <br/>

    <div id="display-image">
       <label> Upload Your Cover Letter
     <input type="file" id="image-input" name = "UploadPhoto" accept="image/jpeg, image/png, image/jpg"/>

     </label>

     <input type="submit" value="Submit"/>

     </div>
     </div>

     </form>

          
        </html>
    )

}
}
module.exports = CoverLetters