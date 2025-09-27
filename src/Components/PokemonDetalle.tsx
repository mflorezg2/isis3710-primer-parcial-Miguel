
import React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl";

interface PokemonD {
  name: string;
  image:string;
  height: number;
  weight: number;
  abilities: string[];
  types:string[];
}

const PokemnoDetalle = ({name,image,height,weight,abilities,types}:PokemonD)=>{
    const t = useTranslations("Detail");
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">{name} - {t("DP")}</h1>
                <div className="grid grid-cols-2">
                    <div>
                    <Image src={image} alt={name} width={250} height={250} unoptimized />
                    </div>
                    <div className="flex flex-col">
                        <p>{t("height")}{height}</p>
                        <p>{t("weigth")}{weight}</p>
                        <div>
                            <p>{t("abilities")}</p>
                            <ul className="list-disc list-inside">
                            {abilities.map((a) => (
                                <li key={a}>{a}</li>
                            ))}
                            </ul>
                        </div>
                        <div>
                            <p>{t("types")}</p>
                            <ul className="list-disc list-inside">
                            {types.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PokemnoDetalle;