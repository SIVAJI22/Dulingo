import React from "react";
import { Fragment } from "react";
import Home from "./Home";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from "./Navbar";
import "./student.css";
import { Ends } from "./ends";
export const Student = function () {
    return (
        <Fragment>

            <Nav />

            <div className="container-fludi">

                <div className="container-fluid">

                    <Row>

                        <Col sm={7}>
                            <h3 className="around" >Hear from students around the world</h3>


                            <p>Applying to higher education can be daunting, especially in another country. Hear from other students who
                                went through the process and how the Duolingo English Test helped make it easier.</p>

                            <button className="start" >GET STARTED
                            </button>
                        </Col>
                        <Col sm={4}>  <img id="space" src="./sky.svg" alt="" /></Col>

                    </Row>



                </div></div>
            <div className="word2 container-fluid">

                <img id="wordimg1" src="./movie.svg" alt="" /><br />

                <img id="wordimg2" src="./movie2.svg" alt="" /> <br />
                <h4 id="wordh4" className="words">In their own words
                </h4>
                <br />
                <p id="wordpara">We talked to students who took the Duolingo English Test on their path to higher education.  <br /> These are their stories.

                </p>


                <div className="container">
                    <Row>
                        <Col sm={6}>







                            <div className="card">

                                <iframe width="560"
                                    height="315" src="https://www.youtube.com/embed/Qt2HG-u9KYY"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>


                                <h4 className="text-rgb(26, 26, 87) d-flex justify-content-center">Yein</h4>
                                <p className="text-rgb(26, 26, 87) d-flex justify-content-center"   > University of Pennsylvania</p>


                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="card">


                                <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/Tn1HQy2Byl8" title="YouTube video player"
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>

                                <h4 className="text-rgb(26, 26, 87) d-flex justify-content-center">Scott</h4>
                                <p className="text-rgb(26, 26, 87) d-flex justify-content-center"   > Georgia Institute of Technology</p>


                            </div>


                        </Col>

                    </Row>

                    <Row>
                        <Col sm={6}>







                            <div className="card">


                                <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/NqKNsoNlt-o" title="YouTube video player"
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>




                                <h4 className="text-rgb(26, 26, 87) d-flex justify-content-center">Serena</h4>
                                <p className="text-rgb(26, 26, 87) d-flex justify-content-center"   > Barnard College</p>


                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="card">

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/wlz3k7Ca-M0"
                             title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen></iframe>

           <h4 className="text-rgb(26, 26, 87) d-flex justify-content-center">Franck</h4>
                                <p className="text-rgb(26, 26, 87) d-flex justify-content-center"   > Columbia University</p>


                            </div>


                        </Col>

                    </Row>



<Row>
    <Col sm={6}>

    <div className="card">
    <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/99d6T-MI85w" title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowfullscreen></iframe>

       <h4 className="text-rgb(26, 26, 87) d-flex justify-content-center">     Olha</h4>
                                <p className="text-rgb(26, 26, 87) d-flex justify-content-center"   > Columbia University</p>

     </div>
    </Col>
</Row>






                </div> 
                <br />
                
                <img id="wordh5" src="./blog.svg" alt="" />
                <br />
                <h4 id="wordh5" className="words"> Blog posts
                </h4> <br />
            <p id="wordh6">Visit our blog to learn more.</p>
             <br />

                <hr />
                

<div className="container-fluid">

<Row>
    <Col sm={5}>
    <img src="./bulb.svg" alt="" />

    <h3></h3>
    
    </Col>

<Col sm={7}>  <br /> <br /> <br />
<h4 id="real">Real students share their advice for studying abroad in English</h4>
<div id="profile1" className="d-flex"><img id="profile" src="./profile1.png" alt="" /> <br />
<h5>Caroline Fisher</h5>


<span id="date" className="fw-light">September 17, 2021</span>
</div>

<p>Every year, millions of students worldwide choose to study abroad. While the experience is very rewarding, it can also be challenging to live in a new place, speak a different language, and experience a new culture, in addition to navigating day-to-day university life.


</p>
<button id="read">READ MORE
</button>

</Col>


</Row>
<br /><br />
<Row>
    <Col sm={5}>
    <img src="./flask.svg" alt="" />

    <h3></h3>
    
    </Col>

<Col sm={7}>  <br /> <br /> <br />
<h4 id="real">Young people want to work and study abroad—but testing makes it difficult</h4>
<div id="profile1" className="d-flex"><img id="profile" src="./profile2.png" alt="" /> <br />
<h5>Sophie Wodzak </h5>



<span id="date" className="fw-light">May 11, 2022</span>
</div>

<p>EThe pandemic has forever altered how we approach learning, at every level
     of education. But how has it affected how talented young people feel about studying and working overseas? 
     How do they feel about the proficiency tests needed for applying to international study or work opportunities?
      The Duolingo English Test team was particularly interested in the perspective of young people migrating to the UK
       and partnered with Public First to learn more. We polled more than 1,900 students in China and India and learned 
       more about what they hope to gain from international
     study and work, as well as the obstacles they face when applying for opportunities abroad.

</p>
<button id="read">READ MORE
</button>

</Col>


</Row>


<Row>
    <Col sm={5}>
    <img src="./earth.svg" alt="" />

    <h3></h3>
    
    </Col>

<Col sm={7}>  <br /> <br /> <br />
<h4 id="real">Real students share their advice for studying abroad in English</h4>
<div id="profile1" className="d-flex"><img id="profile" src="./profile3.png" alt="" /> <br />
<h5>Mark Pavic</h5>
 


<span id="date" className="fw-light">May 6, 2021</span>
</div>

<p>We launched the Duolingo English Test in 2016 with a mission to use technology to 
    lower barriers to higher education for students everywhere. As we reflect on our five
     year journey, we are proud that our original mission endures. Delivering a secure assessment any
      time, anywhere in the world for $49, was once a North Star goal; today, with hundreds of thousands
       of test takers and over 3,000 accepting institutions, it's clear the Duolingo English Test has made
        an impact on access to higher education. We lead the testing industry in implementing technology that is 
    student-centered and provides more timely results for institutions—all while remaining reliable and secure.

</p>
<button id="read">READ MORE
</button>

</Col>


</Row>


</div>

<br /><br />

                 </div>

            <Ends />

        </Fragment>
    )
}