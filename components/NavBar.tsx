'use client'
import React, {useState} from 'react';

const NavBar = () => {
    const [menu,setMenu] = useState<boolean>(false)

    return (
        <>
                <div className={`${menu  ? '!right-0' : 'right-[-500px]'} z-40 lg:!right-[-500px]     gap-[50px] pt-[50px] transition-all duration-300 ease-in fixed top-0 flex items-center flex-col pt[50px] right-[-500px]  bg-white shadow-2xl w-[400px] h-screen`}>
                    <svg onClick={() => {setMenu(prevState => !prevState)}} className={'stroke-black cursor-pointer w-[50px] h-[50px]'} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <h5 className={'integralbold sm:hidden flex text-[24px] text-[#3D00B7]'}>
                        NFTERS
                    </h5>
                    <div className={'flex-col flex md:hidden items-center gap-[20px] lg:gap-[20px] xl:gap-[47px]'}>
                        <h5 className={'dmsansmedium cursor-pointer text-[16px]'}>
                            Marketplace
                        </h5>
                        <h5 className={'dmsansmedium cursor-pointer text-[16px]'}>
                            Resource
                        </h5>
                        <h5 className={'dmsansmedium cursor-pointer text-[16px]'}>
                            About
                        </h5>
                    </div>

                    <div className={'flex-col items-center flex  gap-[40px]'}>
                        <div className={'2xl:w-[300px] lg:w-[200px] xl:w-[200px] cursor-pointer h-[50px] border-[2px] bg-[#FFFFFF] px-[20px] py-[14px] flex items-center justify-between border-[#EFEFEF] rounded-[100px]'}>
                            <input className={'outline-none w-full active:outline-none dmsansmedium text-[#C0C0C0] text-[16px]'} placeholder={'Search'} type="text"/>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#757575"/>
                                <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#757575"/>
                            </svg>
                        </div>
                        <div className={'w-full flex cursor-pointer justify-center items-center text-white h-[50px] bg-[#3D00B7] rounded-[60px]'}>
                            <h5 className={'dmsansbold text-[14px]'}>
                                Upload
                            </h5>
                        </div>
                        <div className={'w-full h-[50px] cursor-pointer border-[2px] border-[#3D00B7] rounded-[60px] flex justify-center items-center'}>
                            <h5 className={'text-[#3D00B7] text-[14px] dmsansbold'}>
                                Connect Wallet
                            </h5>
                        </div>
                    </div>
                </div>


            <div className={'w-full h-full mb-[100px]'}>
                <div className={'w-full bg-white fixed left-0 top-0  z-20 '}>
                    <div className={' border-b-[1px] lg:px-[50px] xl:px-[100px] px-[100px] 2xl:px-[120px] border-[#EFEFEF]  py-[39px]  justify-between w-full flex flex-row'}>
                        <div className={' flex-row flex xl:gap-[30px] gap-[30px] lg:gap-[20px]'}>
                            <h5 className={'integralbold text-[24px] text-[#3D00B7]'}>
                                NFTERS
                            </h5>
                            <div className={'w-[1px] md:flex hidden h-[47px] bg-gray-200'}></div>
                            <div className={'md:flex hidden flex-row items-center gap-[20px] lg:gap-[20px] xl:gap-[47px]'}>
                                <h5 className={'dmsansmedium text-[16px]'}>
                                    Marketplace
                                </h5>
                                <h5 className={'dmsansmedium text-[16px]'}>
                                    Resource
                                </h5>
                                <h5 className={'dmsansmedium text-[16px]'}>
                                    About
                                </h5>
                            </div>
                        </div>
                        <div className={'flex-row lg:flex hidden gap-[20px]'}>
                            <div className={'2xl:w-[300px] lg:w-[200px] xl:w-[200px] cursor-pointer h-[50px] border-[2px] bg-[#FFFFFF] px-[20px] py-[14px] flex items-center justify-between border-[#EFEFEF] rounded-[100px]'}>
                                <input className={'outline-none w-full active:outline-none dmsansmedium text-[#C0C0C0] text-[16px]'} placeholder={'Search'} type="text"/>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#757575"/>
                                    <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#757575"/>
                                </svg>
                            </div>
                            <div className={'w-[131px] flex cursor-pointer justify-center items-center text-white h-[50px] bg-[#3D00B7] rounded-[60px]'}>
                                <h5 className={'dmsansbold text-[14px]'}>
                                    Upload
                                </h5>
                            </div>
                            <div className={'w-[156px] h-[50px] cursor-pointer border-[2px] border-[#3D00B7] rounded-[60px] flex justify-center items-center'}>
                                <h5 className={'text-[#3D00B7] text-[14px] dmsansbold'}>
                                    Connect Wallet
                                </h5>
                            </div>
                        </div>
                        <svg    className={'w-[50px] z-20 cursor-pointer cursor-pointer lg:hidden flex h-[50px]'} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                                onClick={() => {setMenu(prevState => !prevState)}}>
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
