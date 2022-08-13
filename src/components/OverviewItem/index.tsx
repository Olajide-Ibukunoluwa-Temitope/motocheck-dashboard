import React from 'react';
import greenArrow from '../../assets/icons/green_arrow_up.svg';
import graph from '../../assets/images/graph.svg';
import { OverviewItemProps } from './types';

const OverviewItem: React.FC<OverviewItemProps> = ({value, title, change, isLastItem}) => {
  return (
    <div className={`pl-9 lg:w-[220px] w-full ${!isLastItem ? 'overview-item pb-6' : ''} relative`}>
        <p className='flex items-center mb-2'>
            <span className='text-24 font-black mr-[17px]'>{value}</span>
            {change && (
                <span className='flex'>
                    <img src={greenArrow} alt="green arrow up" />
                    <span className='text-12 text-heading ml-1'>{change}</span>
                </span>
            )}
        </p>
        <p className='text-16'>{title}</p>
        <div className='absolute top-[38%] left-[20%]'>
            <img src={graph} alt="graph" />
        </div>
    </div>
  )
}

export default OverviewItem;