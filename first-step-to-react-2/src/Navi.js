import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen : false
        };
    }

    toggle(){
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Northwind App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="form1">Form Demo 1</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="form2">Form Demo 2</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <CartSummary
                            cart={ this.props.cart }
                            removeFromCart = {this.props.removeFromCart}
                        />
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
