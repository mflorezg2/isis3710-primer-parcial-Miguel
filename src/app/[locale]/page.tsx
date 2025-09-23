"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface Pokemon {
  name: string;
  url: string;
}

export default function Home() {
  const t = useTranslations("HomePage");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
      const data = await res.json();
      setPokemons(data.results);
    })();
  }, []);

  const getIdFromUrl = (url: string) => {
    const match = url.match(/\/pokemon\/(\d+)\//);
    return match ? match[1] : "";
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <section>
        <h1 className="text-xl text-center">{t("PokemonList")}</h1>
        <div className="grid grid-cols-4 gap-5 mt-4">
          {pokemons.map((p) => {
            const id = getIdFromUrl(p.url);
            const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return (
              <div key={p.name} className="flex flex-col items-center">
                <Image
                  src={img}
                  alt={p.name}
                  width={160}
                  height={160}
                  unoptimized  
                />
                <p className="text-sm">Nombre: {p.name}</p>
                <p>ID: {id}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
