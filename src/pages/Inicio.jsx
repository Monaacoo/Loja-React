import React from "react"

import Navegacao from "../components/Navegacao"
import Principal from "../components/Principal"

import Exemplos from "../datas/Exemplos"

export default function Inicio() {

    return <>
        <Navegacao/>
        <Principal catalogo={ Exemplos }/>
    </>
}