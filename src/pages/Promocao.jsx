import React from "react"
import Exibidor from "../components/Exibidor"
import Navegacao from "../components/Navegacao"
import Exemplos from "../datas/Exemplos"

export default function Promocao(){
    return <>
        <Navegacao/>
        {
            Exemplos.map(function(produto, indice) {

                if (produto.promocao)

                    return <Exibidor key={indice} produto={ produto }/>
            })
        }
        
    
    </>
}