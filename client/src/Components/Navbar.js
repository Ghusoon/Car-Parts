import React, { Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
}from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class AppNavbar extends Component{
state = {
    isOpen: false
}
 toggle = () => {
     this.setState({
         isOpen: !this.state.isOpen
     });
 }

 render(){
     return (
<div>
<Navbar color="secondary" dark expand="sm" className="mb-5">
 <Container>
   < NavbarBrand href="/">Auto Werx</ NavbarBrand>
     <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>                    
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Find A Part</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
 </Container>
</Navbar>
</div>
     )
 }
}

export default AppNavbar;