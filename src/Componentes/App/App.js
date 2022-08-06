import TelaCadastro from "../TelaCadastro/TelaCadastro";
import TelaLogin from "../TelaLogin/TelaLogin";
import TelaHabitos from "../TelaHabitos/TelaHabitos";
import TelaDoDia from "../TelaDoDia/TelaDoDia";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaHistorico from "../TelaHistorico/TelaHistorico";


export default function App(){
    return (
        <>
        <BrowserRouter>
		
			<Routes>
				<Route path="/" element={<TelaLogin />} />
				<Route path="/cadastro/" element={<TelaCadastro />}/>
                <Route path="/habitos/" element={<TelaHabitos />}/>
                <Route path="/hoje/" element={<TelaDoDia />}/>
                <Route path="/historico/" element={<TelaHistorico />}/>
			</Routes>
		</BrowserRouter>
        </>
    )
}