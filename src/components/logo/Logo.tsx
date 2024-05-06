import React from 'react'
import { LogoSVG } from '../../../public';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='flex justify-center items-center gap-3'>
            <LogoSVG/>
            <div>Swap</div>
        </div>
    )
}

export default Logo;
