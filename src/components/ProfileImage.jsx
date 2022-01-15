import s from "./ProfileImage.module.css"

export default function ProfileImage ({image, text}){
    return<div className={s.container}>
    <div>
    <img src={image} className={s.image}/>
    </div>
    <h4 className={s.text}> {text}</h4>
    </div>
}