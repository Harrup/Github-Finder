import React, { Component } from 'react'

export class NavBar extends Component {
    static defaultProps = {
        title:"Github Finder",
        icon:"fab fa-github"
    }
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i class={this.props.icon} /> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default NavBar
