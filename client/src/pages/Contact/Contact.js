import React, { Component } from "react";
import{Container} from 'reactstrap';
import Navbar from '../../Components/Navbar';
// 
import "./contact.css";
import {Phone, EnvelopeO, Location2, Calendar} from "../../Components/icon"
import Map from "../../Components/Map";
import Footer from "../../Components/Footer";
// 

class Contact extends Component {


    render() {
        return (
            <div>
            <Navbar />
          <Container>

          <div className="contact">
          
          <Phone /> 
          
          <br/>
          <a className="link" href="tel://1-352-307-1071">+1 (352) 307-1071</a>
          <br/>
          <br/>
          <EnvelopeO />
          <br/>
          
          <a className="link" href="autowerx1@yahoo.com">autowerx1@yahoo.com</a>
          <br/>
          <br/>

          <Location2 />
          <br/>
          <div><a className="link" href="https://www.google.com/maps/place/4395+SE+95th+St,+Ocala,+FL+34480/@29.0859464,-82.0767598,17z/data=!3m1!4b1!4m5!3m4!1s0x88e7d18613ac9265:0x86d3a1c01d36d1bc!8m2!3d29.0859417!4d-82.0745711?hl=en&authuser=0">4395 SE 95th St, Ocala, FL 34480</a></div>
          <br/>
          </div >
          <div className="calinder">
          <Calendar />
          <br/>
          <div className="hours">
          

          <pre>Monday:    <spam style={{color:"rgb(39, 103, 172)"}}>9am-5pm</spam></pre>
            
            <pre>Tuesday:   <spam style={{color:"rgb(39, 103, 172)"}}>9am-5pm</spam></pre>  
  
           <pre>Wednesday: <spam style={{color:"rgb(39, 103, 172)"}}>9am-5pm</spam></pre>
  
           <pre>Thursday:  <spam style={{color:"rgb(39, 103, 172)"}}>9am-5pm</spam></pre>
  
            <pre> Friday:    <spam style={{color:"rgb(39, 103, 172)"}}>9am-5pm</spam> </pre>
  
            <pre>Saturday:  <spam style={{color:"rgb(39, 103, 172)"}}>9am-4pm</spam></pre>
  
            <pre>Sunday:     <spam style={{color:"#883301"}}>Closed</spam></pre>
       </div>
          </div >
          <div className="map">
          <Map />
          </div>
          </Container>
          <Footer />
          </div>
        )
}
}

export default Contact;