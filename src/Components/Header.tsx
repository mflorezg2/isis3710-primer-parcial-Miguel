

import Image from "next/image"
import React from "react"
import {useTranslations} from 'next-intl';
const Header = () =>{
    const t = useTranslations('HomePage');
    return(
        <div className=" bg-red-500 flex flex-col items-center">
            <Image src="/pokemon-logo.png" alt="Imagen" width={200} height={200}/>

        </div>

    )
}

export default Header;