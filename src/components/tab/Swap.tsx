import React from 'react'
import { ArrowDownIcon } from '@radix-ui/react-icons'
import { SwapIcon } from '../../../public'
import { Select } from '@radix-ui/themes'
export const Swap = () => {
    const handleChange = () => {
        console.log('change')
    }
    return (
        <div className='text-white relative'>
            <div className='bg-[#1B1B1B] rounded-lg p-5'>
                <div className="">You pay</div>
                <Card/>
            </div>
            <div className="absolute bg-[#1B1B1B] rounded-lg aspect-square w-10 flex items-center justify-center border-2 border-black -translate-x-1/2 -translate-y-1/2 left-1/2 top-[50%] cursor-pointer" onClick={() => handleChange}><ArrowDownIcon /></div>
            <div className='bg-[#1B1B1B] rounded-lg p-5 mt-2'>
                <div className="">You receive</div>
                <Card/> 
            </div>
        </div>
    )
}


const Card = () => {
    const handleChange = () => {
        console.log('change')
    }
    return (
        <div className='flex justify-between'>
            <input className='bg-transparent text-white outline-none w-fit max-w-[60%] font-bold  sm:text-5xl text-4xl' type="text" defaultValue={0} onKeyUp={() => handleChange} />
            <div>
                <Select.Root defaultValue="APE">
                    <Select.Trigger radius='full' />
                    <Select.Content color='indigo'>
                        <Select.Group>
                            <Select.Item value="APE"><div className='flex gap-4 justify-center items-center p-2'><SwapIcon />APE</div></Select.Item>
                            <Select.Item value="BTC"><div className='flex gap-4 justify-center items-center p-2'><SwapIcon />BTC</div></Select.Item>
                            <Select.Item value="ETH"><div className='flex gap-4 justify-center items-center p-2'><SwapIcon />ETH</div></Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </div>
        </div>
    )
}