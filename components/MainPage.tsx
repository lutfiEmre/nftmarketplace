import React from 'react';
import Image from "next/image";
import nftbg1 from '@/public/bg/bg1.svg'
import nftbg2 from '@/public/bg/bg2.svg'
import nftbg3 from '@/public/bg/bg3.svg'
import profile1 from '@/public/bg/profile.svg'
import amblem from '@/public/bg/digital.svg'

const MainPage = () => {
    return (
        <div className={'pt-[60px] flex flex-col lg:flex-row'}>
            <div className={'flex flex-col gap-[30px]'}>
                <h5 className={'integralbold lg:text-start text-center text-[40px] lg:w-[500px] xl:w-[700px]'}>
                    DISCOVER, AND COLLECT DIGITAL ARTS NFT
                </h5>
                <h6 className={'dmsansregular text-center lg:text-start lg:w-[380px] text-[#565656]'}>
                    Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
                </h6>
                <div className={'relative flex lg:justify-start lg:items-start justify-center items-center'}>
                    <div className={'w-[209px] z-20 mt-[25px] flex cursor-pointer justify-center items-center text-white h-[65px] bg-[#3D00B7] rounded-[60px]'}>
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
                    <div className={'p-[20px] sm:px-[40px] lg:px-[26px] lg:p-[26px] z-20 absolute w-full h-full top-0 left-0'}>
                        <div className={'w-full h-full flex-col flex justify-between'}>
                            <div className={'flex flex-col'}>
                                <h5 className={'dmsansbold text-white lg:text-[28px]'}> Abstr Gradient NFT</h5>
                                <div className={'flex flex-row gap-[14px]'}>
                                    <Image width={32} height={32}  src={profile1} alt={''}/>
                                    <h5 className={'dmsanssemi text-[20px] text-white'}> Arkhan17</h5>
                                </div>
                            </div>
                            <div className={'w-full flex flex-col sm:flex-row justify-between h-fit sm:py-[10px] py-[0px] items-center px-[26px] gap-[5px]  bg1'}>
                                <div className={'flex flex-col gap-[5px]'}>
                                    <h5 className={'dmsansmedium text-[12px] text-white'}>
                                        Current Bid
                                    </h5>
                                    <div className={'flex flex-row gap-[5px]'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                                            <g clip-path="url(#clip0_220_487)">
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
                    <div className={'absolute z-20 left-[-50px] bottom-[60px] sm:bottom-[125px]'}>
                        <Image src={amblem} width={110} height={110} alt={''}/>
                    </div>
                    <Image className={'z-0 sm:w-[350px] md:w-[400px] sm:h-[350px] md:h-[440px]'} width={400} height={440} src={nftbg1} alt={''}/>
                    <Image className={'absolute  h-[360px] -z-10 w-[250px] md:w-[400px]  right-[-20px] md:right-[-80px]'} width={400} height={440} src={nftbg2} alt={''}/>
                    <Image className={'absolute  h-[300px] -z-20 w-[200px] md:w-[400px] right-[-50px] md:right-[-150px]'} width={400} height={440} src={nftbg3} alt={''}/>

                </div>
            </div>
        </div>
    );
};

export default MainPage;
