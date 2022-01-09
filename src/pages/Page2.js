import s from "./Page2.module.css"
import you from "../images/2/vos.jpg"
import hombre from "../images/2/hombre.jpg"
import ProfileImage from "../components/ProfileImage"
import ButtonLink from "../components/ButtonLink"
import Bounce from 'react-reveal/Bounce';

export default function Page2(){
    return <div className={s.container}>
        <Bounce right >
        <div className={s.images}>
        <ProfileImage
        image={you}
        text="you"
        />
        <ProfileImage
        image={hombre}
        text="your stakeholder"
        />
        </div>
        <ButtonLink
        to="/3"
        text="continue"
        /></Bounce>
    </div>
}