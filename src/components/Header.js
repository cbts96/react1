import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className="display-3">Project quan ly nhan su bang ReactJs</h1>
                <p className="lead">Va json</p>
                <hr className="my-2" />
            </div>
            </div>

        );
    }
}

export default Header;