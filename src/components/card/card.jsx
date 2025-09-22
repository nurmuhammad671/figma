import heart from "../../assets/images/header.svg"
import growth from "../../assets/images/growth.svg"
import gifts from "../../assets/images/gift.svg"
import skoda from "../../assets/images/skoda.svg"
import camera from "../../assets/images/camera.svg"

import CarCard from "../carcard/carcard"

const Card = () => {
    return (
        <section>
            <div className="flex flex-wrap gap-9 mt-10" >
                <div className="w-[406px] shadow shadow-slate-700 rounded-3xl">
                    <div className="flex pl-7 pt-4">
                        <h3 className="font-normal text-2xl ">Skoda Octavia <br /> 1.6 MPI MT Active </h3>
                        <div className="flex gap-4 ml-29 ">
                            <img className="w-[18px]" src={heart} alt="" />
                            <img className="w-[14px]" src={growth} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center pl-7 pt-4" >
                            <button className="w-[160px] bg-red-700 text-white p-2 rounded-xl">Предложение дня</button>
                            <p className="text-red-800 ml-6">Выгода до <br /> 300 000 ₽</p>
                        </div>
                        <div className="flex mt-5">
                            <div className="">
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                            </div>
                            <div className="">
                                <img src={skoda} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pl-7">
                        <div className="flex gap-8">
                            <p className="font-bold text-xl"> от 1 615 000 ₽ </p>
                            <p className="font-normal text-md">Кредит от 115 000 ₽/мес. </p>
                        </div>
                        <div className="flex pt-5">
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                        </div>
                    </div>
                    <div className="flex w-[369px] h-[50px] mt-6 ml-7 mb-4 text-white">
                        <button className="w-[132px] bg-red-700 rounded-l-md">Резерв онлайн</button>
                        <button className="w-[132px] bg-black"> Купить</button>
                        <button className="w-[132px] bg-[#737373] rounded-r-md">Подробнее</button>
                    </div>
                </div>
                <div className="w-[406px] shadow shadow-slate-700 rounded-3xl">
                    <div className="flex pl-7 pt-4">
                        <h3 className="font-normal text-2xl ">Skoda Octavia <br /> 1.6 MPI MT Active </h3>
                        <div className="flex gap-4 ml-29 ">
                            <img className="w-[18px]" src={heart} alt="" />
                            <img className="w-[14px]" src={growth} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center pl-7 pt-4" >
                            <button className="w-[160px] bg-red-700 text-white p-2 rounded-xl">Предложение дня</button>
                            <p className="text-red-800 ml-6">Выгода до <br /> 300 000 ₽</p>
                        </div>
                        <div className="flex mt-5">
                            <div className="">
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                            </div>
                            <div className="">
                                <img src={skoda} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pl-7">
                        <div className="flex gap-8">
                            <p className="font-bold text-xl"> от 1 615 000 ₽ </p>
                            <p className="font-normal text-md">Кредит от 115 000 ₽/мес. </p>
                        </div>
                        <div className="flex pt-5">
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                        </div>
                    </div>
                    <div className="flex w-[369px] h-[50px] mt-6 ml-7 mb-4 text-white">
                        <button className="w-[132px] bg-red-700 rounded-l-md">Резерв онлайн</button>
                        <button className="w-[132px] bg-black"> Купить</button>
                        <button className="w-[132px] bg-[#737373] rounded-r-md">Подробнее</button>
                    </div>
                </div>
                <div className="w-[406px] shadow shadow-slate-700 rounded-3xl">
                    <div className="flex pl-7 pt-4">
                        <h3 className="font-normal text-2xl ">Skoda Octavia <br /> 1.6 MPI MT Active </h3>
                        <div className="flex gap-4 ml-29 ">
                            <img className="w-[18px]" src={heart} alt="" />
                            <img className="w-[14px]" src={growth} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center pl-7 pt-4" >
                            <button className="w-[160px] bg-red-700 text-white p-2 rounded-xl">Предложение дня</button>
                            <p className="text-red-800 ml-6">Выгода до <br /> 300 000 ₽</p>
                        </div>
                        <div className="flex mt-5">
                            <div className="">
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                            </div>
                            <div className="">
                                <img src={skoda} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pl-7">
                        <div className="flex gap-8">
                            <p className="font-bold text-xl"> от 1 615 000 ₽ </p>
                            <p className="font-normal text-md">Кредит от 115 000 ₽/мес. </p>
                        </div>
                        <div className="flex pt-5">
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                        </div>
                    </div>
                    <div className="flex w-[369px] h-[50px] mt-6 ml-7 mb-4 text-white">
                        <button className="w-[132px] bg-red-700 rounded-l-md">Резерв онлайн</button>
                        <button className="w-[132px] bg-black"> Купить</button>
                        <button className="w-[132px] bg-[#737373] rounded-r-md">Подробнее</button>
                    </div>
                </div>
                <div className="w-[406px] shadow shadow-slate-700 rounded-3xl">
                    <div className="flex pl-7 pt-4">
                        <h3 className="font-normal text-2xl ">Skoda Octavia <br /> 1.6 MPI MT Active </h3>
                        <div className="flex gap-4 ml-29 ">
                            <img className="w-[18px]" src={heart} alt="" />
                            <img className="w-[14px]" src={growth} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center pl-7 pt-4" >
                            <button className="w-[160px] bg-red-700 text-white p-2 rounded-xl">Предложение дня</button>
                            <p className="text-red-800 ml-6">Выгода до <br /> 300 000 ₽</p>
                        </div>
                        <div className="flex mt-5">
                            <div className="">
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                            </div>
                            <div className="">
                                <img src={skoda} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pl-7">
                        <div className="flex gap-8">
                            <p className="font-bold text-xl"> от 1 615 000 ₽ </p>
                            <p className="font-normal text-md">Кредит от 115 000 ₽/мес. </p>
                        </div>
                        <div className="flex pt-5">
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                        </div>
                    </div>
                    <div className="flex w-[369px] h-[50px] mt-6 ml-7 mb-4 text-white">
                        <button className="w-[132px] bg-red-700 rounded-l-md">Резерв онлайн</button>
                        <button className="w-[132px] bg-black"> Купить</button>
                        <button className="w-[132px] bg-[#737373] rounded-r-md">Подробнее</button>
                    </div>
                </div>
                <div className="w-[406px] shadow shadow-slate-700 rounded-3xl">
                    <div className="flex pl-7 pt-4">
                        <h3 className="font-normal text-2xl ">Skoda Octavia <br /> 1.6 MPI MT Active </h3>
                        <div className="flex gap-4 ml-29 ">
                            <img className="w-[18px]" src={heart} alt="" />
                            <img className="w-[14px]" src={growth} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center pl-7 pt-4" >
                            <button className="w-[160px] bg-red-700 text-white p-2 rounded-xl">Предложение дня</button>
                            <p className="text-red-800 ml-6">Выгода до <br /> 300 000 ₽</p>
                        </div>
                        <div className="flex mt-5">
                            <div className="">
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                            </div>
                            <div className="">
                                <img src={skoda} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pl-7">
                        <div className="flex gap-8">
                            <p className="font-bold text-xl"> от 1 615 000 ₽ </p>
                            <p className="font-normal text-md">Кредит от 115 000 ₽/мес. </p>
                        </div>
                        <div className="flex pt-5">
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                        </div>
                    </div>
                    <div className="flex w-[369px] h-[50px] mt-6 ml-7 mb-4 text-white">
                        <button className="w-[132px] bg-red-700 rounded-l-md">Резерв онлайн</button>
                        <button className="w-[132px] bg-black"> Купить</button>
                        <button className="w-[132px] bg-[#737373] rounded-r-md">Подробнее</button>
                    </div>
                </div>
                <div className="w-[406px] shadow shadow-slate-700 rounded-3xl">
                    <div className="flex pl-7 pt-4">
                        <h3 className="font-normal text-2xl ">Skoda Octavia <br /> 1.6 MPI MT Active </h3>
                        <div className="flex gap-4 ml-29 ">
                            <img className="w-[18px]" src={heart} alt="" />
                            <img className="w-[14px]" src={growth} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center pl-7 pt-4" >
                            <button className="w-[160px] bg-red-700 text-white p-2 rounded-xl">Предложение дня</button>
                            <p className="text-red-800 ml-6">Выгода до <br /> 300 000 ₽</p>
                        </div>
                        <div className="flex mt-5">
                            <div className="">
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                                <div className="flex items-center pl-6 gap-3">
                                    <div className="bg-black w-[32px] h-[32px] rounded-4xl">
                                        <img className="w-[20px] m-auto mt-1.5" src={gifts} alt="" />
                                    </div>
                                    <p>Оборудование <br /><span className="text-red-700">в подарок</span></p>
                                </div>
                            </div>
                            <div className="">
                                <img src={skoda} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pl-7">
                        <div className="flex gap-8">
                            <p className="font-bold text-xl"> от 1 615 000 ₽ </p>
                            <p className="font-normal text-md">Кредит от 115 000 ₽/мес. </p>
                        </div>
                        <div className="flex pt-5">
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                            <button className="flex border-1 border-[#C2C2C4] rounded-2xl gap-1 px-1"><img src={camera} alt="" />115 л.с.</button>
                        </div>
                    </div>
                    <div className="flex w-[369px] h-[50px] mt-6 ml-7 mb-4 text-white">
                        <button className="w-[132px] bg-red-700 rounded-l-md">Резерв онлайн</button>
                        <button className="w-[132px] bg-black"> Купить</button>
                        <button className="w-[132px] bg-[#737373] rounded-r-md">Подробнее</button>
                    </div>
                </div>
               
               
            </div>
            
        </section>
    )
}

export default Card;