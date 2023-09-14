import React from "react";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";

export default function LogoutPage () {
    const nav = useNavigate(); 
    setTimeout(()=> {
        window.localStorage.clear(); 
        nav("/login")
    },400)
    return(
        <div style={{ flexDirection : "column",height : "100vh", width : "100%", display  :"flex", justifyContent : "center", alignItems: "center"}}>
            <Circles
        height="100"
        width="100"
        color="royalblue"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h2>Logging out...</h2>
      </div>
    )
}
  