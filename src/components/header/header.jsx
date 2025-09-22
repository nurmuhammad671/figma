import { HeaderTop } from "./header-top"
import { HeaderCenter } from "./header-center"
import { HeaderBottom } from "./header-bottom"

const Header = () => {
    return (
        <header>
            <div className="container ">
                <HeaderTop/>
                <HeaderCenter/>
                <HeaderBottom/>
            </div>
        </header>
    )
}


export default Header