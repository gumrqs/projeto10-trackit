import { useContext, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import UserContext from "../../Contexts/UserContext";

export default function HabitoTelaDia({titulo, sequencia, recorde, id, done, setAtualizadorHabitos, atualizadorHabitos} ){
    const[icone, setIcone] = useState(true);
    const { tasks, setTasks } = useContext(UserContext);
    const [validandoSequencia, setValidandoSequencia] = useState(true)
/* function marcarHabito(resposta){

    
} */

function verificarcheck(){
    
        const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {},{headers: {'Authorization': `Bearer ${tasks.token}`}});

         requisicao.then(()=>{
            setAtualizadorHabitos(!atualizadorHabitos)
        }) 

        if(sequencia===recorde){
            setValidandoSequencia(false)
            console.log(sequencia, sequencia, "recorde aqui")
        }
    }

function verificaruncheck(){
   
        const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {},{headers: {'Authorization': `Bearer ${tasks.token}`}});
          
        requisicao.then(()=>{
            setAtualizadorHabitos(!atualizadorHabitos)
        }) 
        
        requisicao.catch((resposta)=>{
                alert("tarefa já foi feita")
                console.log(resposta, "DO CATCH")
            }
            )
            
    }
    console.log(sequencia, "que sequencia é essa?")





console.log(id, "o Id ta aqui");

    return (
        <>
            <Habitos>
                <HabitoAdicionado>
                    <p>{titulo}</p>

                    {
                        validandoSequencia ?
                    <InformacaoHabito>
                        <p>Sequência atual: {sequencia}</p>
                        <p>Seu recorde: {recorde}</p>
                    </InformacaoHabito>
                    :
                        <InformacaoHabitoVerde>
                            <p>Sequência atual: {sequencia}</p>
                            <p>Seu recorde: {recorde}</p>
                        </InformacaoHabitoVerde>
                    }

                </HabitoAdicionado>
                
                { 
                    done ?
                    <IconeHabitoVerde onClick={verificaruncheck}>          
                    <ion-icon name="checkbox"></ion-icon>
                    </IconeHabitoVerde>
                    :
                    <IconeHabito onClick={verificarcheck}>          
                    <ion-icon name="checkbox"></ion-icon>
                    </IconeHabito>
                } 
               
            </Habitos>
        </>
    )
}
const Habitos = styled.div`
background: #FFFFFF;
border-radius: 5px;
width: 340px;
height: 94px;
display: flex ;
justify-content: space-between ;
align-items:center ;
margin-bottom: 10px ;

`
const HabitoAdicionado = styled.div `
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-left: 15px ;
}

`
const InformacaoHabito = styled.div`

p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    max-width: 148px;
    margin-left: 15px ;

}
`
const InformacaoHabitoVerde = styled.div` 
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #8FC549;
    max-width: 148px;
    margin-left: 15px ;

}
`
const IconeHabito = styled.div`
ion-icon{
   color: #EBEBEB;
   font-size: 69px;
   margin-right: 13px ;
}
`
const IconeHabitoVerde = styled.div`
ion-icon{
   font-size: 69px;
   margin-right: 13px ;
   color: #8FC549 ;
}
`