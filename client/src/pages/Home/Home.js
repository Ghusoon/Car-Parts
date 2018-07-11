import React, { Component } from "react";
import{Container} from 'reactstrap';
import Form from '../../Components/Form';
import Media from '../../Components/Media';
import Navbar from '../../Components/Navbar'

class Home extends Component {


    render() {
        return (
            <div>
            <Navbar />
          <Container>
          <Form />
          <Media />
          </Container>
          </div>
        )
}
}

export default Home;