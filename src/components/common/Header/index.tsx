import { DropdownMenu, Button, Text } from '@radix-ui/themes';
import Logo from '../../logo/Logo';
const Header = () => {

    return (
        <div className='z-10 fixed top-0 p-5 px-10 flex w-full items-center text-white'>
            <div className='flex gap-5 items-center'>
            <Logo />
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
            <div className='left-[20%] relative'>
                <input type="text" className='rounded-full bg-transparent py-2 px-10 w-[483px] min-w-96 border-[1px] placeholder:text-white' placeholder='Search tokens and NFT collections' />
                <div className='absolute  bg-[#1B1B1B] p-1 px-3 rounded-lg top-1 right-8 translate-x-1/2 cursor-pointer hover:shadow-2xl transition-all ease-in-out duration-200 hover:bg-[#313131]'>/</div>
            </div>
        </div>
    );
};

export default Header;




