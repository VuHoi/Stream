import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import { Link, animateScroll as scroll } from 'react-scroll'


class NavApp extends Component {
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
    scrollToBottom() {
      return  scroll.scrollToBottom();
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    render() {
        return (
            <div>

                <Navbar className="fixed-top container"  light expand="sm">
                    <NavbarBrand href="/">Live Stream</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="p-3"  activeClass="active" to="header" spy={true} smooth={true} offset={50} duration={500} >Giới thiệu</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="p-3"  activeClass="active" to="subject" spy={true} smooth={true} offset={50} duration={500}>
                               Chủ đề </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="p-3"  activeClass="active" to="news" spy={true} smooth={true} offset={50} duration={500}>Tin tức</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="p-3 "   activeClass="active" to="guide" spy={true} smooth={true} offset={50} duration={500}>Hướng dẫn</Link>
                            </NavItem>
                            <div style={{marginTop:'-8px'}}>
                            <UncontrolledDropdown nav inNavbar  >
                                <DropdownToggle nav >
                                    Tài khoản
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                       Đăng nhập
                                    </DropdownItem>
                                    <DropdownItem>
                                       Đăng kí
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Đăng xuất
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavApp;
