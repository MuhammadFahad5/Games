import React from 'react'

const MatchFixture4 = ({date, team1, team2}) => {
    return (
        <div className='flex flex-col items-center'>
            <div
                className='w-full max-w-[230px] bg-[#B2061C] px-5 py-3 text-[#fff] relative'
                style={{ transform: 'skewX(20deg)' }}
            >
                <div className="absolute inset-0 transform skew-x-[-20deg] flex items-center justify-center">
                    <h3 className='text-center'>{date}</h3>
                </div>
            </div>



            <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5 w-full  md:w-[700px] mt-4'>
                <div className='w-full md:w-1/2 bg-[#fff] text-center flex'>
                    <div
                        className='w-[10px]  p-2'
                        style={{ background: 'linear-gradient(180deg, #B2061C 0.14%, #630030 0.55%, #57002B 0.97%, #B2061C 99.86%)' }}
                    >&nbsp;</div>
                    <h3 className='p-2 text-center w-full'> {team1}</h3>
                </div>
                <span className='text-[#fff]'>VS</span>
                <div className='w-full md:w-1/2 bg-[#fff] text-center flex'>
                    
                    <h3 className='p-2 text-center w-full'> {team2}</h3>
                    <div
                        className='w-[10px]  p-2'
                        style={{ background: 'linear-gradient(180deg, #B2061C 0.14%, #630030 0.55%, #57002B 0.97%, #B2061C 99.86%)' }}
                    >&nbsp;</div>
                </div>
            </div>

        </div>
    )
}

export default MatchFixture4
