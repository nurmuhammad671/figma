import left from "../../assets/images/left.svg"
import right from "../../assets/images/right.svg"
import happy from "../../assets/images/h.f.svg"
import family from "../../assets/images/lovers.svg"
import bmw from "../../assets/images/bmw.svg"
import boxing from "../../assets/images/boxing.svg"
import white from "../../assets/images/white.svg"
import travel from "../../assets/images/travel.svg"
import father from "../../assets/images/f.s.svg"

const Content = () => {

    return (
        <section>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex gap-14 mt-10">
                        <h1 className="font-bold text-3xl">Наши подборки</h1>
                        <button className="px-2 py-0.5 rounded-3xl text-white bg-red-600">Все подборки</button>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-[40px] h-[30px] pl-4 pt-2 shadow-slate-900 rounded-md ">
                            <img src={left} alt="" />
                        </div>
                        <div className="w-[40px] h-[30px] pl-4 pt-2 shadow-slate-900 rounded-md bg-red-800">
                            <img src={right} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 pt-10">
                    <div className="">
                        <img className="w-[420px]" src={happy} alt="" />
                        <div className="flex -mt-20 ml-10 gap-34 text-white ">
                            <p className=" font-bold text-md">Семейные <br />автомобили</p>
                            <button className="w-[130px] font-normal text-sm bg-red-600 h-10 rounded-md">Посмотреть</button>
                        </div>
                    </div>
                    <div className="">
                        <img className="w-[420px]" src={family} alt="" />
                        <div className="flex -mt-20 ml-10 gap-20 text-white ">
                            <p className=" font-bold text-md">Автомобили для <br /> путешествий</p>
                            <button className="w-[130px] font-normal text-sm bg-red-600 h-10 rounded-md">Посмотреть</button>
                        </div>
                    </div>
                    <div className="">
                        <img className="w-[420px]" src={bmw} alt="" />
                        <div className="flex -mt-20 ml-10 gap-34 text-white ">
                            <p className=" font-bold text-md">Городские <br />автомобили</p>
                            <button className="w-[130px] font-normal text-sm bg-red-600 h-10 rounded-md">Посмотреть</button>
                        </div>
                    </div>
                </div>
                <div className="box flex mt-19 rounded-2xl">
                    <div className="">
                        <img src={boxing} alt="" />
                    </div>
                    <div className="mt-15">
                        <h1 className="text-3xl font-black text-white">Перебьем предложения от конкурентов!</h1>
                        <p className="font-normal font-xl text-white">Скидки <span className="font-normal font-xl text-red-700">от 10 до 25%</span> на стоимость автомобиля </p>
                        <div className="mt-10 flex gap-6">
                            <button className="w-[300px] h-[40px] bg-white rounded-md text-black text-xs text-left px-5 hover:bg-red-700 hover:text-white">Ваш телефон</button>
                            <button className="w-[300px] h-[40px] bg-red-700 rounded-md text-white hover:bg-white hover:text-red-700">Получить предложение</button>
                        </div>
                        <p className="text-[#737373] mt-10">Нажимая кнопку “Отправить” Вы даете согласие на обработку своих персональных данных</p>
                    </div>
                </div>
                <div className=" pt-10">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h1 className="font-bold text-3xl">Спецпредложения</h1>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-[40px] h-[30px] pl-4 pt-2 shadow-slate-900 rounded-md ">
                                <img src={left} alt="" />
                            </div>
                            <div className="w-[40px] h-[30px] pl-4 pt-2 shadow-slate-900 rounded-md bg-red-800">
                                <img src={right} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 pt-9">
                        <div className="">
                            <img className="w-[430px]" src={white} alt="" />
                            <div className="-mt-40 ml-8">
                                <h1 className="font-bold text-xl">Первый автомобиль</h1>
                                <p className="font-normal text-sm mt-2">1,9% по льготной ставке</p>
                                <button className="w-[140px] h-[40px] rounded-md bg-[#C2C2C4] mt-15">Узнать больше</button>
                            </div>
                        </div>
                        <div className="">
                            <img className="w-[430px]" src={travel} alt="" />
                            <div className="-mt-40 ml-8">
                                <h1 className="font-bold text-xl">Семейный автомобиль</h1>
                                <p className="font-normal text-sm mt-2">1,9% по льготной ставке</p>
                                <button className="w-[140px] h-[40px] rounded-md bg-[#C2C2C4] mt-15">Узнать больше</button>
                            </div>
                        </div>
                        <div className="">
                            <img className="w-[430px]" src={father} alt="" />
                            <div className="-mt-40 ml-8">
                                <h1 className="font-bold text-xl">Экспресс-кредит</h1>
                                <p className="font-normal text-sm mt-2">1,9% по льготной ставке</p>
                                <button className="w-[140px] h-[40px] rounded-md bg-[#C2C2C4] mt-15">Узнать больше</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default Content