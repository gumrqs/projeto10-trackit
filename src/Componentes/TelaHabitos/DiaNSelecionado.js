import styled from "styled-components"

export default function DiaNselecionado({children, click}){
    return(
        <DiaClicado click={click} >
                {children}
        </DiaClicado>
    )

}
const DiaClicado  = styled.div`
background-color:${(props) => (props.click ? 'red' : '#FFFF')}; 
border: 1px solid #D5D5D5;
border-radius: 5px;
width: 30px;
height: 30px;
display: flex ;
justify-content: center ;
align-items: center ;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
margin-right: 4px ;
line-height: 25px;
color: #DBDBDB;
`;
