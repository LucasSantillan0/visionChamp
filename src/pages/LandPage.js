import React from "react";
import ButtonLink from "../components/ButtonLink";
import s from "./LandPage.module.css"
import Bounce from 'react-reveal/Bounce';

export default function LandPage (){
    return <div className={s.container}>
        <div className={s.title}></div>
        <div className={s.p}>Do You <span>Live</span> Your Company Vision?</div>
        <div className={s.play}>
        <Bounce left>
        <ButtonLink
        to="/2"
        text="Play"
        />
        </Bounce>
        </div>
    </div>
}