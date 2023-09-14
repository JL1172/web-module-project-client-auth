import React from "react"

export default class AddFriend extends React.Component {
    constructor() {
        super();
        this.state = {
            friends : [],
        }
    }
    componentDidMount() {
        console.log("adding friends page ")
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}