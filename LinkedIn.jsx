const React = require("react");
class LinkedIn extends React.Component{
    render() {
    return (
        <html>
            <head> 
            <link rel = "stylesheet" type="text/css" href = "/CSS/LinkedIn.css" />
            
</head>

<h5> LinkedIn Optimization </h5>
<p> <a href="http://localhost:3000/"> Go Back to Homepage </a> </p>

<div class ="YTest"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/2-kZb6EAQmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="card">
     <img src="https://www.amsivedigital.com/wp-content/uploads/2013/08/linkedin-profile-optimization1.png" class="AllImages" alt="..."/>
     <div class="card-body">
       <h5 class="card-title"> LinkedIn Optimization </h5>
       <p class="card-text"> We will optimize your LinkedIN to let others know you're looking for words and have the right SEO words for recrutiers to find you. </p>
       <a href="http://localhost:3000/" class="btn btn-primary"> $297 </a>
     </div>
     </div>

     <br/> 

    {/* FORM */}    {/* FORM */}    {/* FORM */}

     
<form action="/SubmitNow" method="post">


<div className = "SuccessStories"> 

<h2> Let's Get Your Infomration! </h2>
     
     <label> Full Name </label>
     <input type = "text" name = "name"/>
     
     <br/>

     <label> Experience Level </label>
     <input type = "text" name = "age"/>
     <br/>

     <label> LinkedIn Username </label>
     <input type = "text" name = "Title" />
     <br/>

     <label> Password </label>
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
     
     <br/>

     <input type="submit" value="Submit"/>

     </div>
     </div>

     </form>

    
        </html>
    )
}
}
module.exports =  LinkedIn