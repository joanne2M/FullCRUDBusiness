const React = require("react");
class DefaultLayout extends React.Component{
    render() {
    return (
        <html>
            <head> 
            <link rel = "stylesheet" type="text/css" href = "/CSS/Styling.css" />
            
</head>

<h1> Do you have a Success Story? Share with us </h1>
<p class = "Homepage"> <a href="http://localhost:3000/"> Go Back to Homepage </a> </p>

<div class ="YTest"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/pIduMpjj3sQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

<img class = "Arrow" width="100" height="200" src="https://media1.giphy.com/media/VBveiwJDEjt254XhYp/giphy.gif?cid=ecf05e47cwyo1f0psa393bhp3lfyehshi5p6x6uvp5wyrmst&rid=giphy.gif&ct=s"></img>

<form action="/SubmitNow" method="post">


<div className = "SuccessStories"> 

<h2> We Want to Hear From You! </h2>
     
     <label> Name </label>
     <input type = "text" name = "name"/>
     
     <br/>

     <label> Age </label>
     <input type = "text" name = "age"/>
     <br/>

     <label> Title </label>
     <input type = "text" name = "Title" />
     <br/>

     <label> City, State </label>
     <input type = "text" name = "CityState" />
     <br/>

     <label> SuccessStory </label>
     <input type = "text" name = "SuccessStory"/>
     <br/>
     
     <label> Salary Increase </label>
     <input type = "text" name = "SalaryIncrease"/>
     <br/>

    <div id="display-image">
       <label> Upload Professinal Photo
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
module.exports =  DefaultLayout