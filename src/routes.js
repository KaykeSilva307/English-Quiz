import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Criadores from "./Pages/Criadores";
import Gramatica from "./Pages/Gramatica";
import Quiz from "./Pages/Quiz";
import Tentativas from "./Pages/Tentativas";
import Error from './Pages/Error'

import Header from "./Componentes/Header";


function RotasApp(){
    return(
        <BrowserRouter basename="/English-Quiz">
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/quiz" element={ <Quiz/>}/>
                <Route path="/gramatica" element={ <Gramatica/>}/>
                <Route path="/tentativas" element={ <Tentativas/> }/>
                <Route path="/criadores" element={ <Criadores/> }/>

                <Route path="*" element={ <Error/> }/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default RotasApp;