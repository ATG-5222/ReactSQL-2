import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";

export const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://images.ctfassets.net/umhrp0op95v1/3uKxpqws73m0VRKwmOk3WA/2c14d34e4080b0d226d002bc2cccade6/Lost_Ark_Key_Art_1200x630.jpg" alt="" />
                <div className="user">
                    <img src="https://www.aauniv.com/s/blog/wp-content/uploads/2021/12/que-hace-un-ingeniero-de-sistemas-1280x720.jpg" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <Link to={`/write?delete=2`}>
                            <img src={Delete} alt="" /> 
                        </Link>
                    </div>
                </div>
                <h1>Lorem ipsum</h1>
                <p>Aqui va el texto</p>
            </div>
            <Menu/>
        </div>
    )
}