import React, { Component } from "react";
import{Container} from 'reactstrap';
import Navbar from '../../Components/Navbar';
import Footer from "../../Components/Footer";
import partImage from '../../image/vecter car logo.png';

import "./about.css"

class About extends Component {


    render() {
        return (
            <div>
            <Navbar />
            <Container>
            <div className="aboutP">
            <h1> About Us </h1>
            <br/>
            <p>We are pleased to service retail customers, insurance companies, body shops, garages, and dealerships and are able 
            to locate even the hardest to find parts available for our customers.  All of our parts are “clean recycled” OEM parts 
            acquired from insurance automobile auctions.  In order to strive to provide the best customer service possible, we are 
            happy to offer video of most engines running and tested, extended warranties on our parts, daily delivery and shipping 
            within the state of Florida, and as always, nationwide shipping to our out-of-state customers.
            </p>
            </div>
            <img src={partImage} className="img-fluid" id="imge" />
              </Container>
              <Footer />
          </div>
        )
}
}

export default About;