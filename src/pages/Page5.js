import s from "./Page5.module.css"
import howHandle from "../images/5/howHandle.png"
import ButtonLink from "../components/ButtonLink"
import Flip from 'react-reveal/Flip';

export default function Page5 (){
    return <div className={s.container}>
        <Flip left>
        <img src={howHandle}/>
        <ButtonLink
        to="/6"
        text="Continue"
        /></Flip>
    </div>
}