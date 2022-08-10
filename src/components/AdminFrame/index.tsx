import React, { useState } from 'react';
import { AdminFrameProps } from './types';
import avatar from '../../assets/images/avatar.png';
import arrow_down from '../../assets/icons/arrow_down.svg';
import logo from '../../assets/images/logo.svg';
import { navigationData } from './data';

const AdminFrame: React.FC<AdminFrameProps> = ({children}) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleClick = (index: number) => {
        setActiveTab(index)
    }

    return (
        <div className='py-4 pl-4 pr-[30px]'>
            <div className='flex w-full'>
                <div className='fixed pl-5 w-1/5 h-[95vh] bg-white rounded-[10px] border border-[#EAEDF3] shadow-lite'>
                    <div className='py-[30px] border-b border-[#EAEDF3]'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='mt-[30px]'>
                        {
                            navigationData.map((value, index) => (
                                <a href={value.path} key={index} onClick={() => handleClick(index)}>
                                    <div style={{backgroundColor: `${activeTab === index ? 'rgba(83, 190, 210, 0.1)' : ''}`}} className='flex gap-[18px] items-center py-4 pl-[18px] rounded-[5px] cursor-pointer mr-5 mb-1'>
                                        <span>
                                            <img src={value.icon} alt="home" />
                                        </span>
                                        <span className={`text-14 ${activeTab === index ? 'font-semibold text-[#53BED2]' : 'text-[#5D6C76]'}`}>{value.title}</span>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className='pl-[30px] w-full ml-[20%]'>
                    <div style={{width: 'calc(100% - (62px + 20%))'}} className='flex fixed z-10 items-center justify-between mb-[18px] px-6 bg-white h-[70px] rounded-[10px] border border-[#EAEDF3] shadow-lite'>
                        <div>
                            <p className='text-18'>Dashboard</p>
                        </div>
                        <div className='flex gap-2.5 items-center'>
                            <img src={avatar} alt="avatar" />
                            <img src={arrow_down} alt="arrow down" />
                        </div>
                    </div>
                    <div className='mt-24'>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default AdminFrame