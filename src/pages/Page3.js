import s from "./Page3.module.css"
import situation from "../images/3/situation.png"
import ButtonLink from "../components/ButtonLink"
import HeadShake from 'react-reveal/HeadShake';

export default function Page3 (){
    return<div className={s.container}>
        <HeadShake>
        <img src = {situation}></img>
        <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
            </p>
        </div>
        <ButtonLink
        to="/4"
        text="Continue"
        /></HeadShake>
    </div>
}