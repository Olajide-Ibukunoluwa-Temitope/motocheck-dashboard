import React from 'react';
import OverviewItem from '../../components/OverviewItem';
import SectionFrame from '../../components/SectionFrame';
import { overviewItemData } from './data';

const Dashboard: React.FC = () => {
  return (
    <div>
        <SectionFrame title={'Overview'}>
            <div className='bg-white rounded-md h-[158px] w-2/3 border border-[#E5E8ED]'>
                <div className='h-full flex items-center'>
                    {overviewItemData.map((item,index) => (
                        <OverviewItem 
                            key={index}
                            isLastItem={(overviewItemData.length - 1) === index}
                            value={item.value} 
                            title={item.title} 
                            change={item?.change} 
                        />
                    ))}
                </div>
            </div>
        </SectionFrame>
    </div>
  )
}

export default Dashboard