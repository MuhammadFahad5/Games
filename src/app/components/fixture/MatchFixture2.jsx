import React from 'react';

const MatchSchedule2 = ({ members, backgroundColor }) => {
  return (
    <div className="flex flex-wrap gap-5  rounded-lg items-center justify-center w-full mx-auto">
      {members.map((member, index) => (
        <React.Fragment key={index}>
          <div 
            className={`py-2 pr-6 pl-16  text-[16px] font-[500] text-center text-[#050137] ${
              index % 2 === 0 ? 'border-l-8 border-[#7a0225]' : 'border-r-8 border-[#7a0225]'
              
            }`}
            style={{ backgroundColor }}
          >
            {member}
          </div>
          {index % 2 === 0 && index < members.length - 1 && (
            <div className="text-center text-white">vs</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MatchSchedule2;
