import React from 'react'
import OverviewItem from '../OverviewItem';
import { OverviewSummaryProps } from './types';

const OverviewSummary: React.FC<OverviewSummaryProps> = ({overviewData}) => {
  return (
    <div className='bg-white rounded-md h-auto lg:h-[158px] w-full lg:w-2/3 border border-[#E5E8ED]'>
        <div className='h-full flex lg:items-center items-start flex-col lg:flex-row gap-6 lg:gap-0 py-4 lg:py-0'>
            {overviewData.map((item,index) => (
                <OverviewItem
                    key={index}
                    isLastItem={(overviewData.length - 1) === index}
                    value={item.value} 
                    title={item.title} 
                    change={item?.change} 
                />
            ))}
        </div>
    </div>
  )
}

export default OverviewSummary;