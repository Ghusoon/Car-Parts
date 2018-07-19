import React, { Component } from "react";
import{Container} from 'reactstrap';
import Navbar from '../../Components/Navbar';
import partImage from '../../image/vecter car logo.png';
import "./contact.css";

class Contact extends Component {


    render() {
        return (
            <div>
            <Navbar />
          <Container>
          <img src={partImage} className="img-fluid" />
          <div className="contact">
          <div class="">Address:</div>
          <div>4395 SE 95th St, Ocala, FL 34480</div>
          <br/>
          <div class="">Contact:</div>
          <div > Phone Number: 
          <br/>
          <a className="link" href="tel://1-352-307-1071">+1 (352) 307-1071</a></div>
          <div >Email address: 
          <br/>
          <a className="link" href="autowerx1@yahoo.com">autowerx1@yahoo.com</a></div>
          <br/>
          <div class="">Hours:</div>
          
          <div>
           <p> Monday   :    9am-5pm</p>
            
            <p>Tuesday:   9am-5pm</p>  
  
           <p> Wednesday: 9am-5pm</p>
  
           <p> Thursday:  9am-5pm</p>
  
            <p>Friday:    9am-5pm </p>
  
            <p>Saturday:  9am-4pm</p>
  
            <p>Sunday:    Closed</p>
       </div>
          </div>
          </Container>
          </div>
        )
}
}

export default Contact;