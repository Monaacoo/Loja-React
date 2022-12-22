import React from "react"
import { useParams } from "react-router-dom"

import Exemplos from "../datas/Exemplos"
import Navegacao from "../components/Navegacao"
import Exibidor from "../components/Exibidor"

export default function Produto() {

    const {codigo} = useParams()
    return <>
        <Navegacao/>

        <Exibidor produto={ 
            Exemplos.find((produto) =>produto.codigo ==  codigo)
        }/>

    </>
}