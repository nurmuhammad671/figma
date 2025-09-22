import llocation from "../../assets/images/llocation.svg"
import menu from "../../assets/images/menu.png"
import title from "../../assets/images/title.svg"
import telephonee from "../../assets/images/red.telephone.svg"
import qwertyu from "../../assets/images/qwertyu.svg"
import taymer from "../../assets/images/taymer.svg"

import { useState } from "react"

export const HeaderCenter = () => {
    const [state, setState] = useState()
    return (
        <div className="flex text-center mt-7">
            <div className=" flex gap-2 items-center">
                <img onClick={() => setState(!state)} className="relative" src={menu} alt="" />
                {state && (
                    <div className="w-[280px]  absolute top-35 bg-gray-200 -ml-8 rounded-2xl  ">
                        <div className="">
                            <div className="flex gap-9 ml-11 mt-4">
                                <img src={qwertyu} alt="" />
                                <p>Каталог авто</p>
                            </div>
                            <div className="flex gap-9 ml-11 mt-2">
                                <img src={qwertyu} alt="" />
                                <p>Авто с пробегом</p>
                            </div>
                            <div className="flex gap-9 ml-11 mt-2">
                                <img src={qwertyu} alt="" />
                                <p>Кредит и рассрочка</p>
                            </div>
                            <div className="flex gap-9 ml-11 mt-2">
                                <img src={qwertyu} alt="" />
                                <p>Спецпредложения</p>
                            </div>
                            <div className="flex gap-9 ml-11 mt-2">
                                <img src={qwertyu} alt="" />
                                <p>Такси в кредит</p>
                            </div>
                        </div>
                        <div className="mt-15  text-left ml-10">
                            <p className="focus:text-red-700" >Подбор авто</p>
                            <p className="mt-1 focus:text-red-700">О компании</p>
                            <p className="mt-1 focus:text-red-700">Техцентр</p>
                            <p className="mt-1 focus:text-red-700">Отзывы</p>
                            <p className="mt-1 focus:text-red-700">Контакты</p>
                        </div>
                        <div className="w-[250px] bg-[#EFF0F0] m-auto mt-10 py-4 rounded-2xl mb-10 ">
                            <div className="flex ml-6 gap-6">
                                <img src={telephonee} alt="" />
                                <p>+7 (800) 551-94-31 <br />+7 (495) 292-18-67</p>
                            </div>
                            <div className="flex ml-6 mt-4 gap-6">
                                <img className="w-[30px]" src={taymer} alt="" />
                                <p>с 08:00 до 21:00</p>
                            </div>
                            <div className="flex ml-6 mt-4 gap-6">
                                <img className="w-[30px]" src={llocation} alt="" />
                                <p>Россия, Москва, <br />38КМ МКАД, 6Бс1</p>
                            </div>
                        </div>
                    </div>
                )}
                <img src={title} alt="" />
            </div>
            <div className="flex items-center">
                <div className="items-center pl-10 border-l-2    border-[#C2C2C4]">
                    <p className="font-bold text-base"> 10 лет превосходим <br /> ваши ожидания</p>
                </div>
                <div className="flex gap-4 pl-10">
                    <a href="" className="hover:text-red-700">Подбор авто</a>
                    <a href="" className="hover:text-red-700">О компании</a>
                    <a href="" className="hover:text-red-700">Техцентр</a>
                    <a href="" className="hover:text-red-700">Отзывы</a>
                    <a href="" className="hover:text-red-700">Контакты</a>

                </div>
                <div className="flex pl-5 items-center">
                    <img src={telephonee} alt="" />
                    <div className="flex  flex-col">
                        <p className="font-normal *:text-base">+7 (800)551-94-31</p>
                        <p className=" font-normal text-xs text-right">+7 (495) 292-18-67</p>
                    </div>
                    <button className="p-3 ml-8 bg-red-800 rounded-sm text-white">Обратный звонок</button>
                </div>
            </div>
        </div>
    )
}