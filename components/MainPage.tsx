import React from 'react';
import Image from "next/image";
import nftbg1 from '@/public/bg/bg1.svg'
import nftbg2 from '@/public/bg/bg2.svg'
import nftbg3 from '@/public/bg/bg3.svg'
import profile1 from '@/public/bg/profile.svg'
import profile2 from '@/public/bg/profile2.svg'
import profile3 from '@/public/bg/profile3.svg'
import profile4 from '@/public/bg/profile5.svg'
import profile5 from '@/public/bg/profile6.svg'
import amblem from '@/public/bg/digital.svg'
import unsplash1 from '@/public/bg/unsplash1.svg'
import unsplash2 from '@/public/bg/unsplash2.svg'
import unsplash3 from '@/public/bg/unsplash3.svg'
import unsp1 from '@/public/bg/UN1.svg'
import unsp2 from '@/public/bg/UN2.svg'
import unsp3 from '@/public/bg/UN3.svg'
import unsp4 from '@/public/bg/UN4.svg'
import unsp5 from '@/public/bg/U.svg'
import unsp6 from '@/public/bg/UN5.svg'
import ctag1 from '@/public/bg/ctag1.svg'
import ctag2 from '@/public/bg/ctag2.svg'
import ctag3 from '@/public/bg/ctag3.svg'
import ctag4 from '@/public/bg/ctag4.svg'

import unsplash4 from '@/public/bg/unsplash4.svg'
import exprofile1 from '@/public/bg/exprofile1.svg'
import exprofile2 from '@/public/bg/exprofile2.svg'
import exprofile3 from '@/public/bg/exprofile3.svg'
import exprofile4 from '@/public/bg/exprofile4.svg'
import exprofile5 from '@/public/bg/exprofile5.svg'
import extrasvg from '@/public/bg/extra1s.svg'
import Category from "@/components/Category";
import Footer from "@/components/Footer";

