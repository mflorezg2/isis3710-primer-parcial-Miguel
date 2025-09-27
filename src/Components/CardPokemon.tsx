

import React from "react";
import Image from "next/image";

interface pokemoListado{
    nombre:string
    tipo:string 
    imagen:string
}
const CardPokemon = ({nombre,tipo,imagen}:pokemoListado) =>{
    return(
        <div>
            <Image src={imagen} alt={nombre} width={160} height={160} unoptimized  />
            <p>{nombre}</p>
            <p>{tipo}</p>
        </div>
    )
}

export default CardPokemon;