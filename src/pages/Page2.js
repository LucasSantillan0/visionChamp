import s from "./Page2.module.css"
import you from "../images/Assets/You.png"
import Stakeholder from "../images/Assets/Stakeholder.png"
import ProfileImage from "../components/ProfileImage"
import ButtonLink from "../components/ButtonLink"
import Bounce from 'react-reveal/Bounce';

export default function Page2(){
    return <div className={s.container}>
        <Bounce right >
        <div className={s.images}>
        <ProfileImage
        image={you}
        text="YOU"
        />
        <ProfileImage
        image={Stakeholder}
        text="YOUR STAKEHOLDER"
        />
        </div>
        <ButtonLink
        to="/3"
        text="continue"
        /></Bounce>
    </div>
}