import React from "react";
import { StyledLogin } from "./styles/styledComponents";
import axios from "axios";


export default class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: "",
                password: "",
            },
            visible : false
        }
    }
    change = (e) => {
        this.setState({
            ...this.state, credentials:
                { ...this.state.credentials, [e.target.name]: e.target.value }
        })
    }
    login = (e) => {
        e.preventDefault(); 
        axios.post("http://localhost:9000/api/login",this.state.credentials)
        .then(res=> {
            window.localStorage.setItem("token", JSON.stringify(res.data.token))
            this.props.nav("/FriendList");
        })
        .catch(err=> console.error(err.message)); 
    }
    render() {
        return (
            <StyledLogin>
                <div id="loginTop">
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7915728/user-icon-sm.png" />
                    <h2>Login</h2>
                </div>
                <form onSubmit={this.login}>
                    <div className="positioned" >
                        <input type="text" value={this.state.credentials.username} placeholder="Username" name="username" onChange={(e) => this.change(e)} />
                        <span id = "visible" className="material-symbols-outlined">
                            account_circle
                        </span>
                    </div>
                    <div className="positioned">
                        <input type={this.state.visible ? "password" : "text" }placeholder="Password" value={this.state.credentials.password} name="password" onChange={(e) => this.change(e)} />
                        <img onClick={()=>this.setState({...this.state, visible  : !this.state.visible})} 
                        className="visible" src={!this.state.visible ? "https://cdn.icon-icons.com/icons2/2406/PNG/512/eye_visible_hide_hidden_show_icon_145988.png"
                        :"https://cdn.icon-icons.com/icons2/2406/PNG/512/eye_slash_visible_hide_hidden_show_icon_145987.png" }/>
                    </div>
                    <div className="positioned">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </StyledLogin>
        )
    }
}