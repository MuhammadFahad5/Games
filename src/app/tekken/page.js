// "use client"
// import React, { useState } from 'react';
// import MatchSchedule from "@/app/components/fixture/MatchFixture";
// import ScoreBoaredSub from '../mycomponent/ScoreBoaredSub';
// import rules from '../../../public/ludo-tournament/rules.png'
// import ScoreBoaredMain from '../mycomponent/ScoreBoaredMain';
// import Image from 'next/image';

// const Main = () => {
//   const members = ['Shahab Mehmood & M. Ibrahim', 'Bob', 'Charlie', 'Dave', 'Eve', 'John', 'John', 'John', 'John', 'John', 'John', 'John'];
//   const backgroundColor = "#dedede";
//   const [activeSection, setActiveSection] = useState('rules');
//   const handleTabs = (section) => {
//     setActiveSection(() => (section));
//   };

//   const title = "Match Fixture"


//   // Example dates array; you can adjust as needed
//   const dates = ['2024-11-10', '2024-11-11'];

//   return (
//     <div className="p-8 bg-[#050137] ">
//       {/* <h1 className="text-[50px] font-bold mb-4 text-center text-white">Match Fixture</h1> */}
//       <div className='w-full max-w-[1445px] m-auto mt-16 px-5 pb-24'>

//         <div className='flex justify-between w-full max-w-[900px] m-auto mb-24'>
//           <button onClick={() => handleTabs('rules')} className={`text-[50px] font-bold ${activeSection === 'rules' ? 'text-[#B2061C] border-b-[6px] border-[#B2061C] px-5' : 'text-[#fff]'}`}>Rules</button>
//           <button onClick={() => handleTabs('match-fixtures')} className={`text-[50px] font-bold ${activeSection === 'match-fixtures' ? 'text-[#B2061C] border-b-[6px] border-[#B2061C] px-5' : 'text-[#fff]'}`}>Match Fixtures</button>
//           <button onClick={() => handleTabs('score-board')} className={`text-[50px] font-bold ${activeSection === 'score-board' ? 'text-[#B2061C] border-b-[6px] border-[#B2061C] px-5' : 'text-[#fff]'}`}>Score Board</button>

//         </div>
//         <div className={`${activeSection === 'rules' ? 'block' : 'hidden'}`}>
//           <Image
//             src={rules}
//             alt="Rules"
//             className='w-full'
//           />
//           <p className='font-normal text-[18px] font-popins p-6 text-white'>
//             Lorem ipsum dolor sit amet consectetur. Eget tortor aenean donec habitant nisl et ultrices. Non interdum nulla volutpat faucibus. Sit facilisi dolor viverra venenatis et tincidunt pellentesque tempor. Ut sed odio leo velit. Pretium mattis facilisi ac cursus urna pretium vitae sodales ultricies. Eu facilisi habitasse nunc et enim arcu. Sed nunc egestas nunc adipiscing mauris urna parturient. Orci porttitor egestas duis mauris dolor morbi eget arcu. Mauris massa maecenas nisl integer turpis vitae augue ut.
//           </p>
//           <ul className='list-disc ml-10 text-white'>
//             <li>Quis aliquam ac viverra mi donec sapien tellus malesuada.</li>
//             <li>Quis aliquam ac viverra mi donec sapien tellus.</li>
//             <li>Quis aliquam ac viverra mi donec sapien tellus malesuada.</li>
//             <li>Quis aliquam ac viverra mi donec .</li>
//             <li>Quis aliquam ac viverra mi donec sapien tellus malesuada.</li>
//             <li>Quis aliquam ac viverra mi donec sapien tellus .</li>
//             <li>Quis aliquam ac viverra mi donec sapien tellus malesuada.</li>
//           </ul>
//         </div>
//         <div className={`text-white font-bold text-center text-[50px] ${activeSection === 'match-fixtures' ? 'block' : 'hidden'}`}>
//           {/* <h1 className="text-[50px] font-bold mb-4 text-center text-white">Match Fixture</h1> */}
//           <MatchSchedule title={title} backgroundColor={backgroundColor} members={members} />

