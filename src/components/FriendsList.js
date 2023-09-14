import React from "react"

export default class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends : [],
        }
    }
    componentDidMount() {
        console.log("allowed")
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}