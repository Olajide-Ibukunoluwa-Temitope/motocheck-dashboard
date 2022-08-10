import React from 'react'

const Table = () => {
    const pseudoData = new Array(8).fill(0);
    console.log(pseudoData)
    return (
        <div>
            <div className='w-full bg-white border border-[#E5E8ED] rounded-md pl-5 pt-[33px] max-h-[450px] overflow-auto'>
                <table className="table-fixed w-full">
                    <thead className=''>
                        <tr>
                            <th>
                                <div className='flex mb-[13px] text-14 font-semibold'>User</div>
                            </th>
                            <th>
                                <div className='flex mb-[13px] text-14 font-semibold'>Event</div>
                            </th>
                            <th>
                                <div className='flex mb-[13px] text-14 font-semibold'>Date/Time</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className=' h-[350px] overflow-auto'>
                        {/* <div> */}
                        {pseudoData.map((_, index) => (
                            
                                <tr className=' w-full' key={index}>
                                <td className='border-b'>
                                    <div className='flex gap-2.5 items-center mb-[17px] mt-4'>
                                        <div className='rounded-full w-[30px] h-[30px] bg-[#ECF0F7] text-12 flex justify-center items-center font-extrabold'>SC</div>
                                        <p className='text-[#555555] text-14 font-semibold'>SLAAB Center 1</p>
                                    </div>
                                </td>
                                <td className='border-b'>
                                    <div className='text-[#53BED2] text-14 mb-[17px] mt-4'>Added 500 agents</div>
                                </td>
                                <td className='border-b'>
                                    <div className='text-[#555555] text-14 mb-[17px] mt-4'>02/05/2019 - 10:30pm</div>
                                </td>
                            </tr>
                            
                        ))}
                        {/* </div> */}
                    </tbody>
                </table>
            </div>
            <hr className='mb-3.5 mt-3'/>
            <div className='flex justify-center '>
                <div className='border rounded-[2px] border-[#53BED2] py-3.5 px-14 text-14 '>
                    View more activity
                </div>
            </div>
        </div>
    )
}

export default Table