//         </div>
//         <div className={`${activeSection === 'score-board' ? 'block' : 'hidden'}`}>
//           <ScoreBoaredMain />
//           <div className='px-1 py-2'>
//             <ScoreBoaredSub count='1.' team='Team 1' color='primary' />
//             <hr
//               className='h-[2px] border-0'
//               style={{
//                 background: 'linear-gradient(90deg, #050137 0%, #231D73 25%, #FFFFFF 50%, #231D73 75%, #050137 100%)'
//               }}
//             />
//             <ScoreBoaredSub count='2.' team='Team 2' color='secondary' />
//             <hr
//               className='h-[2px] border-0'
//               style={{
//                 background: 'linear-gradient(90deg, #050137 0%, #231D73 25%, #FFFFFF 50%, #231D73 75%, #050137 100%)'
//               }}
//             />
//             <ScoreBoaredSub count='3.' team='Team 3' color='primary' />
//             <hr
//               className='h-[2px] border-0'
//               style={{
//                 background: 'linear-gradient(90deg, #050137 0%, #231D73 25%, #FFFFFF 50%, #231D73 75%, #050137 100%)'
//               }}
//             />
//             <ScoreBoaredSub count='4.' team='Team 4' color='secondary' />
//           </div>
//         </div>


//       </div>
//       {/* <MatchSchedule members={members} backgroundColor={backgroundColor} dates={dates} /> */}
//     </div>
//   );
// };

// export default Main;





'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ludo_tournament from '../../../public/ludo-tournament/ludo_banner.png'
import chess from "../../../public/chess/head.png";
import takken_tournament from '../../../public/takken/takken_tournament.png'
import rules from '../../../public/ludo-tournament/rules.png'
import ScoreBoaredMain from '../mycomponent/ScoreBoaredMain'
import ScoreBoaredSub from '../mycomponent/ScoreBoaredSub'
import MatchFixture from '../components/fixture/MatchFixture'
import MatchFixture4 from '../components/fixture/MatchFixture4'
import trophy from "../../../public/chess/trophy.png";

