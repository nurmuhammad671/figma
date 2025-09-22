// import gift from "../../assets/images/gift.svg"

import Card from "../card/card";

const About = () => {
    return (
        <section>
            <h2 className="text-[50px] font-bold text-center">Автомобили в наличии c ПТС</h2>
            <div className="container">
                <Card />
                <div className="text-center mt-8 ">
                    <button className="w-[300px] h-[50px] bg-red-700 text-white rounded-sm">Показать  еще</button>
                </div>
            </div>
        </section>
    )
}

export default About;