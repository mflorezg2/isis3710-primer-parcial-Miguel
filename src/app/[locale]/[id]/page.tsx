/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react"
import Image from "next/image"
import PokemnoDetalle from "@/Components/PokemonDetalle"
import { useEffect, useState } from "react";
import {useTranslations} from 'next-intl';
import { useParams } from "next/navigation";
import Head from 'next/head';




interface PokemonD {
  name: string;
  image:string;
  height: number;
  weight: number;
  abilities: string[];
  types:string[];
}

export default function Home() {
    const t = useTranslations("HomePage");
    const { id } = useParams<{id: string}>();

    const [info, setinfo] = useState<PokemonD | null>(null);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { cache: "no-store" });
        const data = await res.json();

        const normalized: PokemonD = {
          name: data.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          height: Number(data.height*10),        
          weight: Number(data.weight/10),        
          abilities:  data.abilities.map((a: any) => a.ability.name),
          types: data.types.map((t:any) => t.type.name),
        };

        setinfo(normalized);
      } catch (e: any) {
  
      }
    })();
  }, [id]);

 
  if (!info) return <p>Cargando…</p>;
      return(
        <div className="bg-green-200">
            <Head>
                <title>Detalle del Pokémon - PokeApp</title>
                <meta name="Consulta información detallada de cada Pokémon: estadísticas, 
                tipos, habilidades y otros datos relevantes de la primera generación."
                content="Esta es una descripción de la página." />
            </Head>
            <PokemnoDetalle
                name={info.name}
                image={info.image}
                height={info.height}
                weight={info.weight}
                abilities={info.abilities}
                types={info.types}
                />
        </div>
      )
}