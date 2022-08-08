import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import { useContext } from "react";

export default function TelaHistorico(){
    const { tasks, setTasks } = useContext(UserContext);
    const navigate = useNavigate();


return (<>

        <Topo>
            <Texto>
                Trackit
            </Texto>
            <ImgTopo src={tasks.image} />
        </Topo>
        <DiaDoHabito>
             Histórico
        </DiaDoHabito>
        <SemHabito>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
        </SemHabito>
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
</>)
}
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
padding-left: 17px ;
box-sizing: border-box;
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
const SemHabito = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
margin-top: 28px ;
color: #666666;
box-sizing: border-box ;
padding-left: 17px;
box-sizing: border-box;
 
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
box-sizing: border-box;
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