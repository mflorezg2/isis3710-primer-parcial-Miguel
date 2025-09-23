import Image from "next/image"
import React from "react"
import {useTranslations} from 'next-intl';
const Footer = () =>{
    const t = useTranslations('HomePage');
    return(
        <div className="bg-green-800 flex items-center space-x-100">
            <label className="text-white">{t('@2025 Pokémon App. All rights reserved')}</label>
            <label className="text-white">{t('Developed for: ISIS3710')} </label>
        </div>

    )
}

export default Footer;