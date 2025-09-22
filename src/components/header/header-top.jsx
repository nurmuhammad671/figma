import location from "../../assets/images/location.svg"
import time from "../../assets/images/time.svg"
import telephone from "../../assets/images/location.svg"

export const HeaderTop = () => {
    return (
        <div className=" flex justify-around items-center bg-gray-300 p-2 ">
            <div className="flex gap-1">
                <img src={location} alt="" />
                <p className="text-gray-600">Россия, Москва, 38КМ МКАД, 6Бс1</p>
            </div>
            <div className="flex gap-2">
                <img src={time} alt="" />
                <p className="text-gray-600">Время работы: c 08:00 до 21:00</p>
            </div>
            <div className="flex gap-2">
                <img src={telephone} alt="" />
                <p className="text-gray-600">Whatsapp</p>
            </div>
        </div>
    )
}