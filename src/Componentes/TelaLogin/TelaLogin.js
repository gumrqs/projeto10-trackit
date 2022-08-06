
import styled from 'styled-components';
import logo from './Group 8.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect} from "react";
import axios from 'axios';

export default function TelaLogin(){

    const [emailUsuario,setEmailUsuario]= useState('');
    const [senhaUsuario,setSenhaUsuario]= useState('');
    const navigate = useNavigate();
function confirmarLogin(e){
    e.preventDefault();

    const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
        email: emailUsuario,
        password: senhaUsuario
        
    }); 
    
    requisicao.then( (resposta)=> {
        console.log(resposta, " resposta aqui")
        
        if(resposta.data.email === emailUsuario && resposta.data.password === senhaUsuario){
        navigate('/hoje')
        console.log(emailUsuario, "EMAIL AQUI")
        }
    });
    
    requisicao.catch( () => {
        if(requisicao.status !== 200){
            alert("Login errado ou já existente")
        }
    });

    setEmailUsuario('');
    setSenhaUsuario('');

        
}



    return (

            <Login>
                <ImgLogin src={logo} />
            
                <Formulario>
                <form onSubmit={confirmarLogin}>
                    <Dados>    
                        <Forms>
                                <Input type="text"  onChange={(e) => setEmailUsuario(e.target.value)} 
                                   value={emailUsuario} 
                                    required
                                    placeholder='email'
                        
                                />
                        </Forms>
                        <Forms>
                                <Input type="text" onChange={(e) => setSenhaUsuario(e.target.value)} 
                                     value={senhaUsuario}
                                    required
                                    placeholder='senha'
                                />
                         </Forms>
                         
                         <Button type='submit'> <p>Entrar</p></Button>
                        
                        <Link to="/cadastro">
                        <Cadastrar>Não tem uma conta? Cadastre-se!</Cadastrar>
                        </Link>
                    </Dados>
                </form>
            </Formulario>

            </Login>
       
    )
}

const Login = styled.div`
    width: 100%;
    background-color: #FFFF;
    display:flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
`;

const ImgLogin = styled.img`
margin-top: 68px ;
`
const Formulario = styled.div`
margin-top: 32.62px;
`
const Input =  styled.input`
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
width: 303px;
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


`
const Button = styled.button`
background: #52B6FF;
border-radius: 4.63636px;
width: 303px ;
height:45px ;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
border: none ;
color: #FFFF;
`
const Cadastrar = styled.div` 
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
margin-top:25px ;
color: #52B6FF ;
`