const page = () => {
    // const [rules, setRules] = useState(true)
    // const [rules, setRules] = useState(true)
    // const [rules, setRules] = useState(true)

    const [activeSection, setActiveSection] = useState('rules');

    const handleTabs = (section) => {
        setActiveSection(() => (section));
    };
    const scoreBoard = [
        {
            no: '1',
            team: 'Sardar Soban & Younas Khan',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '2',
            team: 'Shiekh Haseeb & Abdul Muneed',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '3',
            team: 'Maria Bibi & Arisha Ali',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '4',
            team: 'Mahnoor Rizwan & Rabia Nisarr',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '5',
            team: 'M. Rahim & Kaynaat Tabussam',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '6',
            team: 'Amir Arshad & Abdul Rehman',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '7',
            team: 'Asad Shabbir & Saad Munir',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '8',
            team: 'Adeel Ahmed & M. Shahbaz',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '9',
            team: 'M. Fahad & Ahmad Faraz',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '10',
            team: 'Zahidullah & Dua Kamran',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '11',
            team: 'M. Ibrahim & Afzal shah',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '12',
            team: 'M. Ibtesam & M. Yasir',
            color: 'secondary',
        },
        {
            no: '13',
            team: 'Haider Ali & Uzair Ahmad',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '14',
            team: 'Hassan Ahmad & Shahbaz Riaz',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '15',
            team: 'Zeeshan Baar & Ahtesham Salamat',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '16',
            team: 'Erum safeer & M. Awais',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '17',
            team: 'Zahra Batool & Amrat Saba',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '18',
            team: 'Mubarik Ali & Muqaddas Sadique',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '19',
            team: 'M. Musa & M. Harris',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '20',
            team: 'M. Hamad Qureshi & Shahzad Ahmed',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '21',
            team: 'Laiba Iftikhar & Saddam Mughal',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '22',
            team: 'M. Hammad & Memona Munir',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '23',
            team: 'Kinza Siddique & Sundas Shahzadi',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '24',
            team: 'Asad Mehmood & M. Sohaib',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '25',
            team: 'Ehtesham Hafeez & Zafar Iqbal',
            color: 'primary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },
        {
            no: '26',
            team: 'Naeem Ahmed & Monica Morris',
            color: 'secondary',
            p:'2',
            w:'2',
            l:'0',
            d:'0',
            pts:'20',
        },

    ]

    const matchFixers =[
        {
            no: '1',
            team1: "Sardar Soban & Younas Khan",
            team2: "Hassan Ahmad & Shabaz Riaz",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '2',
            team1: "Asad Shabbir & Saad Munir",
            team2: "M. Hamad & Shahzad Ahmed",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '3',
            team1: "Shiekh Haseeb & Abdul Muneeb",
            team2: "Zeeshan Baar & Ahtesham Salamat",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '4',
            team1: "Adeel Ahmed & M. Shabaz",
            team2: "Laiba Iftakhar & Saddam Mughal",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '5',
            team1: "Maria Bibi & Arisha Ali",
            team2: "Erum safeer & M. Awais",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '6',
            team1: "M. Fahad & Ahmad Faraz",
            team2: "M. Hammad & Memona Munir",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '7',
            team1: "Mahnoor Rizwan & Rabia Nisarr",
            team2: "Zahra Batool & Amrat Saba",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '8',
            team1: "Zahidullah & Dua Kamran",
            team2: "Kinza Siddique & Sundas Shahzadi",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '9',
            team1: "M. Rahim& Kaynaat Tabussam",
            team2: "Mubarik Ali & Muqaddas Sadique",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '10',
            team1: "M. Ibrahim & Afzal shah",
            team2: "Asad Mehmood & M. Sohaib",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '11',
            team1: "Amir Arshad & Abdul Rehman",
            team2: "M. Musa & M. Harris",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '12',
            team1: "M. Ibtesam & M. Yasir",
            team2: "Ehtesham Hafeez & Zafar Iqbal",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '13',
            team1: "Haider Ali & Uzair Ahmad",
            team2: "Naeem Ahmed & Monica Morris",
            date: 'Tue | 26 Nov | 11:00 pm',
        },

    ]

    const roundOf13 = [
        {
            no: '1',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '2',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '3',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '4',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '5',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '6',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '7',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },

    ]
    const quarterFinal = [
        {
            no: '1',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '2',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '3',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
    ]
    const semiFinal = [
        {
            no: '1',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
        {
            no: '2',
            team1: "TBA",
            team2: "TBA",
            date: 'Tue | 26 Nov | 11:00 pm',
        },
    ]
    const thirdPlace = [
        'TBA',
        'TBA',

    ]
    const final = [
        'TBA',
        'TBA',

    ]
    const backgroundColor = "#dedede";
    return (
        <section className='bg-[#050137]'>
            <div className='w-full max-w-[1920px] m-auto'>
                <Image
                    src={takken_tournament}
                    alt="Takken Tournament Banner"
                    className='w-full'
                />


            </div>
            <div className='w-full max-w-[1500px] m-auto mt-16 px-2 md:px-5 pb-24'>

                <div className='flex justify-between w-full max-w-[650px] lg:max-w-[900px] m-auto mb-24'>
                    <button onClick={() => handleTabs('rules')} className={`text-[14px] sm:text-[20px] lg:text-[50px] font-bold ${activeSection === 'rules' ? 'text-[#B2061C] border-b-[2px] lg:border-b-[6px] border-[#B2061C] px-1 lg:px-5' : 'text-[#fff]'}`}>Rules</button>
                    <button onClick={() => handleTabs('match-fixtures')} className={`text-[14px] sm:text-[20px] lg:text-[50px] font-bold ${activeSection === 'match-fixtures' ? 'text-[#B2061C] border-b-[2px] lg:border-b-[6px] border-[#B2061C] px-1 lg:px-5' : 'text-[#fff]'}`}>Match Fixtures</button>
                    <button onClick={() => handleTabs('score-board')} className={`text-[14px] sm:text-[20px] lg:text-[50px] font-bold ${activeSection === 'score-board' ? 'text-[#B2061C] border-b-[2px] lg:border-b-[6px] border-[#B2061C] px-1 lg:px-5' : 'text-[#fff]'}`}>Score Board</button>

                </div>
                <div className={`${activeSection === 'rules' ? 'block' : 'hidden'}`}>
                    <Image
                        src={rules}
                        alt="Rules"
                        className='w-full'
                    />
                    <p className='font-normal text-[18px] font-popins p-6 text-[#fff]'>
                        Lorem ipsum dolor sit amet consectetur. Eget tortor aenean donec habitant nisl et ultrices. Non interdum nulla volutpat faucibus. Sit facilisi dolor viverra venenatis et tincidunt pellentesque tempor. Ut sed odio leo velit. Pretium mattis facilisi ac cursus urna pretium vitae sodales ultricies. Eu facilisi habitasse nunc et enim arcu. Sed nunc egestas nunc adipiscing mauris urna parturient. Orci porttitor egestas duis mauris dolor morbi eget arcu. Mauris massa maecenas nisl integer turpis vitae augue ut.
                    </p>
                    <ul className='list-disc ml-10 text-[#fff]'>
                        <li>Quis aliquam ac viverra mi donec sapien tellus malesuada.</li>
                        <li>Quis aliquam ac viverra mi donec sapien tellus.</li>
                        <li>Quis aliquam ac viverra mi donec sapien tellus malesuada.</li>
                        <li>Quis aliquam ac viverra mi donec .</li>
                        <li>Quis aliquam ac viverra mi donec sapien tellus malesuada.</li>
                        <li>Quis aliquam ac viverra mi donec sapien tellus .</li>
                        <li>Quis aliquam ac viverra mi donec sapien tellus malesuada.</li>
                    </ul>
                </div>
                <div className={`${activeSection === 'match-fixtures' ? 'block' : 'hidden'}`}>
                    <div className="">
                        <h2 className="text-[30px] md:text-[50px] font-bold mb-4 text-center text-white pb-6">Match Fixture</h2>
                        <div className='flex flex-col 2xl:grid 2xl:grid-cols-2 place-content-center'>
                            {
                                matchFixers.map((data, index) => (
                                    <div
                                    key={index}
                                    //  className='mt-10'
                                     className={`mt-10 ${index === matchFixers.length - 1 && matchFixers.length % 2 !== 0 ? 'col-span-2' : ''}`}
                                     >
                                        <MatchFixture4 date={data.date} team1={data.team1} team2={data.team2} />
                                    </div>
                                ))

                            }
                        </div>
                        <h2 className="text-[50px] font-bold mb-4 text-center text-white pb-6 mt-16">ROUND OF 13</h2>
                        <div className='flex flex-col 2xl:grid 2xl:grid-cols-2 place-content-center'>
                            {
                                roundOf13.map((data, index) => (
                                    <div
                                    key={index}
                                    //  className='mt-10'
                                    className={`mt-10 ${index === roundOf13.length - 1 && roundOf13.length % 2 !== 0 ? 'col-span-2' : ''}`}
                                     >
                                        <MatchFixture4 date={data.date} team1={data.team1} team2={data.team2} />
                                    </div>
                                ))

                            }
                        </div>
                        <h2 className="text-[50px] font-bold mb-4 text-center text-white pb-6 mt-16">Quarter Final</h2>
                        <div className='flex flex-col 2xl:grid 2xl:grid-cols-2 place-content-center'>
                            {
                                quarterFinal.map((data, index) => (
                                    <div
                                    key={index}
                                     className={`mt-10 ${index === quarterFinal.length - 1 && quarterFinal.length % 2 !== 0 ? 'col-span-2' : ''}`}
                                     >
                                        <MatchFixture4 date={data.date} team1={data.team1} team2={data.team2} />
                                    </div>
                                ))

                            }
                        </div>
                        <h2 className="text-[50px] font-bold mb-4 text-center text-white pb-6 mt-16">Semi-Final</h2>
                        <div className='flex flex-col 2xl:grid 2xl:grid-cols-2'>
                            {
                                semiFinal.map((data, index) => (
                                    <div key={index}>
                                        <MatchFixture4 date="Tue | 26 Nov | 11:00 pm" team1="TBA" team2="TBA" />
                                    </div>
                                ))

                            }
                        </div>
                        <h2 className="text-[50px] font-bold mb-4 text-center text-white pb-6 mt-16">Third Place</h2>
                        <MatchFixture4 date="Tue | 26 Nov | 11:00 pm" team1="TBA" team2="TBA" />
                        <div className='my-12'>
                            <Image
                                src={trophy}
                                alt="Trophy"
                                className='w-full max-w-[174px] m-auto'
                            />

                        </div>
                        <h2 className="text-[50px] font-bold mb-4 text-center text-white pb-6 mt-16">Final</h2>
                        <MatchFixture4 date="Tue | 26 Nov | 11:00 pm" team1="TBA" team2="TBA" />
                    </div>
                </div>
                <div className={`${activeSection === 'score-board' ? 'block' : 'hidden'}`}>
                    <ScoreBoaredMain />
                    <div className='px-1 py-2'>
                        {
                            scoreBoard.map((data, index) => (
                                <div key={index}>
                                    <ScoreBoaredSub count={data.no} team={data.team} color={data.color} p={data.p} w={data.w} l={data.l} d={data.d} pts={data.pts}/>
                                    <hr
                                        className='h-[2px] border-0'
                                        style={{
                                            background: 'linear-gradient(90deg, #050137 0%, #231D73 25%, #FFFFFF 50%, #231D73 75%, #050137 100%)'
                                        }}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </section>
    )
}

export default page

