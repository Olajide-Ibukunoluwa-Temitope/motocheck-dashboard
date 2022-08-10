import React from 'react';
import { AdminFrameProps } from './types';

const AdminFrame: React.FC<AdminFrameProps> = ({children}) => {
  return (
    <div className='p-4'>
        <div className='flex w-full'>
            <div className='w-1/4 h-[95vh] bg-white rounded-[10px] border border-[#EAEDF3] shadow-lite'>
                fdsf
            </div>
            <div className='pl-[30px] w-full'>
                <div className='flex items-center justify-between mb-[18px] px-6 bg-white w-full h-[70px] rounded-[10px] border border-[#EAEDF3] shadow-lite'>
                    <div>
                        <p className='text-18'>Dashboard</p>
                    </div>
                    <div>
                        picture
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    </div>
  )
}

export default AdminFrame