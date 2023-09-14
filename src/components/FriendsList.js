import React from "react"
import { axiosWithAuth } from "./axiosWithAuth/axiosWithAuth";
import { Circles } from "react-loader-spinner";
import { Card, CardContainer, Wrapper } from "./styles/styledComponents";

export default class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            loading: false,
            filteredList: [],
        }
    }
    componentDidMount() {
        console.log("allowed")
        this.setState({ ...this.state, loading: true })
        axiosWithAuth().get("http://localhost:9000/api/friends")
            .then(res => {
                    this.setState({
                        ...this.state, friends: res.data,
                        loading: false
                    })})
            .catch(err => console.error(err.message));
    }
    remove = (id) => {
        const fil = this.state.friends.filter(n => n.id !== id);
        this.setState({ ...this.state, friends: this.state.friends.filter(n => n.id !== id), filteredList: [...this.state.filteredList, fil] })
    }
    render() {
        return (
            <div>
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
                    :
                    <Wrapper id="wrapper">
                        <h1>Friends List</h1>
                        <CardContainer >
                            {this.state.friends.map(n => {
                                return <Card key={n.id}>
                                    <div><b>Name :</b> {n.name}</div>
                                    <div><b>Age :</b> {n.age}</div>
                                    <div style={{ display: "flex", alignItems: "center" }}><span className="material-symbols-outlined">
                                        mail
                                    </span>{n.email}
                                    </div>
                                    <div onClick={() => this.remove(n.id)} style={{ display: "flex", alignItems: "center", color: "red", cursor: "pointer" }}>
                                        <span className="material-symbols-outlined">
                                            remove
                                        </span>
                                        <p style={{ fontSize: "14px" }}>remove</p>
                                    </div>
                                </Card>
                            })}
                        </CardContainer>
                    </Wrapper>
                }
            </div>
        )
    }
}