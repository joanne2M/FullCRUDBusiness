const React = require("react");
class Resumes extends React.Component{
    render() {
    return (
        <html>
            <head> 
            <link rel = "stylesheet" type="text/css" href = "/CSS/Resumes.css" />
</head>

<h5> Professional Resumes </h5>
<p> <a href="http://localhost:3000/"> Go Back to Homepage </a> </p>

<div class= "CardHolders">

<div class="card">

 <img src="https://flat-icons.com/wp-content/uploads/2021/03/entry-level-graphic-designer-1.jpg" class="AllImages" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">Entry Level </h5>
   <p class="card-text"> If you're a professiona with 0-3 years of experience. This Entry Level Resume is perfect for you.</p>
   <a href="http://127.0.0.1:5500/Test.html" class="btn btn-primary"> $79.99 </a>
 </div>
 </div>
 </div>

 <br/>

 <div class="card"> 
   <img src= "https://www.ohsu.edu/sites/default/files/2021-12/cog_talkaroundtable.jpg" class="AllImages" alt="..."/>
   <div class="card-body">
     <h5 class="card-title">Mid-Level</h5>
     <p class="card-text"> Do you need a Mid-Level Resume? If you have more than 3 years of experience in any given field then this is the best option for you </p>
     <a href="#" class="btn btn-primary"> $189.99 </a>
   </div>
   </div>

   <br/>

  
   <div class="card">
     <img src="https://thumbs.dreamstime.com/b/black-leader-business-people-giving-speech-conference-room-african-american-man-presentation-to-associates-111002478.jpg" class="AllImages" alt="..."/>
     <div class="card-body">
       <h5 class="card-title"> Senior Level Resume </h5>
       <p class="card-text"> Do you have more than 5 years of experience as an industry leader. We will create a leadership resume for you.  </p>
       <a href="#" class="btn btn-primary"> $297.77 </a>
     </div>
     </div>


<br/>

     {/* FORM */}    {/* FORM */}    {/* FORM */}

     
<form action="/SubmitNow" method="post">


<div className = "SuccessStories"> 

<h2> Submit Your Information </h2>

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
       <label> Upload Your Resume
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

module.exports =  Resumes