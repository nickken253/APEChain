'use client'

import { useRef, useEffect, useState } from 'react'
import Background from '@/components/background/Background'
import { Swap } from '@/components/tab/Swap'
import { Limit } from '@/components/tab/Limit'
import { Send } from '@/components/tab/Send'
import { Buy } from '@/components/tab/Buy'

import Tab from '@/components/tab/Tab'
import { ConnectWallet } from '@/components/modal/ConnectWallet'
const Base = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleChangeTab = (tab: number) => {
    setActiveTab(tab);
  }
  const [connectWalletModal, setConnectWalletModal] = useState<boolean>(false);
  const handleConnectWallet = () => {
    setConnectWalletModal(!connectWalletModal);    
  }

  return (
    <Background>
      <div className='text-white flex items-center justify-center mt-10 w-full'>
        <div className='px-3 pt-10 w-[95%] sm:px-5 sm:w-[70%] md:w-[55%] lg:w-[45%] xl:px-10 xl:w-[35%]'>
          <div className='flex gap-1 md:gap-5 text-left text-lg'>
            <Tab tabLabel='Swap' id={1} activeTab={activeTab} onClick={handleChangeTab} />
            <Tab tabLabel='Limit' id={2} activeTab={activeTab} onClick={handleChangeTab} />
            <Tab tabLabel='Send' id={3} activeTab={activeTab} onClick={handleChangeTab} />
            <Tab tabLabel='Buy' id={4} activeTab={activeTab} onClick={handleChangeTab} />
          </div>
          <div className='mt-6'>
            {activeTab == 1 && <Swap />}
            {activeTab == 2 && <Limit />}
            {activeTab == 3 && <Send />}
            {activeTab == 4 && <Buy />}
          </div>
          <div className='w-full bg-[#004EE2] text-center justify-center items-center flex text-xl p-3 mt-2 rounded-lg cursor-pointer hover:shadow-lg' onClick={handleConnectWallet}>Connect wallet</div>
        </div>
      </div>
      {connectWalletModal && <ConnectWallet onClick={handleConnectWallet}/>}
    </Background>
  )
}

export default Base;