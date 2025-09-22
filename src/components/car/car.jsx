import fort from "../../assets/images/fort.svg"
import fort2 from "../../assets/images/fort.2.svg"
import fort3 from "../../assets/images/fort.3.svg"
import fort4 from "../../assets/images/car.svg"
import fort5 from "../../assets/images/fort.4.svg"


const CarCard = () => {
    return (
        <section>
            <div className="flex">
                <div className="">
                    <img src={fort} alt="" />
                </div>
                <div className="">
                    <img src={fort2} alt="" />
                </div>
                <div className="">
                    <img src={fort4} alt="" />
                </div>
                <div className="">
                    <img src={fort3} alt="" />
                </div>
                <div className="">
                    <img src={fort5} alt="" />
                </div>
            </div>
        </section>
    )
}


export default CarCard;