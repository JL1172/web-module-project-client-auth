import styled from "styled-components";


export const StyledDiv = styled.div`
height : 100vh;
width : 100%;
background-color : whitesmoke; 
display : flex;
justify-content  :center;
align-items : center;
`

export const StyledHeading = styled.div`
position : fixed;
top : 0;
display : flex;
justify-content : space-evenly;
align-items : center;
width : 100%;
border-bottom : 2px solid black;
height : 5rem;
background-color : whitesmoke;
.symbols {
    position : relative;
}
a {
    display : flex;
    align-items : center;
    text-decoration : none;
    color : black;
    transition : .15s ease-in-out;
    &:hover  {
        color : royalblue;
        transition : .15s ease-in-out;
    }
    &::before {
        content : "";
        position : absolute;
        top : 24px;
        right: 2rem;
        transition : .15s ease-in-out;
    }
}
#a:hover::before {
    border : 1px solid royalblue;
    transform : scaleX(3300%);
    transition : .15s ease-in-out;
}
#a2::before {
    right : 2.5rem;
}
#a2:hover::before {
    border : 1px solid royalblue;
    transform : scaleX(4500%);
    transition : .15s ease-in-out;
}
#a3::before {
    right : 3.5rem;
}
#a3:hover::before {
    border : 1px solid royalblue;
    transform : scaleX(5750%);
    transition : .15s ease-in-out;
}
#a4::before {
    right : 3.5rem;
}
#a4:hover::before {
    border : 1px solid royalblue;
    transform : scaleX(5900%);
    transition : .15s ease-in-out;
}

`
export const StyledLogin = styled.div`
box-shadow : 0 0 2em lightgray;
border-radius : 2rem;
height : 30rem;
width : 25rem;
img {
    width : 5rem;
    height : 5rem;
}
#loginTop {
    background-color : rgb(49, 175, 145);
    padding : 2rem;
    border-top-left-radius : 2rem;
    border-top-right-radius : 2rem;
}
form {
    display : flex;
    justify-content : center;
    align-items : center;
    height : 15rem;
    flex-direction : column;
}
.positioned {
    position : relative;
    display :flex;
    align-items : center;
    justify-content : flex-end;
    #visible2, #visible, .visible {
        width : 25px;
        height : 25px;
        position : absolute;
        top  : 2.2rem;
        margin-right : .2rem;
        transition : .2s;
    }
    input {
        margin-top : 2rem;
        height : 1.75rem;
        width : 15rem;
    }
    input[type=text], input[type=password], input[type=email] {
        outline : 1px solid rgb(117, 214, 191);;
        border : none;
        border-radius : 2rem;
        padding-left : 1rem;
        transition : .1s;
        &:hover {
            box-shadow : 0 0 10px rgb(117, 214, 191);
            transition : .1s;
        }
    }
    input[type=submit] {
        background-color   : rgb(117, 214, 191);
        border : none;
        border-radius : 2rem;
        height : 2rem;
        outline : 2px solid rgb(117, 214, 191);
        outline-offset : -4px;
        transition : .1s ease-in-out; 
        &:hover {
            outline-offset : 4px;
            transition : .1s ease-in-out; 
        }
        &:active {
            outline-offset : 10px;
        }
    }
} 
`
export const CardContainer = styled.div`
display : flex;
justify-content : space-evenly;
align-items : center;
height : 100vh;
width : 100%;
flex-wrap : wrap;
margin-top : 2rem;
`

export const Card = styled.div`
    flex-basis  :40rem;
    box-shadow : 0 0 1em lightgray;
    flex-grow : 2;
    height : 13rem;
    width : 20rem;
    display :flex;
    flex-direction : column;
    align-items : flex-start;
    padding-left : 3rem;
    justify-content : space-evenly;
    background-color : white;
    &:hover {
        filter : brightness(95%); 
    }
    div {
        font-size : 24px;
    }
`
export const Wrapper = styled.div`
display : flex;
flex-direction : column;
    h1 {
        margin-top : 20rem;
    }
`