import React, { Component } from "react";
import{Container} from 'reactstrap';
import Navbar from '../../Components/Navbar'

class Contact extends Component {


    render() {
        return (
            <div>
            <Navbar />
          <Container>
          <div class="">Address:</div>
          <div>4395 SE 95th St, Ocala, FL 34480</div>
          <br/>
          <div class="">Contact:</div>
          <div>352-307-1071</div>
          <div>autowerx1@yahoo.com</div>
          <br/>
          <div class="">Hours:</div>
          <div>
            Monday:    9AM-5PM
            <br/>
            Tuesday:   9AM-5PM
            <br/>
            Wednesday: 9AM-5PM
            <br/>
            Thursday:  9AM-5PM
            <br/>
            Friday:    9AM-5PM
            <br/>
            Saturday:  9AM-4PM
            <br/>
            Sunday:    Closed
          </div>
          </Container>
          </div>
        )
}
}

export default Contact;