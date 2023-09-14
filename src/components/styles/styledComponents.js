import styled from "styled-components";


export const StyledDiv = styled.div`
height : 100vh;
width : 100%;
background-color : whitesmoke; 
display : flex;
justify-content  :center;
align-items : flex-start;
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