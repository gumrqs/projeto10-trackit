import styled from "styled-components"
import img from './Rectangle 14.png'
import { useState, useEffect } from "react"
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import axios from "axios";

export default function TelaHabitos(){
    const { tasks, setTasks } = useContext(UserContext);
    console.log(tasks, "entrei no habits com context")
    const [criar, setCriar] = useState(false)

    function CriarHabito(resposta){
        if(resposta==="clicado"){
            setCriar(true)
            console.log(criar," AQUI OOO ")
        }

    }


    useEffect(() => {
		const promessa = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, {
            headers: {'Authorization': `Bearer ${tasks.token}`}
        });
        
		promessa.then(resposta => {

            console.log(resposta, "SOCORRO DEUS")
		});
        
	}, []);




    return (
        
    <Body>
         <Topo>
            <Texto>
                Trackit
            </Texto>
            <ImgTopo src={img} />
        </Topo>

        {
            criar === false
            ?
            <>          
                <VerHabitos>
                     
                         Meus hábitos
                    
                    <CaixaIcone>
                        <ion-icon onClick={()=>CriarHabito("clicado")} name="add-outline"></ion-icon>
                     </CaixaIcone>
                 </VerHabitos>

                <SemHabito>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                 </SemHabito>
        </>
            :
            <>
            <VerHabitos>
                <texto>
                    Meus hábitos
                </texto>
                <CaixaIcone>
                    <ion-icon onClick={()=>CriarHabito("clicado")} name="add-outline"></ion-icon>
                </CaixaIcone>
            </VerHabitos>
            <CriandoHabito>
                TO CRIANDO AQUI
            </CriandoHabito>
            <SemHabito>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </SemHabito>
        </>
        }
        
    </Body>
    
    )
}
const Body = styled.div`
background-color: #F2F2F2 ;
height:100vh ;
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
height: 51px ;
object-fit:cover;
object-position:center ;
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
const VerHabitos = styled.div `
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
padding-top: 98px;
box-sizing: border-box ;
padding-left: 17px;
display: flex ;
justify-content: space-between ;
`
const CaixaIcone = styled.div` 
margin-right: 18px;
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
text-align: center ;
display:flex ;
justify-content: center;
align-items:center;
;

ion-icon{ 

    font-family: Lexend Deca;
    font-size: 27px;
    font-weight: 400;
    line-height: 34px;
    color: #FFFFFF;
    width: 16px;
    height: 34px;

}
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
`
const CriandoHabito = styled.div`
background: #FFFFFF;
border-radius: 5px;
width: 340px;
height: 180px;
margin-top:20px ;
`