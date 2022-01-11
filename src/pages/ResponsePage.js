import s from "./ResponsePage.module.css"
import { Routes, Route } from 'react-router';
import Res1 from "../responses/Res1";
import tilde from "../images/ResponsePage/tilde.png"
import keepitup from "../images/ResponsePage/keepitup.png"
import icon0 from "../images/ResponsePage/icon0.png"
import estrella5 from "../images/ResponsePage/estrella5.png"
import estrella3 from "../images/ResponsePage/estrella3.png"
import estrella0 from "../images/ResponsePage/estrella0.png"
export default function ResponsePage (){
    return <div className={s.container}>
        <Routes>
            <Route path="1" element={<Res1 
            image={tilde}
            text="You live your company vision"
            star={estrella5}
            points="1500"
            />}/>
            <Route path="2" element={<Res1
            image={keepitup}
            text="Good! you can do better"
            star={estrella3}
            points="1000"    
            />}/>
            <Route path="3" element={<Res1
            image={keepitup}
            text="Good! you can do better"
            star={estrella3}
            points="1000"    
            />}/>
            <Route path="4" element={<Res1
            image={icon0}
            text="Oh oh! better luck next time"
            star={estrella0}
            points="0"
            />}/>
        </Routes>
        <div className={s.responses}>
            <div className={s.response}>
                <div>
                <h3>1</h3>
                <h5>Best aligned with our company vision</h5>
                </div>
                <article>Example</article>
            </div>
            <div className={s.response}>
                <div>
                <h3>4</h3>
                <h5>Least aligned with our company vision</h5>
                </div>
                <article>Example</article>
            </div>
            <div className={s.response}>
                <h5>Why Best aligned</h5>
                <article>Example</article>
            </div>
            <div className={s.response}>
                <h5> Why least aligned</h5>
                <article>Example</article>
            </div>
        </div>
    </div>
}