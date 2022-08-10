import React from 'react'
import OverviewItem from '../OverviewItem';
import { OverviewSummaryProps } from './types';

const OverviewSummary: React.FC<OverviewSummaryProps> = ({overviewData}) => {
  return (
    <div className='bg-white rounded-md h-[158px] w-2/3 border border-[#E5E8ED]'>
        <div className='h-full flex items-center'>
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