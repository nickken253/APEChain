'use client'
import { DropdownMenu, Button, Text } from '@radix-ui/themes';
import Logo from '../../logo/Logo';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { useState } from 'react';
const Header = () => {
    const [isActiveNav, setActiveNav] = useState(false);
    const changeActiveNav = () => {
        setActiveNav(!isActiveNav);
    }

    return (
        <div className='z-10 fixed bg-[#004fe2d7] sm:bg-transparent top-0 p-5 md:px-10 px-3 flex w-full items-center text-white justify-between md:justify-normal'>
            <div className='mr-5'>
                <Logo />
            </div>
            <div className='sm:flex gap-5 items-center hidden'>
                <div>Explore</div>
                <div>NFTs</div>
                <div>Pool</div>
                <div>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button className='bg-transparent' color="amber">
                                <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>ABC</DropdownMenu.Item>
                            <DropdownMenu.Item>XYZ</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
            <div className='md:left-[20%] relative w-[90%] sm:w-auto'>
                <input type="text" className='rounded-full w-full bg-transparent py-2 px-10 md:w-[483px] md:min-w-96 border-[1px] placeholder:text-white placeholder:text-sm sm:placeholder:text-base' placeholder='Search tokens and NFT collections' />
                <div className='absolute  bg-[#1B1B1B] p-1 px-3 rounded-lg top-1 right-8 translate-x-1/2 cursor-pointer hover:shadow-2xl transition-all ease-in-out duration-200 hover:bg-[#313131]'>/</div>
            </div>
            <div className='text-3xl sm:hidden mx-3' onClick={changeActiveNav}>
                <HamburgerMenuIcon />
            </div>
            {isActiveNav && 
            <div className='absolute w-screen h-screen top-0 left-0 bg-[#004EE2] p-3 py-10'>
                <div onClick={changeActiveNav} className='mx-4 mb-5 flex justify-end'><Cross1Icon /></div>
                <div className='flex flex-col divide-y-2 gap-5 mx-4 text-xl'>
                    <div>Explore</div>
                    <div>NFTs</div>
                    <div>Pool</div>
                </div>
            </div>
}
        </div>
    );
};

export default Header;




