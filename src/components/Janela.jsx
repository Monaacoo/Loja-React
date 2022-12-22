import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    background: white;
    margin: 32px 0;
    overflow: hidden;
`

const ModeloInterno = styled.div`
    padding: 32px;
    color: black;
`

export default function Janela(props) {

    return <Modelo>
        <ModeloInterno>

            { props.children }

        </ModeloInterno>
    </Modelo>
}