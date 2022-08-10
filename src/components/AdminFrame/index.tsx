import React from 'react';
import { AdminFrameProps } from './types';
import avatar from '../../assets/images/avatar.png';
import arrow_down from '../../assets/icons/arrow_down.svg';

const AdminFrame: React.FC<AdminFrameProps> = ({children}) => {
  return (
    <div className='py-4 pl-4 pr-[30px]'>
        <div className='flex w-full'>
            <div className='fixed w-1/5 h-[95vh] bg-white rounded-[10px] border border-[#EAEDF3] shadow-lite'>
                fdsf
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