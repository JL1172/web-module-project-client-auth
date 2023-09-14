import React from "react"
import { axiosWithAuth } from "./axiosWithAuth/axiosWithAuth";
import axios from "axios";
import { StyledLogin } from "./styles/styledComponents";
import { Circles } from "react-loader-spinner";

export default class AddFriend extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            email: "",
            loading: false,
        }
    }
    componentDidMount() {
        this.setState({ ...this.state, loading: true });
        setTimeout(() => {
            this.setState({ ...this.state, loading: false });
        }, 100)
    }
    change = (e) => {
        this.setState({
            ...this.state,
                 [e.target.name]: e.target.value,
        })
    }
    add = (e) => {
        e.preventDefault();
        const obj = {id : Date.now(), name :
        this.state.firstname, age : Math.floor(Math.random()* 51), email : this.state.email}
        axiosWithAuth().post("http://localhost:9000/api/friends",obj)
        .then(res=> {
            console.log(res)
        })
        .catch(err=> console.error(err.message)); 
    }
    render() {
        return (
            <StyledLogin>
                {this.state.loading ?
                    <div style={{ flexDirection: "column", height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Circles
                            height="100"
                            width="100"
                            color="royalblue"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                        <h2>Fetching</h2>
                    </div>
                    : <>
                <div id="loginTop">
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7915728/user-icon-sm.png" />
                    <h2>Add a Friend</h2>
                </div>
                <form onSubmit={this.add}>
                    <div className="positioned" >
                        <input type="text" value={this.state.firstname} placeholder="First Name" name="firstname" onChange={(e) => this.change(e)} />
                        <span id="visible" className="material-symbols-outlined">
                            account_circle
                        </span>
                    </div>
                    <div className="positioned">
                        <input type="email" placeholder="email@email.com" value={this.state.email} name="email" onChange={(e) => this.change(e)} />
                        <span id="visible2" className="material-symbols-outlined">
                            mail
                        </span>
                    </div>
                    <div className="positioned">
                        <input type="submit" value="Add Friend" />
                    </div>
                </form>
                </>
    }
            </StyledLogin>
        )
    }
}