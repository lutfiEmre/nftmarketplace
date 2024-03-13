'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import ctag1 from "@/public/bg/ctag1.svg";
import profile2 from "@/public/bg/profile2.svg";
import profile3 from "@/public/bg/profile3.svg";
import profile4 from "@/public/bg/profile5.svg";
import profile5 from "@/public/bg/profile6.svg";

const Category = () => {
    interface SeesState {
        number: number;
        items: NodeListOf<Element>;
    }

    const [sees, setSees] = useState<SeesState>({
        number: 8,
        items: []
    });

    useEffect(() => {
        const veri : NodeListOf<Element> = document.querySelectorAll('.categoryitem')
        setSees({
            ...sees,
            items: veri
        })
    },[])


    const handleClick = () => {
        const itemsArray = Array.from(sees.items);
        const firstSix = itemsArray.slice(sees.number, sees.number + 4);

        firstSix.map((item: Element) => item.classList.remove('hidden'))
        setSees({...sees, number: sees.number + 4})

    }



    return (
        <div className={'flex flex-col items-center justify-center w-full'}>
            <div className={'grid lg:grid-cols-4 justify-items-center justify-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[40px] w-full'}>
                <div className={'w-fit flex flex-col flex bg-white rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col 8 flex bg-white rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col 9 flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col 10 flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>
                <div className={'w-fit flex flex-col flex bg-white hidden rounded-[14px] categoryitem p-[11px] gap-[15px]'}>
                    <div className={'flex relative'}>
                        <Image className={'w-[242px] h-auto object-cover rounded-[12px]'} width={242} height={222} src={ctag1} alt={''}/>
                        <div className={'w-fit absolute bottom-[-10px] left-[12px] flex flex-row gap-[0px]'}>
                            <Image className={''} src={profile2} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile3} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile4} width={32} height={32} alt={''}/>
                            <Image className={'-ml-[10px]'} src={profile5} width={32} height={32} alt={''}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[10px]'}>
                        <h5 className={'dmsansbold text-[20px] text-black'}>
                            ArtCrypto
                        </h5>
                        <div className={'flex w-full justify-between items-center'}>
                            <div className={'flex flex-row gap-[5px]'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_241_127)">
                                        <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_241_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={'text-[12px] dmsansbold text-[#00AC4F]'}>0.25 ETH</p>
                            </div>
                            <h5 className={'dmsansmedium text-[13px] text-[#838383]'}>
                                1 of 321
                            </h5>
                        </div>
                        <div className={'w-full h-[1px] bg-[#F4F4F4] my-[5px]'}></div>
                        <div className={'flex justify-between w-full'}>
                            <div className={'bg-[#F5F5F5] px-[11px] py-[5px] rounded-[110px]'}>
                                <h6 className={'text-[#5539A8] text-[11px] dmsansmedium'}>
                                    3h 50m 2s left
                                </h6>
                            </div>
                            <h6 className={'text-[#5539A8] text-[12px] xl:text-[15px] dmsansmedium'}>
                                Place a bid
                            </h6>
                        </div>
                    </div>

                </div>

            </div>
            <div onClick={() => {handleClick()}} className={'mt-[55px] w-[179px] cursor-pointer rounded-[50px] flex justify-center items-center h-[66px] border-[2px] border-[#3D00B7]'}>
                <h6 className={'text-[#3D00B7] dmsansmedium text-[20px]'}>
                    More NFTs
                </h6>
            </div>
        </div>
    );
};

export default Category;
