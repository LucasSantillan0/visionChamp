import s from "./ProfileImage.module.css"

export default function ProfileImage ({image, text}){
    return<div className={s.container}>
    <img src={image} className={s.image}/>
    <h4 className={s.text}> {text}</h4>
    </div>
}