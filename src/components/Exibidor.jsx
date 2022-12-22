import React from "react"
import styled from "styled-components";

import SalvarCarrinho from "../functions/SalvarCarrinho";

const Modelo = styled.div`
    background: #ffffff;
    display: flex;
    margin: 30px 0;
    overflow: hidden;
`
const ModeloImagens = styled.div`
    display: flex;
    overflow-x: scroll;
    max-width: 500px;
`
const ModeloDados = styled.div`
    color: #000;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 14px;
`

export default function Exibidor(props){

    return props.produto ?
        <Modelo>
            
            <ModeloImagens>
                <img src={props.produto.imagens[0]} alt="foto 1" height={500}/>
                <img src={props.produto.imagens[1]} alt="foto 2" height={500}/>  
                <img src={props.produto.imagens[2]} alt="foto 3" height={500}/>  
            </ModeloImagens>

            <ModeloDados>
                <div> {props.produto.marca} </div>
                <div> {props.produto.modelo} </div>
                <div> R${props.produto.preco},00 </div>
                <div> {props.produto.descricao} </div>
                <button onClick={()=> SalvarCarrinho(props.produto.codigo)}> Adicionar ao carrinho 
                </button>
            </ModeloDados>

        </Modelo>
    :
        <Modelo>
            <ModeloDados>
                Produto nao encontrado!
            </ModeloDados>
        </Modelo>
}