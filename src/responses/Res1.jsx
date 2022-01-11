
import s from "./Res.module.css"
export default function Res1 ({image, star, text,points}){
    return<div className={s.container}>
        <div className={s.images}>
        <img src ={image} />
        <img src ={star} />
        </div>
        <h2>{text}</h2>
        <div className={s.hexagon}> {points} <br/>POINTS</div>
    </div>
}