import React from 'react';
import arrow_right from '../../assets/icons/arrow_right.svg';
import { ActionsCardProps } from './types';

const ActionsCard: React.FC<ActionsCardProps> = ({icon, title, cardBg, iconBg}) => {
  return (
    <div className={`h-[90px] py-5 px-6 rounded-[10px] cursor-pointer`} style={{backgroundColor: cardBg}}>
        <div className='flex justify-between'>
            <div className='flex'>
                <div className={`w-[45px] h-[52px] mr-4 flex justify-center items-center rounded`} style={{backgroundColor: iconBg}}>
                    <img src={icon} alt="file" />
                </div>
                <div>
                    <p className='text-12'>Create new</p>
                    <p className='text-18 font-extrabold'>{title}</p>
                </div>
            </div>
            <div className='flex items-end'>
                <img src={arrow_right} alt="arrow right" />
            </div>
        </div>
    </div>
  )
}

export default ActionsCard