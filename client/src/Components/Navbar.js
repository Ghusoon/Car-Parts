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
<Navbar color="dark" dark expand="sm" className="mb-5">
 <Container>
   < NavbarBrand href="/">Car Parts </ NavbarBrand>
     <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Contact</NavLink>
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