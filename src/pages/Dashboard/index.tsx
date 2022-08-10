import React from 'react';
import OverviewSummary from '../../components/OverviewSummary';
import SectionFrame from '../../components/SectionFrame';
import { actionsData, overviewItemData } from './data';
import ActionsCard from '../../components/ActionsCard';
import Table from '../../components/Table';

const Dashboard: React.FC = () => {
  return (
    <div>
        <div className='mb-[60px]'>
            <SectionFrame title={'Overview'}>
                <OverviewSummary overviewData={overviewItemData} />
            </SectionFrame>
        </div>
        <div className='mb-[33px]'>
            <SectionFrame title={'Key actions'}>
                <div className='grid grid-cols-3 gap-[30px]'>
                    {actionsData.map((value, idx) => (
                        <ActionsCard 
                            key={idx}
                            title={value.title} 
                            icon={value.icon}
                            cardBg={value.cardBg}
                            iconBg={value.iconBg}
                        />
                    ))}
                </div>
            </SectionFrame>
        </div>
        <div>
            <SectionFrame title={'Activity log'}>
                <Table />
            </SectionFrame>
        </div>
    </div>
  )
}

export default Dashboard