import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    renderCurrentMode() {
        if(this.props.homepageReducer.exploreMode) {
            return <Navbar.Text>Current Mode: Explore</Navbar.Text>;
        } else if(this.props.homepageReducer.challengeMode) {
            return <Navbar.Text>Current Mode: Challenge</Navbar.Text>;
        } else if(this.props.homepageReducer.todayExampleMode) {
            return <Navbar.Text>Current Mode: Today Example</Navbar.Text>;
        } else {
            return ''
        }
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Link to="/" className="text-dark text-decoration-none display-6 mr-4">Arc Learning App</Link>
                    { this.renderCurrentMode() }
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Header)
