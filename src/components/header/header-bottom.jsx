import heart from "../../assets/images/header.svg"
import growth from "../../assets/images/growth.svg"
import lump from "../../assets/images/lump.svg"

export const HeaderBottom = () => {
    return (
        <div className="mt-7 flex">
            <div className="">
                <select className="outline-0" name="" id="">
                    <option value="ka">Каталог авто</option>
                    <option value="ka">Каталог авто 2</option>
                    <option value="ka">Каталог авто 3 </option>
                    <option value="ka">Каталог авто 4</option>
                </select>
            </div>

            <div className="ml-19">
                <select className="outline-0" name="" id="">
                    <option value="ka">Авто с пробегом</option>
                    <option value="ka">Авто с пробегом 2</option>
                    <option value="ka">Авто с пробегом 3 </option>
                    <option value="ka">Авто с пробегом 4</option>
                </select>
            </div>

            <div className="ml-19">
                <select className="outline-0" name="" id="">
                    <option value="ka">Кредит и рассрочка</option>
                    <option value="ka">Кредит и рассрочка 2</option>
                    <option value="ka">Кредит и рассрочка 3 </option>
                    <option value="ka">Кредит и рассрочка 4</option>
                </select>
            </div>

            <div className="ml-19">
                <select className="outline-0" name="" id="">
                    <option value="ka">Спецпредложения</option>
                    <option value="ka">Спецпредложения 2</option>
                    <option value="ka">Спецпредложения 3 </option>
                    <option value="ka">Спецпредложения 4</option>
                </select>
            </div>
            <p className="ml-19">Такси в кредит</p>

            <div className="flex gap-7 ml-30">
                <img src={heart} alt="" />
                <img src={growth} alt="" />
                <img src={lump} alt="" />
            </div>
        </div>
    )
}