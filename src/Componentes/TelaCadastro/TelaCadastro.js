
import styled from "styled-components";
import logo from './Group 8.png'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import {ThreeDots} from 'react-loader-spinner';

export default function TelaCadastro (){


const [email,setEmail]= useState('');
const [senha,setSenha]= useState('');
const [nome,setNome]= useState('');
const [url,setUrl]= useState('');
const navigate=useNavigate();
const [isCarregando, setIsCarregando] =useState (false)
console.log("comecei ")

function confirmarLogin(e){
    e.preventDefault();
    setIsCarregando(true)
 
const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
			name: nome,
            image: url,
            password: senha
            
		});
        requisicao.catch( () => {
            if(requisicao.status !== 200){
                alert("Login errado ou já existente")
            } 
        });
        requisicao.then (()=> {
            navigate('/hoje')
            console.log("TO NO then");
        });


    setEmail('');
    setNome('');
    setSenha('');
    setUrl('');
        
}

    return (
        <Login>
            <ImgLogin src={logo} />
            
            <Formulario>
                <form onSubmit={confirmarLogin} >
                    <Dados>    
                        <Forms>
                            <Input type="email" onChange={(e) => setEmail(e.target.value)} 
                                   value={email} 
                                    required
                                    placeholder='email'
                            />
                        </Forms>
                        <Forms>
                            <Input type="text" onChange={(e) => setSenha(e.target.value)}
                                    value={senha}
                                    required
                                    placeholder='senha'
                            />
                        </Forms>
                        <Forms>
                            <Input type="text" onChange={(e) => setNome(e.target.value)}
                                    value={nome}
                                    required
                                    placeholder='nome'
                            />
                        </Forms>
                        <Forms>
                            <Input type="url" onChange={(e) => setUrl(e.target.value)}
                                    value={url}
                                    required
                                    placeholder='foto'
                            />
                        </Forms>
                        {
                            isCarregando?
                            <Button> <ThreeDots color={'white'} height={30} width={30}/></Button>
                            :
                            <Button> <p>Entrar</p></Button>
                        }
                
                        <Link to="/">
                        <Cadastrar>Já tem uma conta? Faça login!</Cadastrar>
                        </Link>
                    </Dados>
                </form>
            </Formulario>

            </Login>

    )
}
const Login = styled.div`
    width: 100%;
    height: 100vh ;
    background-color: #FFFF;
    display:flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
`;

const ImgLogin = styled.img`

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