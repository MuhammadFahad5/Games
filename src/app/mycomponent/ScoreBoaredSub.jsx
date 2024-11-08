import React from 'react'
import './ScoreBoaredSub.css'

const ScoreBoaredSub = ({count,team, color, p, w, l, d, pts}) => {
    return (
        <div>
            <div
            //  className={`flex justify-between rounded-[5px] py-3 px-2 md:px-12 ${color === 'primary'? 'bg-[#050137]':'bg-[#120C64]'}`}
            className={`
                flex justify-between rounded-[5px] py-3 px-2 md:px-12 
                ${color === 'primary' ? 'bg-[#050137]' : ''}
                ${color === 'chess-primary' ? 'bg-[#232B36]' : ''}
                ${color === 'chess-secondary' ? 'bg-[#364252]' : ''}
                ${color === 'tennis-primary' ? 'bg-[#0A4A1E]' : ''}
                ${color === 'tennis-secondary' ? 'bg-[#1C7638]' : ''}
              `}
             >
                <h3 className='score-board-sub-heading'>{count}</h3>
                <h3 className='score-board-sub-heading mx-3'>{team}</h3>
                <div className='flex justify-between w-1/2 lg:w-full max-w-[560px]'>
                    <h3 className='score-board-sub-heading'>{p}</h3>
                    <h3 className='score-board-sub-heading'>{w}</h3>
                    <h3 className='score-board-sub-heading'>{l}</h3>
                    <h3 className='score-board-sub-heading'>{d}</h3>
                    <h3 className='score-board-sub-heading'>{pts}</h3>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoaredSub
