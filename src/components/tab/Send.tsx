import React from 'react'
import { SwapArrow } from '../../../public'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export const Send = () => {
    return (
        <div>
            <div className='bg-[#1B1B1B] rounded-lg mb-2'>
                <div className='p-5'>
                    <div>You're sending</div>
                    <div className='flex w-full justify-center items-center flex-col mt-5'>
                        <div className='text-8xl font-bold my-2'>$0</div>
                        <div className='flex justify-center items-center gap-1'>
                            <span>0 APE</span>
                            <div className='cursor-pointer'>
                            <SwapArrow />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[2px] bg-black w-full"></div>
                <div className="flex justify-end p-5 px-7  cursor-pointer"><ChevronDownIcon/></div>
            </div>
            <div className='bg-[#1B1B1B] rounded-lg'>
                <div className='flex justify-between p-5 flex-col text-left'>
                    <div className='text-sm'>To</div>
                    <div>Wallet Address or ENS name</div>
                </div>
                
            </div>
        </div>
    )
}
