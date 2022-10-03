const React = require("react");
class Jobboard extends React.Component{
    render() {
    return (
        <html>
            <head> 
            <link rel = "stylesheet" type="text/css" href = "/CSS/Jobboard.css" />
            
</head>

<h1> Check Out our Job Board! </h1>
<p> <a href="http://localhost:3000/"> Go Back to Homepage </a> </p>


<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Glowing Search Bar</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />

    <link
      href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap"
      rel="stylesheet"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>
  </head>

  <div class="wrapper">
    <div class="container">
      <form role="search" method="get" class="search-form form" action="">
        <label>
            <span class="screen-reader-text">Search for...</span>
            <input type="search" class="search-field" placeholder="Type something..." value="" name="s" title="" />
        </label>
        <input type="submit" class="search-submit button" value="&#xf002" />
    </form>
    </div>
  </div>

<br/>

<h5> Subscribe to My YouTube Channel for The Latest Job Updates </h5>

<div class = "YouTubeVid">
<iframe width="560" height="315" src="https://www.youtube.com/embed/u1pGdMNhVzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/> 

{/* JOB BOARD */}

<h5> Our Top Three Job Boards </h5>

<div class="card">
     <img src="https://coda.newjobs.com/api/imagesproxy/ms/niche/images/articles/Social-Media-Jobs.jpg" class="AllImages" alt="..."/>
     <div class="card-body">
       <h5 class="card-title"> Media Jobs</h5>
       <p class="card-text"> Are you intersted in writing or being on TV? Be the first to know about media jobs </p>
       <a href="#" class="btn btn-primary"> ACCESS JOB BOARD </a>
     </div>
     </div>

     <br/>

     <div class="card">
     <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="AllImages" alt="..."/>
     <div class="card-body">
       <h5 class="card-title"> Tech Jobs </h5>
       <p class="card-text"> Are you intersted in Tech or IT? Be the First to Know about Tech Jobs </p>
       <a href="#" class="btn btn-primary"> ACCESS JOB BOARD </a>
     </div>
     </div>

     <br/>

<div class="card">
<img src="https://coda.newjobs.com/api/imagesproxy/ms/cms/content30/images/highest-paying-sales-job.jpg" class="AllImages" alt="..."/>
<div class="card-body">
  <h5 class="card-title"> Remote Sales Jobs </h5>
  <p class="card-text"> ARe you intersted in a remote Sales position? Find out the base pay, salary and commission </p>
  <a href="#" class="btn btn-primary"> ACCESS JOB BOARD </a>
</div>
</div>

    <script src="index.js"></script>
    
</html>



</html>

)

}
}

module.exports =  Jobboard