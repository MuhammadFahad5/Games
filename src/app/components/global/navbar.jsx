// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'Chess', href: '/chess', current: false },
//   { name: 'Tekken', href: '/tekken', current: false },
//   { name: 'Ludo', href: '/ludo-tournament', current: false },
//   { name: 'Table Tennis', href: '/table-tennis', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Nav() {
//   return (
//     <Disclosure as="nav" className="bg-white-800 custom-shadow">
//       <div className=" px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center md:justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-between sm:items-stretch ">
//             <div className="flex shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="/logo/medsnexus.svg"
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-black-400 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
       
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }


'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import main_Logo from '../../../../public/logo/medsnexus.svg'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
    const [hoveredTab, setHoveredTab] = useState(false);

    const handleMouseEnter = () => {
        setHoveredTab(true);
    };

    const handleMouseLeave = () => {
        setHoveredTab(false);
    };
    const isActive = (path) => {

        return pathname === path ||
            pathname === path + '/commercial-insurance' ||
            pathname === path + '/government-insurance' ||
            pathname === path + '/aboutus' ||
            pathname === path + '/contactus' ? 'active-nav-tab' : ''
    }

    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileServicePages, setMobileServicePages] = useState(false)
    const [mobileCompanyPages, setMobileCompanyPages] = useState(false)
    const handleServiceClick = () => {
        setMobileServicePages(!mobileServicePages);
    };
    const handleMobileClick = () => {
        setMobileCompanyPages(!mobileCompanyPages)
    }

    return (
        <>
            <nav className="w-full fixed top-0 left-0 right-0 z-[100] bg-white border-b-[1px] border-[#00000008]">
                <div className='my-container'>
                    <div className='flex items-center w-full justify-between px-3'>
                        <Link href="#">
                            <Image
                                src={main_Logo}
                                width={250}
                                height={48}
                                alt="LOGO The Credentialing"
                                className="w-full max-w-[250px]"
                            />
                        </Link>

                        <div className="lg:hidden" onClick={() => setMobileMenu(true)}>
                            <button className=" flex items-center text-primary rounded-md ">
                                <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Hamberger menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                                
                            </button>
                        </div>

                        <div className="hidden lg:flex justify-center items-center">
                            <ul className='flex ml-12 xl:ml-24'>
                                <li
                                    className={`header-nav-list ${hoveredTab ? '' : isActive('/')}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                ><Link href="/">Home</Link></li>
                               
                                <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`header-nav-list ${hoveredTab ? '' : isActive('/pricing')}`}><Link href="/chess">Chess</Link></li>
                                <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`header-nav-list ${hoveredTab ? '' : isActive('/forum')}`}><Link href="/tekken">Takken</Link></li>
                                <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`header-nav-list ${hoveredTab ? '' : isActive('/blogs')}`}><Link href="/ludo-tournament">Ludo</Link></li>
                                     <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`header-nav-list ${hoveredTab ? '' : isActive('/blogs')}`}><Link href="/table-tennis">Table Tennis</Link></li>
                               
                            </ul>

                        </div>

                        

                        <div className="hidden lg:flex">
                            <div className='mx-2'>
                            </div>
                            <div>
                                <Link href='/signin'>
                                    <button className='bg-primary hover:bg-[#00a1f2] text-white rounded-[4px] px-[15px] py-[9px] text-[14px] font-medium'>Sign In</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>


            <div className={`fixed z-[999] inset-0 bg-gray-800 opacity-50 ${mobileMenu ? '' : 'hidden'}`} onClick={() => setMobileMenu(false)} />
            <nav className={`transition-all fixed z-[1000] bg-white top-0 ${mobileMenu ? 'left-0' : 'left-[-100%]'} bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto`}>
                <div className="flex items-center justify-between mb-8">
                    <Link href="#">
                        <Image
                            src={main_Logo}
                            width={250}
                            height={48}
                            alt="LOGO The Credentialing"
                            className="w-full max-w-[250px]"
                        />
                    </Link>
                    <button className="navbar-close" onClick={() => setMobileMenu(false)}>
                        <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className=" ">
                    <ul className='flex flex-col'>
                        <li className='header-nav-list-mobile'><Link href="/">Home</Link></li>
                        <li className={`header-nav-list-mobile ${mobileServicePages ? '!pb-0 !border-b-0' : ''}`}>
                            <div
                                className='flex w-full justify-between items-center cursor-pointer'
                                onClick={() => setMobileServicePages(handleServiceClick)}
                            >

                                <span>Services</span>
                            </div>
                            {
                                mobileServicePages &&
                                <div className='header-service-inner-pages-mobile'>
                                    <ul>
                                        <li className='header-nav-list-inner'><Link href="/service/commercial-insurance"> Commercial Insurance Credentialing</Link></li>
                                        <li className='header-nav-list-inner'><Link href="/service/government-insurance"> Government Insurance Credentialing</Link></li>
                                        <li className='header-nav-list-inner'><Link href="/service/ipa-enrollment"> IPA Enrollment Services</Link></li>
                                        <li className='header-nav-list-inner'><Link href="/service/insurance-contract-rate-negotiations"> Insurance Contract Rate Negotiations</Link></li>
                                        <li className='header-nav-list-inner'><Link href="/service/revalidation-and-recredentialing">Revalidation And Recredentialing</Link></li>
                                    </ul>

                                </div>
                            }
                        </li>
                        <li className='header-nav-list-mobile'><Link href="/pricing">Pricing</Link></li>
                        <li className='header-nav-list-mobile'><Link href="/forum">forum</Link></li>
                        <li className='header-nav-list-mobile'><Link href="/blogs">blogs</Link></li>
                        <li className={`header-nav-list-mobile ${mobileCompanyPages ? '!pb-0 !border-b-0' : ''}`}>
                            <div
                                className='flex w-full justify-between items-center cursor-pointer'
                                onClick={() => setMobileCompanyPages(handleMobileClick)}
                            >
                                <span>Company</span>
                            </div>
                            {
                                mobileCompanyPages &&
                                <div className='header-service-inner-pages-mobile'>
                                    <ul>
                                        <li className='header-nav-list-inner'><Link href="/about-us"> About US</Link></li>
                                        <li className='header-nav-list-inner'><Link href="/contactus"> Contact Us</Link></li>
                                    </ul>
                                </div>
                            }
                        </li>
                    </ul>

                </div>
                <div className="mt-auto">
                    <div className="pt-6">
                       
                        <a className="block m-1 bg-primary border border-gray-300 hover:bg-gray-100 text-gray-300  px-4 py-3 mb-3 text-sm text-center font-semibold rounded-md" href="/signin">
                            Sign in
                        </a>
                        

                    </div>
                    <p className="my-4 text-xs text-center text-gray-400">
                        <span>The Credentialing Copyright © 2024</span>
                    </p>
                </div>
            </nav>


        </>
    )
}

export default Header






