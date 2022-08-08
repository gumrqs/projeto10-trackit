import styled from "styled-components"
import { useState, useEffect } from "react"
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import axios from "axios";
import Habito from "./Habito";

export default function TelaHabitos(){
    const { tasks, setTasks } = useContext(UserContext);
    const [criar, setCriar] = useState(true)
    const [verHabitos, setVerHabitos] = useState([])
    const [adicionarHabitos, setAdicionarHabitos] = useState(false)
    


/*     function selecionarData(resposta){
        console.log(resposta, "qual que é ?")
        if(resposta === 1 ){
        setSelecionarDia(true);
        console.log(selecionarDia, "dia selecionado")
        }                   
    } */


const [atualizadorHabitos, setAtualizadorHabitos] = useState(true)

    useEffect(() => {
		const promessa = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, {
            headers: {'Authorization': `Bearer ${tasks.token}`}
        });
        
		promessa.then(resposta => {
            setVerHabitos(resposta.data)
		});
        

        
	}, [atualizadorHabitos]);

    console.log(verHabitos, "ver habitos")
    useEffect(()=>{
        if(verHabitos.length!==0){
            setCriar(false);
        }

    },[verHabitos]);
   

    return (
        
    <Body>
         <Topo>
            <Texto>
                Trackit
            </Texto>
            <ImgTopo src={tasks.image} />
        </Topo>
            {
                criar === true
                ?
            <>          
                <VerHabitos>
                    Meus hábitos
                    <CaixaIcone>
                        <ion-icon onClick={()=> setAdicionarHabitos(true)} name="add-outline"></ion-icon>
                    </CaixaIcone>
                </VerHabitos>
            {
                adicionarHabitos ?  <AddHabito setAdicionarHabitos={setAdicionarHabitos} setAtualizadorHabitos={setAtualizadorHabitos} atualizadorHabitos={atualizadorHabitos}/> : <></>
            }
                
                
                <SemHabito>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                 </SemHabito>
            </>
            :
            
            <>
                <VerHabitos>
                    Meus hábitos
                    <CaixaIcone>
                        <ion-icon onClick={()=>setAdicionarHabitos(true)} name="add-outline"></ion-icon>
                    </CaixaIcone>
                 </VerHabitos>

                {
                adicionarHabitos ?  <AddHabito setAdicionarHabitos={setAdicionarHabitos} setAtualizadorHabitos={setAtualizadorHabitos} atualizadorHabitos={atualizadorHabitos}/> : <></>
                }
               

                 <HabitosInseridos>
                     {verHabitos.map((habito, index)=> <Habito  key={index} nome={habito.name} dias={habito.days} id={habito.id}/>)}
                </HabitosInseridos>
            </>
        }
        <Footer>
            <InformacaoFooter>
                 Hábitos
            </InformacaoFooter>
            <InformacaoFooter>
                Histórico
            </InformacaoFooter>
            <Progresso>
                
            </Progresso>
        </Footer>

    </Body>
    
    )
}

function AddHabito({setAdicionarHabitos, setAtualizadorHabitos, atualizadorHabitos}){
    const [selecionarDia1, setSelecionarDia1] = useState(true);
    const [selecionarDia2, setSelecionarDia2] = useState(true);
    const [selecionarDia3, setSelecionarDia3] = useState(true);
    const [selecionarDia4, setSelecionarDia4] = useState(true);
    const [selecionarDia5, setSelecionarDia5] = useState(true);
    const [selecionarDia6, setSelecionarDia6] = useState(true);
    const [selecionarDia7, setSelecionarDia7] = useState(true);
    const [arrayDiasSelecionados, setArrayDiasSelecionados] = useState([]);
    const [habito, setHabito] = useState('');
    const { tasks, setTasks } = useContext(UserContext);

    function selecionarDia(dia,selecionado){
       if(selecionado === true ){
            arrayDiasSelecionados.push(dia);
            setArrayDiasSelecionados([...arrayDiasSelecionados])
       }
       if(selecionado === false){
            let arrayDiasSelecionadosFiltrado = arrayDiasSelecionados.filter(VerificarDias);
            setArrayDiasSelecionados([...arrayDiasSelecionadosFiltrado])
       }

       function VerificarDias(numero){
        if(numero === dia){

            return false;
        }
        if( numero !== dia){
            return true;
        }

    }
    console.log(arrayDiasSelecionados, "DIAS SELECIONADOS ")

    }
function enviarHabitos(e){
    e.preventDefault();

    const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
        name: habito,
        days: arrayDiasSelecionados
        
    }, {headers: {'Authorization': `Bearer ${tasks.token}`}}); 
    requisicao.catch( () => {
        if(requisicao.status !== 200){
            alert("Login errado ou já existente")
        
        }
    });
    requisicao.then(()=>{
        setAdicionarHabitos(false);
        setAtualizadorHabitos(!atualizadorHabitos)
    })

}
    
