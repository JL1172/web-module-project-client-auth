import React from "react";
import { StyledLogin } from "./styles/styledComponents";

export default class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: "",
                password: "",
            }
        }
    }
    change = (e) => {
        this.setState({
            ...this.state, credentials:
                { ...this.state.credentials, [e.target.name]: e.target.value }
        })
    }
    render() {
        return (
            <StyledLogin>
                <div id="loginTop">
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7915728/user-icon-sm.png" />
                    <h2>Login</h2>
                </div>
                <form>
                    <div className="positioned" >
                        <input type="text" value={this.state.credentials.username} placeholder="Username" name="username" onChange={(e) => this.change(e)} />
                        <span id = "visible" className="material-symbols-outlined">
                            account_circle
                        </span>
                    </div>
                    <div className="positioned">
                        <input type="password" placeholder="Password" value={this.state.credentials.password} name="password" onChange={(e) => this.change(e)} />
                        <img className="visible" src="https://cdn.icon-icons.com/icons2/2406/PNG/512/eye_slash_visible_hide_hidden_show_icon_145987.png" />
                    </div>
                    <div className="positioned">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </StyledLogin>
        )
    }
}