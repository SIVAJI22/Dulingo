import  { Fragment } from "react";
import React from "react";
import "./Home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
export const Ends= function(){
    return(
        <Fragment>


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

  <Link to="/register"> <button  id="getbutton" className="btn btn-warning">PRACTICE FREE</button></Link>

    <Link to="/register">    <button id="getbutton1" className="btn btn-warning">PURCHASE A TEST</button></Link> 



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
<a href="https://www.youtube.com/c/DuolingoEnglishTest"className="fw-light">Youtube</a>  <br />
<img src="./twiter.svg" alt="" />
<a href="https://twitter.com/duolingoentest"className="fw-light">Twitter</a> <br />
<img src="./insta.svg" alt="" /> 
<a href="https://www.instagram.com/duolingoenglishtest/"className="fw-light">Instagram</a>    <br />
<img src="./indeed.svg" alt="" />
<a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFqyfaEoU4ugQAAAYfwNqXwBuSinwewboBIZeR-dRVFCOBpoksJ3O3TEwY2-ISaXDf20MOfrZ_0hgYBnDNRssAOgLY-aUQYLT8EPzNLJ1GbCA2SgH-G3VLtoIZnyCQaePaVW44=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fduolingo-english-test-%2F"
className="fw-light">Linkedin</a>      <br />
<img src="./facebook.svg" alt="" />
<a href="https://www.facebook.com/duolingoenglishtest/"className="fw-light">Facebook</a>    <br />




</div>




</Col>
<Col>

<div className="taking"><h4>Taking the Test</h4>
<a href="">Overview</a>
<a href="">Accepting Institutions</a>
<a href="/student">Student Stories</a>
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
</div>

        </Fragment>
    )
}