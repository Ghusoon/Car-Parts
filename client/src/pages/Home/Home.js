import React, { Component } from "react";
import{Container,Row,Col} from 'reactstrap';
// import Form from '../../Components/Form';
import Media from '../../Components/Media';
import Navbar from '../../Components/Navbar';
import "./home.css"
import carParts from './carParts.json'

class Home extends Component {
    state = {
        carParts,
        value: '',
        parts:false
    };



    handleChange =(event)=> {
        this.setState({value: event.target.value});
      }
    
      handleSubmit =(event) => {
        event.preventDefault();
        const show =this.state.parts;
        this.setState({parts:!show})
      }

    render() {
        return (
            <div className="header">
            <Navbar />
            <Row>
            <Col>
            <div className="body" >
            <form className="form-group">
            
            <h1 className="head"> The best Parts Seller</h1>
            <label htmlFor="topic" className="topic">
            <strong>Search your Part</strong>
            
            </label>
            <select className="form-control"  onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            
            </select>
            <label htmlFor="topic" className="topic">
            
            </label>
            <select className="form-control" onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            
            </select>
            <label htmlFor="topic" className="topic">
            
            </label>
            <select className="form-control"  onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            
            </select>
            <label htmlFor="topic" className="topic">
            
            </label>
            <select className="form-control" onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            
            </select>
            <label htmlFor="topic" className="topic">
            
            </label>
            <select className="form-control"  onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            
            </select>
            
            </form>
            <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-lg btn-secondary"
            >
            Submit
            </button>
            
            </div>
            </Col>
            </Row>
            <Container className="header">
            { this.state.parts ?<div >
                {this.state.carParts.map(carPart =>(
                    <Media 
                    
                    key={carPart.id}
                    name={carPart.name}
                    image={carPart.image}
                    price={carPart.price}
                    description={carPart.description}
                    
                    />
                )
            )}
            </div>:null}
            
            
            
            
            </Container>
            </div>
        )
    }
}

export default Home;