import SwitchMode from "../toggle/switchDarkMode";

function Menu(){
    return (
        <ul>
            <li><a href="">About Me</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Guestbook</a></li>
            <li><SwitchMode/></li>
        </ul>
    )
}

export default Menu;