import styled from "styled-components";
import { useState } from "react";


export default function Habito ({nome, dias, id}){
    console.log(dias, "OS DIAS AQUI");

const [diaHabitoUsuario, setDiaHabitoUsuario] = useState([])
const semana=['S','T', 'Q', 'Q', 'S', 'S', 'D']


if(diaHabitoUsuario.length < 7){
    for(let i=0; i<semana.length; i++){
        let DiaSemana= i+1;
        let igualdade = false;
        for(let j=0; j<dias.length; j++){
            if(dias[j] === DiaSemana){
                diaHabitoUsuario.push(<DiaSelecionado>{semana[i]}</DiaSelecionado>);
                igualdade= true;
            }
        }
        if(igualdade===false){
            diaHabitoUsuario.push(<DiaNselecionado>{semana[i]}</DiaNselecionado>)
        }
    }
}

    return(
        <CorpoHabito>

        <TituloHabito>
            {nome}
        </TituloHabito>
        
        <DiasSemana>
                {diaHabitoUsuario}
        </DiasSemana>


        </CorpoHabito>
    );
}
const CorpoHabito = styled.div`
height: 91px ;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 10px ;
display:flex ;
flex-direction: column ;
justify-content:center;
padding: 13px ;
box-sizing: border-box ;
`
const DiaSelecionado = styled.div `
background: #CFCFCF;
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
line-height: 25px;
margin-right: 4px ;
color: #FFFFFF;
`
const DiasSemana = styled.div`
width:100%;
height: 91px ;
display: flex ;
`
const DiaNselecionado = styled.div`
background: #FFFF;
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
`
const TituloHabito = styled.div `
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;
margin-bottom: 8px ;
`