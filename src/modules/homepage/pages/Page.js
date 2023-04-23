import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

class Page extends Component {
    constructor(props) {
        super(props);
    }

    renderModes() {
        return this.props.modes.map((mode,index) => {
            return <Link key={index} to={mode.path} className="w-100 d-block">{mode.label}</Link>
        })
    }

    componentDidMount() {
        this.props.resetMode();
    }

    render() {
        return (
            <Container className="my-4">
                <div className="d-grid gap-2">
                    { this.renderModes() }
                </div>
            </Container>
        )
    }
}

export default Page;
