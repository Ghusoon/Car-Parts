import React, { Component } from "react";
import{Container} from 'reactstrap';
import Navbar from '../../Components/Navbar';
import "./about.css"

class About extends Component {


    render() {
        return (
            <div>
            <Navbar />
            <img className="img-fluid"  src="https://files.slack.com/files-pri/T8JRPQE2V-FBTCCTHJB/image.png" alt="logo" width= "1600px"
            height="500px"/>
            <Container>
            <div className="aboutP">
            <h1> About Us </h1>
            <p>We are pleased to service retail customers, insurance companies, body shops, garages, and dealerships and are able 
              to locate even the hardest to find parts available for our customers.  All of our parts are “clean recycled” OEM parts 
              acquired from insurance automobile auctions.  In order to strive to provide the best customer service possible, we are 
              happy to offer video of most engines running and tested, extended warranties on our parts, daily delivery and shipping 
              within the state of Florida, and as always, nationwide shipping to our out-of-state customers.
           </p>
              </div>
              </Container>
          </div>
        )
}
}

export default About;