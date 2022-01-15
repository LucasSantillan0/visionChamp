import s from "./Page4.module.css"
import hombre from "../images/2/hombre.PNG"
import ButtonLink from "../components/ButtonLink"
import Pulse from 'react-reveal/Pulse';

export default function Page4 (){
    return <div className={s.container}>
        <Pulse>
        <h4>Your stakeholder says</h4>
        <div className={s.box}>
        <img src={hombre}/>
        <div className={s.texts}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>
        </div>

        <ButtonLink
        to="/5"
        text="Continue"
        />
 </Pulse>
    </div>
}