const MainPage = () => {
    return (
        <div className={'flex flex-col'}>
            <div className={'pt-[20px] lg:px-[50px] xl:px-[100px] px-[50px] 2xl:px-[120px] flex flex-col lg:flex-row'}>
                <div className={'flex flex-col gap-[30px]'}>
                    <h5 className={'integralbold lg:text-start text-center text-[40px] lg:w-[500px] xl:w-[700px]'}>
                        DISCOVER, AND COLLECT DIGITAL ARTS NFT
                    </h5>
                    <h6 className={'dmsansregular text-center lg:text-start lg:w-[380px] text-[#565656]'}>
                        Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
                    </h6>
                    <div className={'relative flex lg:justify-start lg:items-start justify-center items-center'}>
                        <div className={'w-[209px] z-0 mt-[25px] flex cursor-pointer justify-center items-center text-white h-[65px] bg-[#3D00B7] hover:bg-[#5D0CFF] cursor-pointer rounded-[60px]'}>
                            <h5 className={'dmsansbold text-[20px]'}>
                                Explore Now
                            </h5>
                        </div>
                        <svg className={'absolute -z-10 sm:left-[270px] top-[-10px] lg:left-[-50px] lg:top-[25px]'} xmlns="http://www.w3.org/2000/svg" width="196" height="154" viewBox="0 0 196 154" fill="none">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="3.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="3.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="3.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="3.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="3.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="3.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="3.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="24.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="24.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="24.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="24.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="24.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="24.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="24.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="24.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="45.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="45.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="45.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="45.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="45.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="45.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="45.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="45.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="66.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="66.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="66.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="66.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="66.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="66.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="66.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="66.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="87.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="87.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="87.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="87.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="87.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="87.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="87.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="87.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="108.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="108.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="108.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="108.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="108.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="108.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="108.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="108.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="129.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="129.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="129.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="129.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="129.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="129.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="129.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="129.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="150.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="150.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="150.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="150.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="150.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="150.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="150.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="150.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="171.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="171.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="171.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="171.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="171.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="171.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="171.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="171.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="192.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="192.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="192.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="192.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="192.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="192.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="192.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
                            <circle cx="192.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
                        </svg>

                    </div>
                    <div className={'flex flexrow lg:justify-start lg:items-start justify-center items-center mt-[30px] gap-[23px]'}>
                        <div className={'flex flex-col'}>
                            <h5 className={''}>
                            <span className={'integralbold text-[40px] leading-3 tracking-wide'}>
                                 98K
                            </span><span className={'text-[40px] leading-3 font-bold'}>+</span>
                            </h5>
                            <h6 className={'dmsansregular text-[#565656]'}>
                                Artworks
                            </h6>
                        </div>
                        <div className={'flex flex-col'}>
                            <h5 className={''}>
                            <span className={'integralbold text-[40px] leading-3 tracking-wide'}>
                                 12K
                            </span><span className={'text-[40px] leading-3 font-bold'}>+</span>
                            </h5>
                            <h6 className={'dmsansregular text-[#565656]'}>
                                Auction
                            </h6>
                        </div>
                        <div className={'flex flex-col'}>
                            <h5 className={''}>
                            <span className={'integralbold text-[40px] leading-3 tracking-wide'}>
                                 5K
                            </span><span className={'text-[40px] leading-3 font-bold'}>+</span>
                            </h5>
                            <h6 className={'dmsansregular text-[#565656]'}>
                                Artists
                            </h6>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col justify-center items-center mt-[50px] lg:mt-0 gap-[20px]'}>
                    <div className={'relative w-fit h-fit flex items-center'}>
                        <div className={'p-[20px] sm:px-[40px] lg:px-[26px] lg:p-[26px] z-10 absolute w-full h-full top-0 left-0'}>
                            <div className={'w-full h-full flex-col flex justify-between'}>
                                <div className={'flex flex-col'}>
                                    <h5 className={'dmsansbold text-white lg:text-[28px]'}> Abstr Gradient NFT</h5>
                                    <div className={'flex flex-row gap-[14px]'}>
                                        <Image width={32} height={32}  src={profile1} alt={''}/>
                                        <h5 className={'dmsanssemi text-[20px] text-white'}> Arkhan17</h5>
                                    </div>
                                </div>
                                <div className={'w-full flex flex-col sm:flex-row justify-between h-fit sm:py-[30px] py-[15px] items-center px-[26px] gap-[5px]  bg1'}>
                                    <div className={'flex flex-col gap-[5px]'}>
                                        <h5 className={'dmsansmedium text-[12px] text-white'}>
                                            Current Bid
                                        </h5>
                                        <div className={'flex flex-row gap-[5px]'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                                                <g clipPath={"url(#clip0_220_487)"}>
                                                    <path d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879V16.4879Z" fill="white"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_220_487">
                                                        <rect width="13" height="21.3333" fill="white" transform="translate(0 0.512939)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <h5 className={'dmsansbold text-[16px] text-white'}>
                                                0.25 ETH
                                            </h5>
                                        </div>
                                    </div>
                                    <div className={'flex flex-col gap-[5px]'}>
                                        <h5 className={'dmsansmedium text-[12px] text-white'}>
                                            Ends in
                                        </h5>
                                        <div className={'flex flex-row gap-[5px]'}>
                                            <h5 className={'dmsansbold text-[16px] text-white'}>
                                                12
                                                <span className={'dmsansregular'}>h</span>
                                            </h5>
                                            <h5 className={'dmsansbold text-[16px] text-white'}>
                                                43
                                                <span className={'dmsansregular'}>m</span>
                                            </h5>
                                            <h5 className={'dmsansbold text-[16px] text-white'}>
                                                42
                                                <span className={'dmsansregular'}>s</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={'absolute z-10 left-[-50px] bottom-[60px] sm:bottom-[125px]'}>
                            <Image src={amblem} width={110} height={110} alt={''}/>
                        </div>
                        <Image className={'z-0 sm:w-[350px] md:w-[400px] sm:h-[350px] md:h-[440px]'} width={400} height={440} src={nftbg1} alt={''}/>
                        <Image className={'absolute  h-[360px] -z-10 w-[250px] md:w-[400px]  right-[-20px] md:right-[-80px]'} width={400} height={440} src={nftbg2} alt={''}/>
                        <Image className={'absolute  h-[300px] -z-20 w-[200px] md:w-[400px] right-[-50px] md:right-[-150px]'} width={400} height={440} src={nftbg3} alt={''}/>

                    </div>
                </div>
            </div>
            <div className={'py-[60px] lg:py-[100px] lg:px-[50px] xl:px-[100px] px-[100px] 2xl:px-[120px] flex justify-start items-center flex-col lg:gap-[80px] gap-[80px] lg:flex-row mt-[100px] w-full h-fit  bg2'}>
                <h4 className={'integralbold text-[28px] w-[400px] sm:text-start text-center text-black'}>The amazing NFT art of the world here</h4>
                <div className={'flex flex-row gap-[10px]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28" fill="none">
                        <path d="M19.25 9.875H2C1.385 9.875 0.875 9.365 0.875 8.75C0.875 8.135 1.385 7.625 2 7.625H19.25C19.865 7.625 20.375 8.135 20.375 8.75C20.375 9.365 19.865 9.875 19.25 9.875Z" fill="black"/>
                        <path d="M11 21.875H8C7.385 21.875 6.875 21.365 6.875 20.75C6.875 20.135 7.385 19.625 8 19.625H11C11.615 19.625 12.125 20.135 12.125 20.75C12.125 21.365 11.615 21.875 11 21.875Z" fill="black"/>
                        <path d="M20.75 21.875H14.75C14.135 21.875 13.625 21.365 13.625 20.75C13.625 20.135 14.135 19.625 14.75 19.625H20.75C21.365 19.625 21.875 20.135 21.875 20.75C21.875 21.365 21.365 21.875 20.75 21.875Z" fill="black"/>
                        <path d="M25.34 27.875H8.66C2.69 27.875 0.875 26.075 0.875 20.165V7.835C0.875 1.925 2.69 0.125 8.66 0.125H19.25C19.865 0.125 20.375 0.635 20.375 1.25C20.375 1.865 19.865 2.375 19.25 2.375H8.66C3.95 2.375 3.125 3.185 3.125 7.835V20.15C3.125 24.8 3.95 25.61 8.66 25.61H25.325C30.035 25.61 30.86 24.8 30.86 20.15V12.53C30.86 11.915 31.37 11.405 31.985 11.405C32.6 11.405 33.11 11.915 33.11 12.53V20.15C33.125 26.075 31.31 27.875 25.34 27.875Z" fill="black"/>
                        <path d="M25.9993 8.37564C25.7143 8.37564 25.4293 8.27064 25.2043 8.04564L22.9543 5.79564C22.5193 5.36064 22.5193 4.64064 22.9543 4.20564C23.3893 3.77064 24.1092 3.77064 24.5442 4.20564L25.9993 5.66065L31.2043 0.455645C31.6393 0.0206451 32.3592 0.0206451 32.7942 0.455645C33.2292 0.890645 33.2292 1.61064 32.7942 2.04564L26.7942 8.04564C26.5692 8.27064 26.2843 8.37564 25.9993 8.37564Z" fill="black"/>
                    </svg>
                    <div className={'flex flex-col'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            Fast Transaction
                        </h5>
                        <h4 className={'dmsansregular w-[250px] text-[14px] text-black'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
                        </h4>
                    </div>

                </div>
                <div className={'flex flex-row gap-[10px]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M14.1655 26.2246H8.48046C7.86546 26.2246 7.35546 25.7146 7.35546 25.0996V17.4195C7.35546 15.8595 8.63045 14.5844 10.1904 14.5844H14.1655C14.7805 14.5844 15.2905 15.0944 15.2905 15.7094V25.0844C15.2905 25.7144 14.7805 26.2246 14.1655 26.2246ZM9.60546 23.9746H13.0404V16.8496H10.1904C9.87545 16.8496 9.60546 17.1044 9.60546 17.4344V23.9746Z" fill="#292D32"/>
                        <path d="M19.8344 26.2246H14.1494C13.5344 26.2246 13.0244 25.7146 13.0244 25.0996V10.6094C13.0244 9.04943 14.2994 7.77442 15.8594 7.77442H18.1394C19.6994 7.77442 20.9744 9.04943 20.9744 10.6094V25.0996C20.9594 25.7146 20.4644 26.2246 19.8344 26.2246ZM18.7244 23.9746V10.6094C18.7244 10.2944 18.4694 10.0244 18.1394 10.0244H15.8594C15.5444 10.0244 15.2744 10.2794 15.2744 10.6094V23.9746H18.7244Z" fill="#292D32"/>
                        <path d="M25.5209 26.2246H19.8359C19.2209 26.2246 18.7109 25.7146 18.7109 25.0996V18.2744C18.7109 17.6594 19.2209 17.1494 19.8359 17.1494H23.8109C25.3709 17.1494 26.6459 18.4244 26.6459 19.9844V25.0996C26.6459 25.7146 26.1509 26.2246 25.5209 26.2246ZM20.9609 23.9746H24.3959V19.9844C24.3959 19.6694 24.1409 19.3994 23.8109 19.3994H20.9609V23.9746Z" fill="#292D32"/>
                        <path d="M21.5 33.125H12.5C4.355 33.125 0.875 29.645 0.875 21.5V12.5C0.875 4.355 4.355 0.875 12.5 0.875H21.5C29.645 0.875 33.125 4.355 33.125 12.5V21.5C33.125 29.645 29.645 33.125 21.5 33.125ZM12.5 3.125C5.585 3.125 3.125 5.585 3.125 12.5V21.5C3.125 28.415 5.585 30.875 12.5 30.875H21.5C28.415 30.875 30.875 28.415 30.875 21.5V12.5C30.875 5.585 28.415 3.125 21.5 3.125H12.5Z" fill="#292D32"/>
                    </svg>
                    <div className={'flex flex-col'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            Growth Transaction
                        </h5>
                        <h4 className={'dmsansregular w-[250px] text-[14px] text-black'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus
                        </h4>
                    </div>

                </div>
            </div>
            <div className={'mt-[00px] py-[50px] lg:py-[100px] lg:px-[50px] xl:px-[100px] px-[25px] sm:x-[100px] w-full flex  flex-row'}>
                <div className={'flex  w-full mt-[50px] lg:mt-0 lg:flex-col xl:flex-row h-full flex-col  lg:justify-center xl:justify-start justify-center items-center lg:items-center xl:items-start gap-[70px] lg:gap-[50px]  2xl:gap-[70px] xl:gap-[50px]'}>
                    <div className={'flex flex-col gap-[32px] px-[20px] sm:px-0'}>
                        <Image className={'rounded-[24px] 2xl:w-[600px] w-[450px]'} src={unsplash1} width={400} height={400} alt={''}/>
                        <div className={'flex flex-row w-full items-center justify-between '}>
                            <div className={'flex flex-row gap-[15px]'}>
                                <Image  width={48} height={48}  src={profile1} alt={''}/>
                                <div className={'flex flex-col gap-[2px]'}>
                                    <h5 className={'dmsansbold text-[20px]'}>
                                        The Futr Abstr
                                    </h5>
                                    <h6 className={'dmsansregular'}>
                                        10 in the stock
                                    </h6>
                                </div>
                            </div>
                            <div className={'flex flex-col gap-[5px]'}>
                                <h5 className={'dmsansmedium text-[12px] text-black'}>
                                    Highest Bid
                                </h5>
                                <div className={'flex flex-row gap-[5px]'}>
                                    <svg className={'fill-black'} xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                                        <g clipPath={"url(#clip0_220_487)"}>
                                            <path d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879V16.4879Z" fill=""/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_220_487">
                                                <rect width="13" height="21.3333" fill="" transform="translate(0 0.512939)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h5 className={'dmsansbold text-[16px] text-black'}>
                                        0.25 ETH
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col w-full h-full lg:flex-row lg:justify-center xl:justify-start justify-center items-center lg:items-center xl:items-start gap-[70px] lg:gap-[50px] 2xl:gap-[50px] xl:gap-[30px]'}>
                        <div className={'flex flex-col gap-[41px] '}>
                            <div className={'flex flex-row gap-[20px]'}>
                                <Image className={'xl:w-[147px] h-auto lg:w-[130px]'} width={147} height={147} src={unsplash2} alt={''}/>
                                <div className={'flex gap-[10px] flex-col'}>
                                    <h5 className={'dmsansbold text-[20px]'}>
                                        The Futr Abstr
                                    </h5>
                                    <div className={'flex items-center flex-row gap-[8px]'}>
                                        <Image width={34} height={34}  src={profile1} alt={''}/>
                                        <div className={'p-[8px] flex flex-row gap-[5px] items-center rounded-[6px] border-[1px] border-[#00AC4F]'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                                <g clipPath="url(#clip0_220_568)">
                                                    <path d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836V10.4836Z" fill="#00AC4F"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_220_568">
                                                        <rect width="8.53125" height="14" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <h5 className={'dmsansbold  text-[12px] text-[#00AC4F]'}>
                                                0.25 ETH
                                            </h5>
                                        </div>
                                        <h6 className={'text-[#757575] ml-[2px] text-[14px] dmsansregular'}>
                                            1 of 8
                                        </h6>
                                    </div>
                                    <div className={'px-[20px] mt-[6px] h-[40px] flex justify-center items-center w-fit lg:py-[6px]  h-[40px] flex justify-center items-centerxl:py-[14px] rounded-[50px] bg-[#3D00B7] hover:bg-[#5D0CFF] cursor-pointer'}>
                                        <h5 className={'text-white'}>Place a bid</h5>
                                    </div>

                                </div>
                            </div>
                            <div className={'flex flex-row gap-[20px]'}>
                                <Image className={'xl:w-[147px] h-auto lg:w-[130px]'} width={147} height={147} src={unsplash3} alt={''}/>
                                <div className={'flex gap-[10px] flex-col'}>
                                    <h5 className={'dmsansbold text-[20px]'}>
                                        The Futr Abstr
                                    </h5>
                                    <div className={'flex items-center flex-row gap-[8px]'}>
                                        <Image width={34} height={34}  src={profile1} alt={''}/>
                                        <div className={'p-[8px] flex flex-row gap-[5px] items-center rounded-[6px] border-[1px] border-[#00AC4F]'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                                <g clipPath="url(#clip0_220_568)">
                                                    <path d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836V10.4836Z" fill="#00AC4F"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_220_568">
                                                        <rect width="8.53125" height="14" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <h5 className={'dmsansbold text-[12px] text-[#00AC4F]'}>
                                                0.25 ETH
                                            </h5>
                                        </div>
                                        <h6 className={'text-[#757575] ml-[2px] text-[14px] dmsansregular'}>
                                            1 of 8
                                        </h6>
                                    </div>
                                    <div className={'px-[20px] mt-[6px] w-fit lg:py-[6px]  h-[40px] flex justify-center items-center xl:py-[14px] rounded-[50px] border-[2px] border-[#3D00B7]'}>
                                        <h5 className={'text-[#220970]'}>Place a bid</h5>
                                    </div>

                                </div>
                            </div>
                            <div className={'flex flex-row gap-[20px]'}>
                                <Image className={'xl:w-[147px] h-auto lg:w-[130px]'} width={147} height={147} src={unsplash4} alt={''}/>
                                <div className={'flex gap-[10px] flex-col'}>
                                    <h5 className={'dmsansbold text-[20px]'}>
                                        The Futr Abstr
                                    </h5>
                                    <div className={'flex items-center flex-row gap-[8px]'}>
                                        <Image width={34} height={34}  src={profile1} alt={''}/>
                                        <div className={'p-[8px] flex flex-row gap-[5px] items-center rounded-[6px] border-[1px] border-[#00AC4F]'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                                <g clipPath="url(#clip0_220_568)">
                                                    <path d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836V10.4836Z" fill="#00AC4F"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_220_568">
                                                        <rect width="8.53125" height="14" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <h5 className={'dmsansbold text-[12px] text-[#00AC4F]'}>
                                                0.25 ETH
                                            </h5>
                                        </div>
                                        <h6 className={'text-[#757575] ml-[2px] text-[14px] dmsansregular'}>
                                            1 of 8
                                        </h6>
                                    </div>
                                    <div className={'px-[20px] mt-[6px] w-fit lg:py-[6px]  h-[40px] flex justify-center items-center xl:py-[14px] rounded-[50px] border-[2px] border-[#3D00B7]'}>
                                        <h5 className={'text-[#220970]'}>Place a bid</h5>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={'w-[1px] h-full hidden lg:flex bg-[#ECECEC]'}></div>
                        <div className={'flex flex-col gap-[16px]'}>
                            <div className={'flex flex-col gap-[5px]'}>
                                <h4 className={'text-[20px] integralbold'}>
                                    Top Collections over
                                </h4>
                                <h4 className={'text-[20px] text-[#3D00B7] dmsansbold'}>
                                    Last 7 days
                                </h4>
                            </div>
                            <div className={'flex flex-row mt-[10px] items-center gap-[22px]'}>
                                <p className={'text-[24px] w-[10px] dmsansbold'}>1</p>
                                <div className={'relative'}>
                                    <Image src={exprofile1} width={60} height={60} alt={''}/>
                                    <svg className={'absolute right-[-5px] top-[-5px]'} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <rect x="8" y="10" width="16" height="11" fill="white"/>
                                        <path d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z" fill="#1E93FF"/>
                                    </svg>
                                </div>
                                <div className={'flex flex-col w-[100px] min-w-[100px] gap-[10px]'}>
                                    <h5 className={'dmsansmedium text-[16px]'}>
                                        CryptoFunks
                                    </h5>
                                    <div className={'flex flex-row gap-[6px]'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                                            <g clipPath="url(#clip0_220_611)">
                                                <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719V17.9719Z" fill="black"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_220_611">
                                                    <rect width="15" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h5 className={'text-[##636363] text-[14px] font-semibold'}>
                                            19,769.39
                                        </h5>
                                    </div>
                                </div>
                                <h6 className={'text-[#14C8B0] ml-[15px] text-[20px] font-semibold'}>
                                    +26.52%
                                </h6>
                            </div>
                            <div className={'w-full h-[1px] bg-[#F0F0F0]'}></div>
                            <div className={'flex flex-row items-center gap-[22px]'}>
                                <p className={'text-[24px] w-[10px] dmsansbold'}>2</p>
                                <div className={'relative'}>
                                    <Image src={exprofile2} width={60} height={60} alt={''}/>
                                    <svg className={'absolute right-[-5px] top-[-5px]'} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <rect x="8" y="10" width="16" height="11" fill="white"/>
                                        <path d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z" fill="#1E93FF"/>
                                    </svg>
                                </div>
                                <div className={'flex flex-col w-[100px]  min-w-[100px] gap-[10px]'}>
                                    <h5 className={'dmsansmedium text-[16px]'}>
                                        Cryptix
                                    </h5>
                                    <div className={'flex flex-row gap-[6px]'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                                            <g clipPath="url(#clip0_220_611)">
                                                <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719V17.9719Z" fill="black"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_220_611">
                                                    <rect width="15" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h5 className={'text-[##636363] text-[14px] font-semibold'}>
                                            2,769.39
                                        </h5>
                                    </div>
                                </div>
                                <h6 className={'text-[#FF002E] ml-[15px] text-[20px] font-semibold'}>
                                    +10.52%
                                </h6>
                            </div>
                            <div className={'w-full h-[1px] bg-[#F0F0F0]'}></div>
                            <div className={'flex flex-row items-center gap-[22px]'}>
                                <p className={'text-[24px] w-[10px] dmsansbold'}>3</p>
                                <div className={'relative'}>
                                    <Image src={exprofile3} width={60} height={60} alt={''}/>
                                    <svg className={'absolute right-[-5px] top-[-5px]'} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <rect x="8" y="10" width="16" height="11" fill="white"/>
                                        <path d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z" fill="#1E93FF"/>
                                    </svg>
                                </div>
                                <div className={'flex flex-col w-[100px] min-w-[100px] gap-[10px]'}>
                                    <h5 className={'dmsansmedium text-[16px]'}>
                                        Frensware
                                    </h5>
                                    <div className={'flex flex-row gap-[6px]'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                                            <g clipPath="url(#clip0_220_611)">
                                                <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719V17.9719Z" fill="black"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_220_611">
                                                    <rect width="15" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h5 className={'text-[##636363] text-[14px] font-semibold'}>
                                            9,232.39
                                        </h5>
                                    </div>
                                </div>
                                <h6 className={'text-[#14C8B0] ml-[15px] text-[20px] font-semibold'}>
                                    +2.52%
                                </h6>
                            </div>
                            <div className={'w-full h-[1px] bg-[#F0F0F0]'}></div>
                            <div className={'flex flex-row items-center gap-[22px]'}>
                                <p className={'text-[24px] w-[10px] dmsansbold'}>4</p>
                                <div className={'relative'}>
                                    <Image src={exprofile4} width={60} height={60} alt={''}/>
                                    <svg className={'absolute right-[-5px] top-[-5px]'} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <rect x="8" y="10" width="16" height="11" fill="white"/>
                                        <path d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z" fill="#1E93FF"/>
                                    </svg>
                                </div>
                                <div className={'flex flex-col w-[100px] min-w-[100px] gap-[10px]'}>
                                    <h5 className={'dmsansmedium text-[16px]'}>
                                        PunkArt
                                    </h5>
                                    <div className={'flex flex-row gap-[6px]'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                                            <g clipPath="url(#clip0_220_611)">
                                                <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719V17.9719Z" fill="black"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_220_611">
                                                    <rect width="15" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h5 className={'text-[##636363] text-[14px] font-semibold'}>
                                            3,769.39
                                        </h5>
                                    </div>
                                </div>
                                <h6 className={'text-[#14C8B0] ml-[15px] text-[20px] font-semibold'}>
                                    +1.52%
                                </h6>
                            </div>
                            <div className={'w-full h-[1px] bg-[#F0F0F0]'}></div>
                            <div className={'flex flex-row items-center gap-[22px]'}>
                                <p className={'text-[24px] w-[10px] dmsansbold'}>5</p>
                                <div className={'relative'}>
                                    <Image src={exprofile5} width={60} height={60} alt={''}/>
                                    <svg className={'absolute right-[-5px] top-[-5px]'} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <rect x="8" y="10" width="16" height="11" fill="white"/>
                                        <path d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z" fill="#1E93FF"/>
                                    </svg>
                                </div>
                                <div className={'flex flex-col w-[100px]  min-w-[100px] gap-[10px]'}>
                                    <h5 className={'dmsansmedium text-[16px]'}>
                                        Art Crypto
                                    </h5>
                                    <div className={'flex flex-row gap-[6px]'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                                            <g clipPath="url(#clip0_220_611)">
                                                <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719V17.9719Z" fill="black"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_220_611">
                                                    <rect width="15" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h5 className={'text-[##636363] text-[14px] font-semibold'}>
                                            10,769.39
                                        </h5>
                                    </div>
                                </div>
                                <h6 className={'text-[#FF002E] ml-[15px] text-[20px] font-semibold'}>
                                    +2.52%
                                </h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-[#D9E0EC] bg-opacity-[20%] py-[100px] w-full justify-center items-center flex flex-col gap-[55px]'}>
                <h5 className={'integralbold text-black text-[20px] sm:text-[28px]'}>
                    Collection Featured NFTs
                </h5>
                <div className={'flex flex-row flex-wrap items-center justify-center gap-[50px]'}>
                    <div className={'flex flex-col gap-[30px]'}>
                        <div className={'flex flex-row gap-[10px]'}>
                            <Image className={'w-[265px] rounded-[11px] object-cover h-[270px]'} width={265} height={272} src={unsp1} alt={''}/>
                            <div className={'flex flex-col gap-[8px]'}>
                                <Image className={'w-[103px] object-cover rounded-[20px] h-[85px]'} width={103} height={85} src={unsp2} alt={''}/>
                                <Image className={'w-[103px] object-cover rounded-[20px] h-[85px]'} width={103} height={85} src={unsp3} alt={''}/>

                                <Image className={'w-[103px] object-cover rounded-[20px] h-[85px]'} width={103} height={85} src={unsp4} alt={''}/>


                            </div>
                        </div>
                        <div className={'flex flex-col gap-[15px]'}>
                            <h5 className={'dmsansbold text-[20px]'}>
                                Amazing Collection
                            </h5>
                            <div className={'w-full flex flex-row justify-between items-center'}>
                                <div className={'flex flex-row w-fit items-center gap-[10px]'}>
                                    <Image src={profile1} width={32} height={32} alt={''}/>
                                    <h5 className={'dmsansmedium text-[16px]'}>
                                        by Arkhan
                                    </h5>
                                </div>
                                <div className={'w-[100px] flex justify-center items-center rounded-[60px] h-[30px] border-[1px] border-[#2639ED]'}>
                                    <h5 className={'dmsansbold text-[11px] text-[#2639ED]'}>
                                        Total 54 Items
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[30px]'}>
                        <div className={'flex flex-row gap-[10px]'}>
                            <Image className={'w-[265px] rounded-[11px] object-cover h-[270px]'} width={265} height={272} src={unsp1} alt={''}/>
                            <div className={'flex flex-col gap-[8px]'}>
                                <Image className={'w-[103px] object-cover rounded-[20px] h-[85px]'} width={103} height={85} src={unsp2} alt={''}/>
                                <Image className={'w-[103px] object-cover rounded-[20px] h-[85px]'} width={103} height={85} src={unsp3} alt={''}/>

                                <Image className={'w-[103px] object-cover rounded-[20px] h-[85px]'} width={103} height={85} src={unsp4} alt={''}/>


                            </div>
                        </div>
                        <div className={'flex flex-col gap-[15px]'}>
                            <h5 className={'dmsansbold text-[20px]'}>
                                Amazing Collection
                            </h5>
                            <div className={'w-full flex flex-row justify-between items-center'}>
                                <div className={'flex flex-row w-fit items-center gap-[10px]'}>
                                    <Image src={profile1} width={32} height={32} alt={''}/>
                                    <h5 className={'dmsansmedium text-[16px]'}>
                                        by Arkhan
                                    </h5>
                                </div>
                                <div className={'w-[100px] flex justify-center items-center rounded-[60px] h-[30px] border-[1px] border-[#2639ED]'}>
                                    <h5 className={'dmsansbold text-[11px] text-[#2639ED]'}>
                                        Total 54 Items
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[30px]'}>
                        <div className={'flex flex-row gap-[10px]'}>
                            <Image className={'w-[265px] rounded-[11px] object-cover h-[270px]'} width={265} height={272} src={unsp1} alt={''}/>
                            <div className={'flex flex-col gap-[8px]'}>
                                <Image className={'w-[103px] object-cover rounded-[20px] h-[85px]'} width={103} height={85} src={unsp2} alt={''}/>
                                <Image className={'w-[103px] object-cover rounded-[20px] h-[85px]'} width={103} height={85} src={unsp3} alt={''}/>

                                <Image className={'w-[103px] object-cover rounded-[20px] h-[85px]'} width={103} height={85} src={unsp4} alt={''}/>


                            </div>
                        </div>
                        <div className={'flex flex-col gap-[15px]'}>
                            <h5 className={'dmsansbold text-[20px]'}>
                                Amazing Collection
                            </h5>
                            <div className={'w-full flex flex-row justify-between items-center'}>
                                <div className={'flex flex-row w-fit items-center gap-[10px]'}>
                                    <Image src={profile1} width={32} height={32} alt={''}/>
                                    <h5 className={'dmsansmedium text-[16px]'}>
                                        by Arkhan
                                    </h5>
                                </div>
                                <div className={'w-[100px] flex justify-center items-center rounded-[60px] h-[30px] border-[1px] border-[#2639ED]'}>
                                    <h5 className={'dmsansbold text-[11px] text-[#2639ED]'}>
                                        Total 54 Items
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'py-[50px] lg:py-[100px] px-[50px] gap-[50px] w-full flex flex-col lg:flex-row justify-center items-center'}>
                <Image className={'xl:w-[606px] w-[450px] h-auto'} width={640} height={606} src={extrasvg} alt={''}/>
                <div className={'flex flex-col items-center lg:items-start gap-[20px]'}>
                    <h5 className={'integralbold text-[32px] w-[320px] break-words'}>
                        Create and sell your NFTs
                    </h5>
                    <h6 className={'text-[18px] dmsansregular w-[350px] sm:w-[550px] md:w-[600px] lg:w-[517px] text-[#636363]'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
                    </h6>
                    <div className={'w-[180px] lg:w-[212px] group h-[50px] hover:bg-[#5D0CFF] lg:h-[65px] cursor-pointer flex justify-center items-center rounded-[60px] bg-[#3D00B7] hover:bg-[#5D0CFF] cursor-pointer'}>
                        <h4 className={'text-white select-none dmsansmedium text-[17px] lg:text-[20px]'}>
                            Sign Up Now
                        </h4>
                    </div>
                </div>
            </div>
            <div className={'py-[100px] w-full lg:px-[50px] xl:px-[100px] px-[50px] bg-[#D9E0EC] bg-opacity-20'}>
                <div className={'flex flex-col  w-full gap-[36px]'}>
                    <h5 className={'integralbold  text-[24px]'}>
                        Discover more NFTs
                    </h5>
                    <div className={'flex flex-row gap-[20px] flex-wrap justify-between w-full'}>
                        <div className={'flex flex-wrap flex-row gap-[20px]'}>
                            <div className={'px-[20px] py-[10px] rounded-[100px] text-white bg-[#3D00B7] hover:bg-[#5D0CFF] cursor-pointer'}>
                                <h4 className={'text-[14px] font-medium'}>
                                    All Categories
                                </h4>
                            </div>
                            <div className={'px-[20px] py-[10px] rounded-[100px] text-black bg-opacity-20 bg-[#DCDCDC] cursor-pointer'}>
                                <h4 className={'text-[14px] font-medium'}>
                                    Art
                                </h4>
                            </div>
                            <div className={'px-[20px] py-[10px] rounded-[100px] text-black bg-opacity-20 bg-[#DCDCDC] cursor-pointer'}>
                                <h4 className={'text-[14px] font-medium'}>
                                    Celebrities
                                </h4>
                            </div>
                            <div className={'px-[20px] py-[10px] rounded-[100px] text-black bg-opacity-20 bg-[#DCDCDC] cursor-pointer'}>
                                <h4 className={'text-[14px] font-medium'}>
                                    Gaming
                                </h4>
                            </div>
                            <div className={'px-[20px] py-[10px] rounded-[100px] text-black bg-opacity-20 bg-[#DCDCDC] cursor-pointer'}>
                                <h4 className={'text-[14px] font-medium'}>
                                    Sport
                                </h4>
                            </div>
                            <div className={'px-[20px] py-[10px] rounded-[100px] text-black bg-opacity-20 bg-[#DCDCDC] cursor-pointer'}>
                                <h4 className={'text-[14px] font-medium'}>
                                    Music
                                </h4>
                            </div>
                        </div>
                        <div className={'w-[135px] cursor-pointer rounded-[100px] h-[44px] gap-[5px] flex justify-center items-center bg-[#DCDCDC] cursor-pointer px-[20px] py-[10px] bg-opacity-20'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_220_743)">
                                    <path d="M9.33333 20H14.6667V17.3333H9.33333V20ZM0 4V6.66667H24V4H0ZM4 13.3333H20V10.6667H4V13.3333Z" fill="#371C87"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_220_743">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h3 className={'text-[14px] text-[#371C87] dmsansmedium'}>All Filters</h3>
                        </div>
                    </div>
                    <Category/>
                </div>
            </div>
                <Footer/>
        </div>
    );
};

export default MainPage;
