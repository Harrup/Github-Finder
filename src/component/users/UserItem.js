import React, { Component } from 'react'

export class UserItem extends Component {
    constructor(){
        super()
        this.state = {
            login:"mojombo",    
            avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4",
            html_url:"https://github.com/mojombo"
        }
    }
    render() {
        return (
            <div className="card text-center"> 
                <img src={this.state.avatar_url} className="round-img" style={{width:"60px"}} />
                <h3>{this.state.login}</h3>
                
            </div>
        )
    }
}

export default UserItem
