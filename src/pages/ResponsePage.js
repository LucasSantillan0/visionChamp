import s from "./ResponsePage.module.css"
import { Routes, Route } from 'react-router';
import Res1 from "../responses/Res1";
import Res2 from "../responses/Res2";
import Res3 from "../responses/Res3";
import Res4 from "../responses/Res4";

export default function ResponsePage (){
    return <div className={s.container}>
        <Routes>
            <Route path="1" element={<Res1/>}/>
            <Route path="2" element={<Res2/>}/>
            <Route path="3" element={<Res3/>}/>
            <Route path="4" element={<Res4/>}/>
        </Routes>
    </div>
}