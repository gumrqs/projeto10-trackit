import styled from "styled-components"
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import HabitoTelaDia from "./HabitoTelaDia";
/* import  {  CircularProgressbar  }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ; */




export default function TelaDoDia(){
    require('dayjs/locale/pt-br');
    let nomeDia = dayjs().locale('pt-br');
    const { tasks, setTasks } = useContext(UserContext);
    const[renderizarHabitos, setRenderizarHabitos] = useState(<></>)
    const navigate = useNavigate();
    const [atualizadorHabitos, setAtualizadorHabitos] = useState(true)
    
useEffect(()=>{
const promessa= axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',{headers: {'Authorization': `Bearer ${tasks.token}`}}); 

promessa.then((resposta)=>{
    let listaDados=resposta.data;
    if(listaDados.length===0){
    console.log(resposta, "to aqui DO HOJE")
    setRenderizarHabitos(<></>);
}
if(listaDados.length!==0){
    setRenderizarHabitos(
        <>
            {listaDados.map((habito, index)=> <HabitoTelaDia key={index} done={habito.done} titulo={habito.name}  sequencia={habito.currentSequence} recorde={habito.highestSequence} id={habito.id} setAtualizadorHabitos={setAtualizadorHabitos} atualizadorHabitos={atualizadorHabitos}/>)}
        </>
    )
}
})
},[atualizadorHabitos])


console.log(renderizarHabitos, "to aqui DO HOJE")


    return(
    <FundoCorpo>
    <Corpo> 
        <Topo>
            <Texto>
                Trackit
            </Texto>
            <ImgTopo src={tasks.image} />
        </Topo>
        <DiaDoHabito>
        {nomeDia.format('dddd, DD/MM')}
        </DiaDoHabito>
        <HabitosConcluidos>
             Nenhum hábito concluído ainda
        </HabitosConcluidos>
       
           {renderizarHabitos}
        
        <Footer>

            <InformacaoFooter onClick={()=> navigate('/habitos')}>
                 Hábitos
            </InformacaoFooter >
            <Progresso onClick={()=> navigate('/hoje')}>
                Hoje

            </Progresso>
            <InformacaoFooter onClick={()=> navigate('/historico')}>
                Histórico
            </InformacaoFooter>

        </Footer>   
    
    </Corpo>
    </FundoCorpo>
    )
}
const FundoCorpo = styled.div`
background-color:#F2F2F2 ;
height:100vh ;
`

const Corpo = styled.div `
width:100% ;
padding-left:17px;
box-sizing: border-box ;
`
const Topo = styled.div`
width:100%;
height: 70px;
background-color: #126BA5;
display: flex ;
justify-content: space-between ;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position:fixed ;
top:0;
left:0 ;
z-index: 1 ;
`
const ImgTopo= styled.img`
margin-right:18px ;
width: 51px ;
border-radius: 50% ;
object-fit:cover;
object-position:center ;
height: 51px ;
`
const Texto = styled.div `
margin-left: 18px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;

`
const DiaDoHabito = styled.div `
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
padding-top: 98px ;
background-color:#F2F2F2 ;
box-sizing: border-box ;
text-transform:capitalize ;
`
const HabitosConcluidos = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
margin-bottom: 28px ;
`


const Footer = styled.div`
width: 100%;
height: 70px;
position: fixed ;
bottom: 0;
left: 0 ;
background-color: #FFFF; 
display: flex ;
align-items: center ;
justify-content: space-between ;
margin-top: 90px;
`
const InformacaoFooter = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
padding-left: 36px ;
box-sizing: border-box ;
padding-right: 31px ;
`
const Progresso = styled.div` 
display:flex ;
align-items: center ;
justify-content: center ;
width: 91px;
height: 91px;
border-radius: 50%;
background: #52B6FF;
margin-bottom: 30px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #FFFFFF;

`