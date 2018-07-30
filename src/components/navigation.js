import React from 'react';
import Brand from './brand'
import Link from 'gatsby-link'
import { css } from 'glamor'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

let linkstyle = css({
    textDecoration: "none",
    color: 'rgba(0, 0, 0, .5)',
    ':hover': {
        textDecoration: "none",
        color: 'rgba(0, 0, 0, .7)',
    },
    ':visited': {
        textDecoration: "none",
        color: 'rgba(0, 0, 0, .5)',
    }
    
})

let activestyle = css({
    color:"red"
})

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (

            
                <Navbar color="light" light expand="lg">
                    <NavbarBrand href="/"><Brand /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-md-auto clearfix" navbar>
                            <NavItem>
                                <NavLink><Link to="/" className={`${linkstyle}`}>Home</Link></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink> <Link to="/gallery" className={`${linkstyle}`} activeClassName={`${activestyle}`}>Gallery</Link> </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/shop" className={`${linkstyle}`} activeClassName={`${activestyle}`}>Shop</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/about" className={`${linkstyle}`} activeClassName={`${activestyle}`}>About</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/news" className={`${linkstyle}`} activeClassName={`${activestyle}`}>News</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/contact" className={`${linkstyle}`} activeClassName={`${activestyle}`}>Contact</Link></NavLink>
                            </NavItem>
                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                  </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                  </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            



        )
    }
}