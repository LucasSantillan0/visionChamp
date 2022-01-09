import s from "./Page6.module.css"
import { useState } from "react"
import Response from "../components/Response"
import ButtonLink from "../components/ButtonLink"
import Zoom from 'react-reveal/Zoom';
export default function Page6 (){
    const [response, setResponse]= useState(0)

    return <div className={s.container}>
        <h3>Choose your most preferred response</h3>
        <div className={s.responses}>
            <Zoom left >
            <Response
            text="1"
            id={1}
            setResponse={setResponse}
            response={response}
            />
            <Response
            text="2"
            id={2}
            setResponse={setResponse}
            response={response}
            />
            <Response
            text="3"
            id={3}
            setResponse={setResponse}
            response={response}
            />
            <Response
            text="4"
            id={4}
            setResponse={setResponse}
            response={response}
            /></Zoom>
        </div>{
        response!==0?
        <ButtonLink
        to={`/response/${response}`}
        text="Submit"
        />:""}
    </div>
}