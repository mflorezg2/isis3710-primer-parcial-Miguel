

import Image from "next/image"
import React from "react"
import {useTranslations} from 'next-intl';
const Header = () =>{
    const t = useTranslations('HomePage');
    return(
        <header className=" bg-[#E71309] flex flex-col items-center">
            <Image src="/pokemon-logo.png" alt="Imagen" width={200} height={200}/>

        </header>

    )
}

export default Header;