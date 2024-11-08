import React from 'react'
import './ScoreBoaredMain.css'

const ScoreBoaredMainChess = () => {
    return (
        <div>
            <div className='flex justify-between rounded-[5px] score-board-main-chess py-3 px-2 md:px-12'>
                <h3 className='score-board-main-heading'>NO.</h3>
                <h3 className='score-board-main-heading'>Team</h3>
                <div className='flex justify-between w-1/2 lg:w-full max-w-[560px]'>
                    <h3 className='score-board-main-heading'>P</h3>
                    <h3 className='score-board-main-heading'>W</h3>
                    <h3 className='score-board-main-heading'>L</h3>
                    <h3 className='score-board-main-heading'>D</h3>
                    <h3 className='score-board-main-heading'>PTS</h3>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoaredMainChess
