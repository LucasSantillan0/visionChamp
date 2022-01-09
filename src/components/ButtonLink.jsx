import { NavLink } from "react-router-dom";
import s from "./ButtonLink.module.css"

export default function ButtonLink ({text, to}){
    return <NavLink to={to} className={s.button}>
        {text}
    </NavLink>
}