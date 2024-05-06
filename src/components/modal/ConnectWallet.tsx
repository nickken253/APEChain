import React from 'react'
import { APEIcon, MetaMaskIcon, CoinbaseIcon, WalletConnectIcon } from '../../../public'

type IConnectWalletProps = {
    onClick?: () => void;
}

export const ConnectWallet = (props: IConnectWalletProps) => {
    return (
        <div className='bg-[#131313] max-w-[30%] rounded-lg p-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center z-100 '>
            <div className="bg-[#004EE2] rounded-full px-5 p-2 cursor-pointer" >Connect Wallet</div>
            <div className='flex flex-col gap-2 w-4/5 my-5'>
                <div className='bg-[#1B1B1B] p-5 gap-10 flex items-center rounded-t-lg cursor-pointer hover:ring-[1px]'>
                    <div className='bg-white'>
                        <APEIcon />
                    </div>
                    <div className='font-bold text-left'>ApeChain</div>
                </div>
                <div className='bg-[#1B1B1B] p-5 gap-10 flex items-center cursor-pointer hover:ring-[1px]'>
                    <div className='bg-white'>
                        <MetaMaskIcon />
                    </div>
                    <div className='font-bold text-left'>MetaMask</div>
                </div>
                <div className='bg-[#1B1B1B] p-5 gap-10 flex items-center cursor-pointer hover:ring-[1px]'>
                    <div className='bg-white'>
                        <WalletConnectIcon />
                    </div>
                    <div className='font-bold text-left'>WalletConnect</div>
                </div>
                <div className='bg-[#1B1B1B] p-5 gap-10 flex items-center rounded-b-lg cursor-pointer hover:ring-[1px]'>
                    <div className='bg-white'>
                        <CoinbaseIcon />
                    </div>
                    <div className='font-bold text-left'>Coinbase Wallet</div>
                </div>

            </div>
            <div className='absolute top-7 right-7 cursor-pointer' onClick={props.onClick}>X</div>
            <div className='px-24 text-sm text-center'>Buy connecting a wallet, you agree to Apechain Terms of Service and consent to its Privacy Policy.</div>
        </div>
    )
}
