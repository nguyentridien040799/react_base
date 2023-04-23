import React, {Component} from "react";
import {Link} from "react-router-dom";

class Page extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.exploreMode();
    }

    render() {
        return (
            <div>
                <p className="my-4">
                    City
                </p>
                <Link to="/" className="w-100 d-block">Back</Link>
            </div>
        )
    }
}

export default Page;
