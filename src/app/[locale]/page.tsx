"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import CardPokemon from "@/Components/CardPokemon";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
  type: string;
}

export default function Home() {
  const t = useTranslations("HomePage");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
      const data = await res.json();
      const pokemonsConTipo = await Promise.all(
        data.results.map(async(p:Pokemon)=>{
          const res2 = await fetch(p.url);
          const data2 = await res2.json();
          const tipo = data2.types[0]?.type.name;;
          return { ...p, type: tipo };
        })
      );
      setPokemons(pokemonsConTipo);
    })();
  }, []);

  const getIdFromUrl = (url: string) => {
    const match = url.match(/\/pokemon\/(\d+)\//);
    return match ? match[1] : "";
  };



  return (
    <div className="container mx-auto flex flex-col items-center justify-center bg-green-200">
      <section>
        <h1 className="text-xl text-center font-bold">{t("PokemonList")}</h1>
        <div className="grid grid-cols-4 gap-5 mt-4">
          {pokemons.map((p) => {
            const id = getIdFromUrl(p.url);
            const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return (
              <Link key={id} href={`/${id}`} className="block">
                <div key={p.name} className="flex flex-col space-x-4 items-center">
                  <CardPokemon
                    nombre={p.name}
                    imagen={img}
                    tipo={p.type}  
                  />
                  
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
