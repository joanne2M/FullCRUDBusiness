const React = require("react");
class DefaultLayout extends React.Component{
    render() {
    return (
        <html>
            <head> 
            <link rel = "stylesheet" type="text/css" href = "/CSS/Styling.css" />
            
</head>
            
<h1> Kamara's Kareer Center </h1> 

<img class ="TopImage" src="https://static.chasecdn.com/content/services/structured-image/image.desktopLarge.jpg/articles/thumbnail-image-large/black-women-are-the-fastest-growing-group-of-entrepreneurs-but-the-job-isnt.jpg" alt="Italian Trulli"></img>

<br/>

<br/>

<div className= "bannerimage">

<div className="App">

<div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="/NewResume">Resumes</a>
  <a href="/CovaMe">Cover Letters</a>
  <a href="/LandAJob">Job Board</a>
  <a href="/LinkedO">LinkedIn Optimization</a>
  <a href="/SuccessStories"> Testimonials </a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
  </div>

  <br/>

  <div class= "AllImages"> 
<img class ="Images" src = "https://clipart.world/wp-content/uploads/2021/06/Resume-clipart-free-10.png"></img>
<img class ="Images" src = "https://media.istockphoto.com/vectors/resume-cv-clipboard-with-job-application-form-and-pen-vector-vector-id1191253491?k=20&m=1191253491&s=612x612&w=0&h=LulpSRNNHZv1PvwSBJThgDRP3ZI0HIY-7pKBqqjPVRw="></img>
<img class ="Images"src = "https://exclusive-executive-resumes.com/wp-content/uploads/2020/02/linkedin_1549994884.png"></img>
<img class ="Images" src = "https://thumbs.dreamstime.com/b/happy-business-people-around-table-meeting-18343469.jpg"></img>

     </div>
     
    <br/>


    </div>
</div>
     <br/>

 <div class= "PaymentCenter" >
     <div class = "BigDiv">
     <div class="checkout-loading">
  <div class="checkout-head">
    <svg class="shopping-icon" viewBox="0 0 24 24">
    <path fill="#ffffff55" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
</svg>
    Checkout
  </div>
  <div class="price">Select a payment method</div>
  <button class="payment-method">
    PayPal
  </button>
  <button class="payment-method">
    Credit Card
  </button>
</div>
</div>
</div>


        </html>
    )

}
}

module.exports =  DefaultLayout