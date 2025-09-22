import SliderCard from "../slider/slider";

const Hero = () => {
    return (
        <section>
            <div className="container bg-[#EFF0F0] rounded-3xl">
                <div className="flex mt-10">
                    <div className="mt-9 py-">
                        <button className="w-[200px] bg-red-800 rounded-3xl text-white ">Осталось всего 10 авто!</button>
                        <h1 className="text-5xl mt-6">Грандиозная распродажа <br />тестового парка!</h1>
                        <p className="font-bold text-[#737373] mt-9">Узнай свою цену!</p>
                    </div>
                    <div className="w-160 ml-18 mt-20">
                        <SliderCard/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;