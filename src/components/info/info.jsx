import CarCard from "../car/car";

const Info = () => {
    return (
        <section>
            <div className="container ">
                <div className="flex bg-[#EFF0F0] gap-8 mt-30 w-[1200px] m-auto py-9 px-5 rounded-xl" >
                    <div className="">
                        <CarCard />
                    </div>
                    <div className="">
                        <h4 className="font-black text-xl">Быстрый подбор авто</h4>
                        <input type="range" className="w-[404px] mt-10" />
                        <div className="flex gap-4 mt-15">
                            <select className="w-[200px] p-3 outline-1 rounded-sm ">
                                <option value="">Коробка</option>
                                <option value="">Коробка 2</option>
                                <option value="">Коробка 3</option>
                            </select>

                            <select className="w-[200px] p-3 outline-1 rounded-sm">
                                <option value="">Тип кузова</option>
                                <option value="">Тип кузова 2</option>
                                <option value="">Тип кузова 3</option>
                            </select>
                        </div>
                        <button className="p-3 bg-red-700 w-104 mt-9 rounded-sm text-white"> Показать 73</button>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default Info;