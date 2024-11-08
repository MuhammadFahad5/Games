import React from 'react';

const MatchSchedule = ({ members, backgroundColor,background=null, title }) => {
  return (
    <>
<h1>{title}</h1>
    <div className="flex flex-wrap  gap-4 p-4 rounded-lg items-center justify-center  mx-auto">
      
      {members.map((member, index) => (
        <React.Fragment key={index}>    
          <div 
            className={`p-2 flex  text-[16px] justify-center font-[500] text-center text-[#050137] w-[19%] ${
              index % 2 === 0 ? 'border-l-8 border-[#7a0225]' : 'border-r-8 border-[#7a0225]'
              
            }`}
            style={{ backgroundColor , background }}
          >
            {member}
          </div>
          {index % 2 === 0 && index < members.length - 1 && (
            <div className="text-center text-white">vs</div>
          )}
        </React.Fragment>
      ))}
    </div>
    </>
  );
};

export default MatchSchedule;