console.log(arrayDiasSelecionados, "NAO AGUENTO MAIS")

    return(
        <CriandoHabito>
        <Dados >
            <form onSubmit={enviarHabitos} >
                <Forms>
                    <Input type="text"  onChange={(e) => setHabito(e.target.value)} 
                        value={habito} 
                        required
                        placeholder='nome do hábito'
                    />
                </Forms>
                <DiasSemana>
                    {
                        selecionarDia7 ?                         
                        <DiaNselecionado onClick={()=> {setSelecionarDia7(false); selecionarDia(7,true)}}>
                            D
                        </DiaNselecionado> :
                        <DiaSelecionado onClick={()=> {setSelecionarDia7(true); selecionarDia(7,false)}}>
                            D
                        </DiaSelecionado>
                        
                    }
                    { 
                       selecionarDia1 ?                         
                        <DiaNselecionado onClick={()=> {setSelecionarDia1(false); selecionarDia(1,true)}}>
                            s
                        </DiaNselecionado> :
                        <DiaSelecionado onClick={()=> {setSelecionarDia1(true); selecionarDia(1,false)}}>
                            s
                        </DiaSelecionado>
                    }
                    { 
                       selecionarDia2 ?                         
                        <DiaNselecionado onClick={()=> {setSelecionarDia2(false); selecionarDia(2,true)}}>
                            T
                        </DiaNselecionado> :
                        <DiaSelecionado onClick={()=> {setSelecionarDia2(true); selecionarDia(2,false)}}>
                            T
                        </DiaSelecionado>
                    }
                    { 
                       selecionarDia3 ?                         
                        <DiaNselecionado onClick={()=> {setSelecionarDia3(false); selecionarDia(3,true)}}>
                            Q
                        </DiaNselecionado> :
                        <DiaSelecionado onClick={()=> {setSelecionarDia3(true); selecionarDia(3,false)}}>
                            Q
                        </DiaSelecionado>
                    }
                    { 
                       selecionarDia4 ?                         
                        <DiaNselecionado onClick={()=> {setSelecionarDia4(false); selecionarDia(4,true)}}>
                            Q
                        </DiaNselecionado> :
                        <DiaSelecionado onClick={()=> {setSelecionarDia4(true); selecionarDia(4,false)}}>
                            Q
                        </DiaSelecionado>
                    }
                    { 
                       selecionarDia5 ?                         
                        <DiaNselecionado onClick={()=> {setSelecionarDia5(false); selecionarDia(5,true)}}>
                            s
                        </DiaNselecionado> :
                        <DiaSelecionado onClick={()=> {setSelecionarDia5(true); selecionarDia(5,false)}}>
                            s
                        </DiaSelecionado>
                    }
                    { 
                       selecionarDia6 ?                         
                        <DiaNselecionado onClick={()=> {setSelecionarDia6(false); selecionarDia(6,true)}}>
                            s
                        </DiaNselecionado> :
                        <DiaSelecionado onClick={()=> {setSelecionarDia6(true); selecionarDia(6,false)}}>
                            s
                        </DiaSelecionado>
                    }
                    
                </DiasSemana>
                 <ComponenteBotao>
                     <Cancelar onClick={()=> setAdicionarHabitos(false)}>
                     cancelar
                     </Cancelar>
                 <Button type='submit'> <p>Salvar</p></Button>
                 </ComponenteBotao>
            </form>
        </Dados>
    </CriandoHabito>
    )
}


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

const DiaNselecionado  = styled.div`
background-color: #FFFF; 
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
const DiasSemana = styled.div`
width:100%;
height: 91px ;
display: flex ;
`
const Corpo = styled.div`
width: 100%;
`
const Body = styled.div`
background-color: #F2F2F2 ;
height:auto;
width: 100%;
height:100vh ;
display: flex ;
flex-direction: column ;
align-items: center ;
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
border-radius:50% ;
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
margin-bottom: 20px;
width: 100% ;
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
 ;
`
const CriandoHabito = styled.div`
background: #FFFFFF;
border-radius: 5px;
width: 94%;
height: auto;
padding:18px ;
display: flex;
flex-direction: column ;
justify-content: space-between ;
box-sizing: border-box ;
margin-bottom:12px ;

`
const HabitosInseridos = styled.div `
width: 90% ;
padding-bottom: 90px ;
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
`
const Progresso = styled.div` 
width: 91px;
height: 91px;
border-radius: 50%;
background: #52B6FF;
position: fixed ;
bottom: 8px;
left: 37% ;
`

const Input =  styled.input`
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
width: 100%;
height:45px ;
color:#DBDBDB ;
padding-left: 11px;
box-sizing: border-box ;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
::placeholder{
   color: #DBDBDB;
}
`
const Forms = styled.div `
    margin-bottom: 6px ;

`
const Dados = styled.div`
width:100% ;
height: 100%;
display: flex;
flex-direction: column ;
justify-content: space-between ;
`
const Button = styled.button`
background: #52B6FF;
border-radius: 4.63636px;
width: 84px ;
height:35px ;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
border: none ;
color: #FFFF;
`
const ComponenteBotao = styled.div` 
display: flex ;
margin-left:148px ;
`
const Cancelar = styled.div` 
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #52B6FF;
display: flex;
align-items: center;
justify-content: center ;
width:84px ;
height: 35px;
`