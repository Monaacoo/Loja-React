import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Carrinho from "./pages/Carrinho"
import Inicio from "./pages/Inicio"
import Produto from "./pages/Produto"
import Promocao from "./pages/Promocao"


export default function Rotas(){
    return <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Inicio/>}/>

                <Route path="/produto/:codigo" element={<Produto/>}/>

                <Route path="/promocao" element={<Promocao/>}/>

                <Route path="/carrinho" element={<Carrinho/>}/>
            </Routes>
        </BrowserRouter>
    
}