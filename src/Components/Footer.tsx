import Image from "next/image"
import React from "react"
import {useTranslations} from 'next-intl';
const Footer = () =>{
    const t = useTranslations('HomePage');
    return(
        <footer className="flex items-center space-x-100 bg-[#11463B]">
            <label className="text-white">{t("@2025 Pokémon App All rights reserved")}</label>
            <label className="text-white">{t("Developed for: ISIS3710")} </label>
        </footer>

    )
}

export default Footer;