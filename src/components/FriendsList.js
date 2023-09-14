import React from "react"
import { axiosWithAuth } from "./axiosWithAuth/axiosWithAuth";
import { Circles } from "react-loader-spinner";
import { Card, CardContainer } from "./styles/styledComponents";

export default class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            loading: false,
        }
    }
    componentDidMount() {
        console.log("allowed")
        this.setState({ ...this.state, loading: true })
        axiosWithAuth().get("http://localhost:9000/api/friends")
            .then(res => {
                this.setState({ ...this.state, friends: res.data, loading: false })
            })
            .catch(err => console.error(err.message));
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
                    <CardContainer >
                        {this.state.friends.map(n => {
                            return <Card key={n.id}>
                                <div><b>Name :</b> {n.name}</div>
                                <div><b>Age :</b> {n.age}</div>
                                <div style = {{display : "flex", alignItems : "center"}}><span className="material-symbols-outlined">
                                    mail
                                </span>{n.email}
                                </div>
                            </Card>
                        })}
                    </CardContainer>
                }
            </div>
        )
    }
}