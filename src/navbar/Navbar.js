import React, { Component } from "react";
import CoolButton from "../coolbutton/CoolButton.js"

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="https://bulma.io/">Home</a>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <CoolButton isSmall isDanger className="is-rounded my-class">Sign up</CoolButton>
                            <CoolButton isSmall isSuccess>Login</CoolButton>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;