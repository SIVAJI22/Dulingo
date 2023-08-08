import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Body from "./Body";
import { Ends } from "./ends";
import "./Home.css"
import { Link } from "react-router-dom";
import { Nav } from "./Navbar";
class Home extends React.Component {
    render() {
      return (
<Fragment>
       {/* <div  id="nav1" className="container d-flex gap-3  fst-italic">
   
         <img id="duling" className="fw-bold " src="./logo.svg" alt="" />



         <div id="sitelanguage" class="btn-group">
         <h6  id="site" type="button" class="   d-flex justify-content-end fs-6 dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
         site language
    </h6>
  <ul id="languagedrop" class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">

<Row>
  <Col>
    
  <option value="">English</option>
        <option value="">Tamil</option>
        <option value="">Japanese</option>
        <option value="">Español</option>
        <option value="">Français</option>
        <option value="">한국어</option>
        <option value="">中文 (繁體)</option>
        <object data="" type="">日本語</object>
        <option value="">Deutsch</option>

        </Col>

        <Col>  
        <option value="">Português</option>
          <option value="">Русский</option>
    <option value="">Русский</option>
        <option value="">ภาษาไทย</option>
        <option value="">Türkçe</option>
        <option value="">Українською</option>
        <option value="">Tiếng Việt</option>
        <option value="">中文</option>
       
    
    </Col>
</Row>
  </ul>
</div>









 

 </div>  <hr />
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div id="nav" className="container-fluid bg-light text-dark shadow p-3 mb-5 bg-body-tertiary rounded">
<img id="logo" src="./logo1.svg" alt="" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li class="nav-item dropdown">
                <a className="nav-link dropdown fw-semibold text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Taking the test
                </a>
                <ul class="dropdown-menu">
<Row>
                  <Col>
             
                  <li><a id="drop1" className="dropdown-item opacity-50 " href="#">Discover</a></li>
                  <li><a id="drop" className="dropdown-item " href="#">Overview</a></li>
                  <li><a id="drop1"className="para" href="#"> Learn why the Duolingo English Test is best for you</a></li>
                
                  <li><a  id="drop"  class="dropdown-item" href="#">Accepting Institutions</a></li>
                  <li><a id="drop1"className="para" href="#">Find yours among the 4,000+ that accept results</a></li>
                
             <Link to="/student">
             <li><a   id="drop"  class="dropdown-item" href="#"> Student Stories</a></li>
                  <li><a id="drop1"className="para" href="#">Hear from students that studied abroad with the</a></li></Link>    
                  
                  </Col>
               







                  <Col>
                  
                  <li><a id="drop1" className="dropdown-item opacity-50 " href="#">   PREPARE</a></li>
                  <li><a id="drop" className="dropdown-item " href="#">Getting Ready</a></li>
                  <li><a id="drop1"className="para" href="#">Learn more about the test and how to prepare</a></li>
     
                  <li><a  id="drop"  class="dropdown-item" href="#">Test Scoring</a></li>
                  <li><a id="drop1"className="para" href="#">Learn how scoring works and what results mean</a></li>
     
                  <li><a   id="drop"  class="dropdown-item" href="#"> Practice Free</a></li>
              
                  <li><a id="drop1"className="para" href="#">Take the practice test as much as you like</a></li>
     
                  </Col>
                  <Col>
                  




                
                  <li><a id="drop1" className="dropdown-item opacity-50 " href="#">   SUPPORT</a></li>
                  <li><a id="drop" className="dropdown-item " href="#">FAQ</a></li>

                  <li><a id="drop1"className="para" href="#"> Find answers to common questions</a></li>
                
                  <li><a  id="drop"  class="dropdown-item" href="#">Accommodations</a></li>
                  
                  <li><a id="drop1"className="para" href="#">Request accommodations for your test experience</a></li>
                
                  <li><a   id="drop"  class="dropdown-item" href="#"> Create an Account</a></li>
                
                  <a  id="drop1"  className="para"  href=""> Get started now</a>
                  
                  </Col>

                  </Row>
                </ul>




              </li>
              <li class="nav-item dropdown">
                <a className="nav-link dropdown fw-semibold text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Accepting the test
                </a>
                <ul id="accepting" class="dropdown-menu">
                <Row>
           






               <Col>
             
                  <li><a id="drop1" className="dropdown-item opacity-50 " href="#">DISCOVER</a></li>
                  <li><a id="drop" className="dropdown-item " href="#">Overview</a></li>
                  <a  id="drop1"  className="para"  href=""> Strengthen your applicant pool with the DET</a>
             
                  <li><a  id="drop"  class="dropdown-item" href="#">Access Program</a></li>
                  <a  id="drop1"  className="para"  href="">Hear how the DET has supported those in need</a>
                 
                  <li><a   id="drop"  class="dropdown-item" href="#"> Accepting Institutions</a></li>
                  <a  id="drop1"  className="para"  href="">Join the 4,000+ that officially accept results</a>
                  
                  <li><a   id="drop"  class="dropdown-item" href="#"> Invite Test Takers</a></li>
                  <a  id="drop1"  className="para"  href=""> Buy test coupons and invite applicants  </a>
                  </Col>


                  
               


           <Col>
           <li><a id="drop1" className="dropdown-item opacity-50 " href="#"> LEARN MORE</a></li>
                  <li><a id="drop" className="dropdown-item " href="#">Test Scoring</a></li>
                  <a  id="drop1"  className="para"  href="">Learn how scoring works and compares to other tests</a>
             
                  <li><a  id="drop"  class="dropdown-item" href="#">Test Security</a></li>
                  <a  id="drop1"  className="para"  href="">See how our rigorous protocols maintain test integrity</a>
                 
                  <li><a   id="drop"  class="dropdown-item" href="#">Resources</a></li>
                  <a  id="drop1"  className="para"  href="">Access tools and other materials</a>
                  
                  </Col>

                  <Col>
           <li><a id="drop1" className="dropdown-item opacity-50 " href="#"> SUPPORT</a></li>
                  <li><a id="drop" className="dropdown-item " href="#">FAQ</a></li>
                  <a  id="drop1"  className="para"  href="">Find answers to common questions</a>
             
                  <li><a  id="drop"  class="dropdown-item" href="#">Create account</a></li>
                  <a  id="drop1"  className="para"  href="">Get started now</a>
                 

                  </Col> 
                  
                  
                  
                  
                   </Row>
                


                  
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a className="nav-link dropdown fw-semibold text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Test Research
                </a>


                <ul id="test" class="dropdown-menu"> 
               
                 
                <Row>
           
       

           <Col>
          
                  <li><a id="drop" className="dropdown-item " href="#"> Overview</a></li>
                  <a  id="drop1"  className="para"  href="">Learn how we’re reinventing high stakes testing</a>
             
                  <li><a  id="drop"  class="dropdown-item" href="#">Publications</a></li>
                  <a  id="drop1"  className="para"  href="">Find technical research reports and papers</a>
                 
                  <li><a   id="drop"  class="dropdown-item" href="#">Standards</a></li>
                  <a  id="drop1"  className="para"  href="">Read documentation about alignment to standards</a>
                  
                  </Col>

                  <Col>
      
                  <li><a id="drop" className="dropdown-item " href="#">Our research team</a></li>
                  <a  id="drop1"  className="para"  href="">Meet the experts researching the future of testing</a>
             
                  <li><a  id="drop"  class="dropdown-item" href="#">Grants and Awards</a></li>
                  <a  id="drop1"  className="para"  href="">See how we are supporting the research community</a>
                 
                  <li><a   id="drop"  class="dropdown-item" href="#">Blog</a></li>
                  <a  id="drop1"  className="para"  href="">Read the latest news from the Duolingo English Test</a>
                  
                  </Col>
                  </Row>
                </ul>
              </li>
            
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
           <Link to="/login">  <button class="btn btn-outline-success" type="submit">login</button> </Link>
            <Link to="register"> <button class="btn btn-outline-success" type="submit">signup</button></Link> 
            </form>
          </div>
        </div>
      </nav> */}
      <Nav/>


      <Body/>
      <Ends/>
      </Fragment>
      )
    }
  }
  export default Home;