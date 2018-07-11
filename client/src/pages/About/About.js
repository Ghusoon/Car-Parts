import React, { Component } from "react";
import{Container} from 'reactstrap';
import Navbar from '../../Components/Navbar'

class About extends Component {


    render() {
        return (
            <div>
            <Navbar />
          <Container>
         <div>about</div>
          </Container>
          </div>
        )
}
}

export default About;