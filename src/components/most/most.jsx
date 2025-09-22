import car from "../../assets/images/white.car.svg"

const Most = () => {
    return (
        <section className="mt-10">
            <div className="container bg-[#EFF0F0] mt-10 rounded-5xl">
                <h1 className="font-bold text-4xl pt-10">Заявка на автокредит</h1>
                <div className="flex">
                    <div className="">
                        <div className="pt-10">
                            <div className="flex gap-16 w-[800px] bg-[#C2C2C4] px-5 py-4 rounded-xl ">
                                <select className="bg-white w-[200px] rounded-xl px-3 py-2 outline-0" >
                                    <option value="">Марка</option>
                                    <option value="">Марка 2</option>
                                    <option value="">Марка 3</option>
                                    <option value="">Марка 4</option>
                                </select>
                                <select className="bg-white w-[200px] rounded-xl px-3 py-2 outline-0">
                                    <option value="">Модель</option>
                                    <option value="">Модель 2</option>
                                    <option value="">Модель 3</option>
                                    <option value="">Модель 4</option>
                                </select>
                                <select className="bg-white w-[200px] rounded-xl px-3 py-2 outline-0">
                                    <option value="">Комплектация</option>
                                    <option value="">Комплектация 2</option>
                                    <option value="">Комплектация 3</option>
                                    <option value="">Комплектация 4</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="">
                                <img src={car} alt="" />
                            </div>
                            <div className="">
                                <div className="">
                                    <div className="flex justify-between items-center mt-10">
                                        <p className="font-normal text-md">Сумма кредита, руб</p>
                                        <p className="font-normal text-4xl">0</p>
                                    </div>
                                    <input className="w-[300px] mt-1" type="range" />
                                    <div className="flex gap-2">
                                        <p className="font-normal text-[11px] text-[#ADADB0]">0g</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">500g</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">800g</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">1.1m</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">1.4m</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">1.7m</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">2.0m</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">2.3m</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">2.7m</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">3.0m</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex justify-between items-center mt-10">
                                        <p className="font-normal text-md">Срок кредита, мес.</p>
                                        <p className="font-normal text-4xl">6 мес.</p>
                                    </div>
                                    <input className="w-[300px] mt-1" type="range" />
                                    <div className="flex gap-7.5">
                                        <p className="font-normal text-[11px] text-[#ADADB0]">6</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">12</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">24</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">36</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">48</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">60</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">72</p>
                                        <p className="font-normal text-[11px] text-[#ADADB0]">84</p>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-10">
                                    <p className="font-normal text-base mt-5 text-[#393939]">Первоначальный<br /> взнос, руб</p>
                                    <div className="mt-5 ">
                                        <select className="px-15 py-3 rounded-md outline-1 text-[#ADADB0] ">
                                            <option value="">0</option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[420px] -mt-27" >
                            <div className="">
                                <div className="flex justify-between">
                                    <button className="px-7 rounded-xl text-white bg-[#ADADB0]">0</button>
                                    <button className="px-7 rounded-xl text-white bg-[#ADADB0]">0</button>
                                </div>
                                <hr className="mt-7 text-[#ADADB0]" />
                                <div className="flex justify-between text-[#ADADB0] mt-2">
                                    <p>Первоначальный<br /> взнос</p>
                                    <p>Остаток <br />по кредиту</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-3xl text-black ">Получить выгоду <h2 className="font-bold text-3xl text-red-700">300 000 ₽</h2> </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Most