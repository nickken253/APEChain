import React from 'react'
import { Swap } from './Swap'
import { SwapArrow, USDCIcon, LogoSVGMini } from '../../../public'
export const Limit = () => {
    const [value, setValue] = React.useState(1);
    const [valueExpiry, setValueExpiry] = React.useState(1);
    const handleChange = (id: number) => {
        setValue(id)
    }
    const handleChangeExpiry = (id: number) => {
        setValueExpiry(id)
    }
    return (
        <div>
            <div className='bg-[#1B1B1B] rounded-lg p-5 mb-2'>
                <div className='flex justify-between'>
                    <div className="flex items-center">When 1 <div className='flex mx-1'><LogoSVGMini /></div> Ape is worth</div>
                    <div><SwapArrow /></div>
                </div>
                <div className='flex justify-between items-center my-2'>
                    <input className='bg-transparent text-white outline-none w-fit max-w-[60%] font-bold sm:text-5xl text-4xl' type="text" defaultValue={3140.59} />
                    <div className='gap-1 flex items-center'>
                        <USDCIcon />
                        <div>USDC</div>
                    </div>
                </div>
                <div className='sm:flex gap-4 grid grid-cols-2 text-center'>
                    <div className={`px-4 py-1 border rounded-full cursor-pointer bg-[#131313] ${value == 1 ? 'active bg-[#242424] font-bold' : ''}`} onClick={() => handleChange(1)}>Market</div>
                    <div className={`px-4 py-1 border rounded-full cursor-pointer bg-[#131313] ${value == 2 ? 'active bg-[#242424] font-bold' : ''}`} onClick={() => handleChange(2)}>+1%</div>
                    <div className={`px-4 py-1 border rounded-full cursor-pointer bg-[#131313] ${value == 3 ? 'active bg-[#242424] font-bold' : ''}`} onClick={() => handleChange(3)}>+5%</div>
                    <div className={`px-4 py-1 border rounded-full cursor-pointer bg-[#131313] ${value == 4 ? 'active bg-[#242424] font-bold' : ''}`} onClick={() => handleChange(4)}>+10%</div>
                </div>
            </div>
            <Swap />
            <div className='flex justify-between items-center my-2'>
                <div>Expiry</div>
                <div className='sm:flex gap-4 items-center grid grid-cols-2'>
                    <div className={`px-2 py-1 border rounded-full cursor-pointer bg-[#131313] ${valueExpiry == 1 ? 'active bg-[#242424] font-bold' : ''}`} onClick={() => handleChangeExpiry(1)}>1 day</div>
                    <div className={`px-2 py-1 border rounded-full cursor-pointer bg-[#131313] ${valueExpiry == 2 ? 'active bg-[#242424] font-bold' : ''}`} onClick={() => handleChangeExpiry(2)}>1 week</div>
                    <div className={`px-2 py-1 border rounded-full cursor-pointer bg-[#131313] ${valueExpiry == 3 ? 'active bg-[#242424] font-bold' : ''}`} onClick={() => handleChangeExpiry(3)}>1 month</div>
                    <div className={`px-2 py-1 border rounded-full cursor-pointer bg-[#131313] ${valueExpiry == 4 ? 'active bg-[#242424] font-bold' : ''}`} onClick={() => handleChangeExpiry(4)}>1 year</div>
                </div>
            </div>
        </div>
    )
}
