import React from 'react'

type ITabProps = {
    tabLabel: string;
    id: number;
    activeTab: number;
    onClick: (id: number) => void;
}

const Tab = (props: ITabProps) => {
  return (
    <div
      className={`tab p-1 px-6 text-sm sm:text-base cursor-pointer ${props.id === props.activeTab ? 'active bg-[#242424] font-bold rounded-full' : ''}`}
      onClick={() => props.onClick(props.id)}
    >
      {props.tabLabel}
    </div>
  )
}

export default Tab;
