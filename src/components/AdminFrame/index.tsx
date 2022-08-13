import React, { useState } from 'react';
import { AdminFrameProps } from './types';
import avatar from '../../assets/images/avatar.png';
import arrow_down from '../../assets/icons/arrow_down.svg';
import logo from '../../assets/images/logo.svg';
import { navigationData } from './data';
import menu from '../../assets/icons/menu_icon.svg';
import close from '../../assets/icons/close.svg';

const AdminFrame: React.FC<AdminFrameProps> = ({children}) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleClick = (index: number) => {
        setActiveTab(index)
    }

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className='py-4 lg:pl-4 lg:pr-[30px] px-4'>
            <div className='flex w-full'>
                <div className='fixed pl-5 w-1/5 h-[95vh] hidden lg:block bg-white rounded-[10px] border border-[#EAEDF3] shadow-lite'>
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
                <div className='fixed z-20 h-[96vh] lg:hidden shadow-lite w-[auto] bg-white flex flex-col justify-start items-center pt-4 rounded-[10px] border border-[#EAEDF3]'>
                    <div className='flex w-full px-3 justify-between'>
                        <div className={`${openMenu ? 'block' : 'hidden'}`}>
                            <img src={logo} alt="logo" width={100} />
                        </div>
                        <div  onClick={toggleMenu}>
                            <img src={openMenu ? close : menu} alt="menu icon" width={20} height={20} />
                        </div>
                    </div>
                    
                    <div className={`flex flex-col ${openMenu ? 'items-start mt-[60px]' : 'items-center mt-[30px]'} w-full`}>
                        {
                            navigationData.map((value, index) => (
                                <a href={value.path} key={index} className='w-full' onClick={() => handleClick(index)}>
                                    <div style={{backgroundColor: `${activeTab === index ? 'rgba(83, 190, 210, 0.1)' : ''}`}} className={`flex gap-[18px] items-center ${openMenu ? 'pl-3 pr-8' : 'px-3'} py-4 rounded-[5px] w-full cursor-pointer mb-1`}>
                                        <span>
                                            <img src={value.icon} alt="home" />
                                        </span>
                                        <span className={`${openMenu ? 'block' : 'hidden'} text-14 ${activeTab === index ? 'font-semibold text-[#53BED2]' : 'text-[#5D6C76]'}`}>{value.title}</span>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className='lg:pl-[30px] w-full ml-14 lg:ml-[20%]'>
                    <div className='flex navbar fixed z-10 items-center justify-between mb-[18px] px-6 bg-white h-[70px] rounded-[10px] border border-[#EAEDF3] shadow-lite'>
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