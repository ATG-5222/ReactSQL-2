import Logo from "../img/logo.png";

export const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span>
            Made with <b>React.js</b>.
            </span>
        </footer>
    )
}