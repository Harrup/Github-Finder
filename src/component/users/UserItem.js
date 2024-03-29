import React, { Component } from 'react'

export class UserItem extends Component {
    render() {
        const {avatar_url, login ,html_url} = this.props.user
        return (
            <div className="card text-center"> 
                <img src={avatar_url} className="round-img" style={{width:"60px"}} />
                <h3>{login}</h3>
                <a href={html_url} className="btn btn-dark btn-sm my-1">MORE</a>
            </div>
        )
    }
}

export default UserItem
