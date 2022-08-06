
import styled from 'styled-components';
import logo from './Group 8.png'
import { Link } from 'react-router-dom';
export default function TelaLogin(){

    return (

            <Login>
                <ImgLogin src={logo} />
            
                <Formulario>
                <form /* onSubmit={confirmarLogin} */>
                    <Dados>    
                        <Forms>
                                <Input type="text" /* onChange={(e) => setNome(e.target.value)} */ 
                                   /*  value={nome} */
                                    required
                                    placeholder='email'
                        
                                />
                        </Forms>
                        <Forms>
                                <Input type="email" /* onChange={(e) => setCpf(e.target.value)} */
                                    /* value={cpf} */
                                    required
                                    placeholder='senha'
                                />
                         </Forms>
                        <Button className='guardar-dados'> <p>Entrar</p></Button>
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