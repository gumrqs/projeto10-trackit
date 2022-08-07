import styled from "styled-components"
import img from './Rectangle 14.png'
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";
export default function TelaDoDia(){

    const navigate = useNavigate();
    dayjs.locale('pt-br')

    return(
    <FundoCorpo>
    <Corpo> 
        <Topo>
            <Texto>
                Trackit
            </Texto>
            <ImgTopo src={img} />
        </Topo>
        <DiaDoHabito>
        {dayjs().format('dddd, DD/MM')}
        </DiaDoHabito>
        <HabitosConcluidos>
             Nenhum hábito concluído ainda
        </HabitosConcluidos>
        <Habitos>
            <HabitoAdicionado>
                 <p>Ler 1 capítulo de livro</p>
                <InformacaoHabito>
                    <p>Sequência atual: 3 dias
                    Seu recorde: 5 dias</p>
                </InformacaoHabito>
            </HabitoAdicionado>
            <IconeHabito>
            <ion-icon name="checkbox-outline"></ion-icon>
            </IconeHabito>
        </Habitos>
        <Habitos>
            <HabitoAdicionado>
                 <p>Ler 1 capítulo de livro</p>
                <InformacaoHabito>
                    <p>Sequência atual: 3 dias
                    Seu recorde: 5 dias</p>
                </InformacaoHabito>
            </HabitoAdicionado>
            <IconeHabito>
            <ion-icon name="checkbox-outline"></ion-icon>
            </IconeHabito>
        </Habitos>
        <Habitos>
            <HabitoAdicionado>
                 <p>Ler 1 capítulo de livro</p>
                <InformacaoHabito>
                    <p>Sequência atual: 3 dias
                    Seu recorde: 5 dias</p>
                </InformacaoHabito>
            </HabitoAdicionado>
            <IconeHabito>
            <ion-icon name="checkbox-outline"></ion-icon>
            </IconeHabito>
        </Habitos>
        <Footer>

            <InformacaoFooter onClick={()=> navigate('/habitos')}>
                 Hábitos
            </InformacaoFooter>
            <InformacaoFooter>
                Histórico
            </InformacaoFooter>
            <Progresso>
                
            </Progresso>
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
`
const ImgTopo= styled.img`
margin-right:18px ;
width: 51px ;
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
const IconeHabito = styled.div`
ion-icon{
   color: #EBEBEB;
   font-size: 69px;
   margin-right: 13px ;
}
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