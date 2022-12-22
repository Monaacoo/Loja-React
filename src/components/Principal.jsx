import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 32px 0;
`

const Produto = styled.div`
    background: #fff;
    padding: 8px;
    transition: 0.4s;
    &:hover {
        transform: scale(1.2) rotateZ(4deg);
        transition: 0.2s;
    }
`

const ProdutoImagem = styled.img`
    height: 220px;
    object-fit: cover;
    width: 220px;
`

const ProdutoDados = styled.div`
    text-align: center;
`

export default function Principal(props) {

    return <Modelo>
        {
            props.catalogo.map(function(produto) {

                return <Produto>

                    <a href={ "/produto/" + produto.codigo }>

                        <ProdutoImagem src={ produto.imagens[0] } alt="foto do produto"/>

                        <ProdutoDados>
                            <div> { produto.modelo } </div>
                            <div> R$ { produto.preco },00 </div>
                        </ProdutoDados>

                    </a>
                    
                </Produto>

            })
        }
    </Modelo>
}