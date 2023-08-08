import  { Fragment } from "react";
import React from "react";
import "./Home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
class Body extends React.Component{
    render(){
        return(
            <Fragment>
           <Row>
            <Col>
             <div id="english1" className="container">
               <h1 id="english"> Certify your English <br /> proficiency today.</h1>

               <img src="./tick.svg" alt="" />  <span>Test online anytime, anywhere</span> <br />
               <img src="./tick.svg" alt="" />  <span>Finish in 1 hour and get results in 2 days</span> <br />
               <img src="./tick.svg" alt="" />  <span>Accepted by over 4000 universities</span> <br />
         <Link to="/register"> <button className="btn btn-primary">PRACTICE FREE</button></Link>  
               </div></Col> <Col> <img src="./duke.svg" alt="" /></Col> 
               
           </Row>
               
<div className="container-fluid ">
               <h4>On demand, anywhere in the world</h4>
               <div className="fast gap-5">
             <Row>
                <Col sm={4}><img src="./conveient.svg" alt="" />
                <br /> 
                
               <h6 id="con" className="text-primary fw-bold fs-5">Convenient</h6> 
  <p id="para">Take the test online anywhere, anytime — no traveling to a test center or appointment needed</p>
                

     </Col>
                 <Col sm={4}><img src="./fast.svg" alt="" />
                          
               <h6 id="con" className="text-primary fw-bold fs-5">                
  Fast</h6> 
  <p id="para">Get your results within 48 hours of completing the test, and share it with anyone, immediately  </p>
                
                
                            
                 </Col>  
                <Col sm={4}><img src="./afford.svg" alt="" />
                         
               <h6 id="con" className="text-primary fw-bold fs-5">Affordable</h6> 
  <p id="para">   A fraction of the cost of other tests. Send your scores to an unlimited number of
   institutions for free </p>  
                          </Col>
             </Row></div>
               </div>

<img id="rocket" src="./rocket.svg" alt="" />
               <div id="container1" className="container-fluid">

             <p id="con1" className="text-primary fw-bold fs-1">Send results to every school on your list for free</p>


             <p id="con2">Thousands of universities around the world accept the Duolingo 
English Test. You can  <br /> send your results to as many of them as you want, for free.</p>  
<br />
<button id="con3" className="btn btn-primary">VIEW INSTITUTIONS</button> <br /> <br />

               </div>

               <div id="accurate" className="container-fluid">
                <div className="accurate">
                    <Row>
                        <Col>
               <h3 id="english"> Accurate results in minutes</h3>
<div  id="quick1"  className="d-flex">
               <img src="./quick1.svg" alt="" /> {} <h5 className="text-primary fs-5 fw-semibold">Quick setup </h5> 
              <span className="text-primary">5 MINUTES</span> </div>
               <span id="quick3">An introduction that walks you through the test rules and requirements</span>  <br />
               


               <div  id="quick1"  className="d-flex">
               <img src="./quick2.svg" alt="" />{} <h5 className="text-primary fs-5 fw-semibold">Adaptive test </h5> 
               <span className="text-primary">45 MINUTES</span> </div>
               <span id="quick3">A series of different questions that evaluate your English skills</span>  <br />





               <div  id="quick1"  className="d-flex">
               <img src="./quick3.svg" alt="" />{} <h5 className="text-primary fs-5 fw-semibold"> Writing and speaking sample </h5> 
               <span className="text-primary --bs-info-bg-subtle">              
10 MINUTESS</span> </div>
               <span id="quick3">Open-ended prompts that are shared with institutions alongside your score</span>  <br />



              <br /><br />
          <a href="https://youtu.be/avhEAqbccus">    <button id="watch" className="btn text-dark "> <img src="./button.svg" alt="" /> {}
WATCH WALKTHROUGH VIDEO</button></a>

               </Col>


               <Col>    <img src="./computer.svg" alt="" /></Col>
                    </Row>
               </div>
             
               </div>





{/* 

               <div className="get container-fluid">

               <div>
                <Row>
                    <Col sm={4}><img src="./get.svg" alt="" /></Col> <Col sm={6}>
                               <br />      
                 <h2 className="text-info">Get started</h2> <br />
<p> Sign up now and certify your English proficiency today. Test online anytime, 
anywhere. Finish in 1 hour and get results in 2 days. Share your results with 4,000+ institutions.</p>
</Col>
           <Col sm={1}><img src="./get2.svg" alt="" /></Col>
                </Row>

                <button  id="getbutton" className="btn btn-warning">PRACTICE FREE</button>

                <button id="getbutton1" className="btn btn-warning">PURCHASE A TEST</button>



</div>
 <br /> <br />
<div  id="end" className="container-fluid bg-light" >
  
  
<img src="./logo.svg" alt="" /> <br />
    <Row>
        <Col sm={3}>
<div id="language" lassName="container">
    <span className="fw-light">Site Language</span> <br /> <br /> 
    <select name="" id="site1">
          <option value="">English</option>
        <option value="">Tamil</option>
        <option value="">Japanese</option>
        <option value="">English</option>
        <option value="">Español</option>
        <option value="">Français</option>
        <option value="">한국어</option>
        <option value="">Português</option>
          <option value="">Русский</option>
        <option value="">ภาษาไทย</option>
        <option value="">Türkçe</option>
        <option value="">Українською</option>
        <option value="">Tiếng Việt</option>
        <option value="">中文</option>
        <option value="">中文 (繁體)</option>
        <object data="" type="">日本語</object>
        <option value="">Deutsch</option>
        
<option value="">Italiano</option>  <option value="">Bahasa Indonesia</option>
  <option value="">Magyar</option>  
<option value="">हिंदी</option>

     
    </select>
    <br /> <br /> <br />
    <img src="./youtube.svg" alt="" />
  <a href=""className="fw-light">Youtube</a>  <br />
<img src="./twiter.svg" alt="" />
<a href=""className="fw-light">Twitter</a> <br />
    <img src="./insta.svg" alt="" /> 
    <a href=""className="fw-light">Instagram</a>    <br />
    <img src="./indeed.svg" alt="" />
    <a href=""className="fw-light">Linkedin</a>      <br />
    <img src="./facebook.svg" alt="" />
    <a href=""className="fw-light">Facebook</a>    <br />
    
    
    
    
    </div>




    </Col>
    <Col>
    
    <div className="taking"><h4>Taking the Test</h4>
    <a href="">Overview</a>
<a href="">Accepting Institutions</a>
<a href="">Student Stories</a>
<a href="">Prepare</a>
<a href="">Official Test Guide</a>
<a href="">Resources</a>
<a href="">Accommodations</a>
<a href="">Practice Free</a>
<a href="">Purchase the Test</a></div> 
</Col>

<Col>







    
    <div className="taking"><h4>Accepting the Test</h4>
    <a href="">Overview</a>
<a href="">Test Scoring</a>
<a href="">Access Program</a>
<a href="">Test Security
</a>
<a href="">Test Readiness Guide</a>
<a href="">Resources</a>
<a href="">Accepting Institutions</a>
<a href="">Send Test Invitations</a>
</div> 
</Col>
<Col>









    <div className="taking"><h4>Test research</h4>
    <a href="">Overview</a>
<a href="">Publications</a>
<a href="">Standards</a>
<a href="">Our Team
</a>
<a href="">Grants and Awards</a>
<a href="">Blog</a>

</div> 
</Col>




<Col>

    <div className="taking"><h4>Help & Support</h4>
    <a href="">Help Center</a>
<a href="">Terms</a>
<a href="">Privacy</a>

</div> 
</Col>
    </Row>

</div>

               </div> */}
               
                </Fragment>
        )
    }
}
export default Body;