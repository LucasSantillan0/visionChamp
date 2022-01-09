import s from "./Response.module.css"

export default function Response ({response, setResponse, text, id}){

    const handleClick=(e)=>{
        e.preventDefault()
        setResponse(id)
    }

    return <div onClick={e=>handleClick(e)} className={ response===id?s.selected:s.container}>
        <h6> {text}</h6>
       
    </div>
}