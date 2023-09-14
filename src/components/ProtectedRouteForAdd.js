import { Circles } from "react-loader-spinner";
import React from "react";
import AddFriend from "./AddFriend";

export default function ProtectedAdd(props) {
    if (window.localStorage.getItem("token")) {
        return <AddFriend nav = {props.nav}/>
    } else {
        return<div style={{ flexDirection : "column",height : "100vh", width : "100%", display  :"flex", justifyContent : "center", alignItems: "center"}}>
        <Circles
    height="100"
    width="100"
    color="royalblue"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  <h2>Waiting on data, go back to sign in</h2>
  </div>
    }
}