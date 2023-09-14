import React from "react"
import { axiosWithAuth } from "./axiosWithAuth/axiosWithAuth";
import axios from "axios";

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