import React, { useState } from 'react';
import ContentTable from '../components/table/ContentTable';
import { loadData } from '../helpers/loadData';
import './programming.css';

export const Programming = () => {
    
    const [weeks, setWeeks] = useState({
        "start": 1,
        "end": 6,
        "active": 0
    });

    const handleClick = (start, end, index)=>{
        setWeeks({...weeks, start, end, active: index})
    }
    
    return (
        <div className="header">
            <h3>Vista de la programación semanal</h3>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">                        
                    <button 
                        className={"btn btn-outline-success my-2 my-sm-0 "+(weeks["active"]===0? "active":"")}
                        type="submit"
                        onClick={()=>handleClick(1, 6, 0)}
                    >
                        Semana 1 a 6
                    </button>
                    <button 
                        className={"btn btn-outline-success my-2 my-sm-0 "+(weeks["active"]===1? "active":"")}
                        type="submit"
                        onClick={()=>handleClick(7, 12, 1)}
                    >
                        Semana 7 a 12
                    </button>
                    <button 
                        className={"btn btn-outline-success my-2 my-sm-0 "+(weeks["active"]===2? "active":"")}
                        type="submit"
                        onClick={()=>handleClick(13, 16, 2)}
                    >
                        Semana 13 a 16
                    </button>
                </div>
            </nav>
            <hr />
            <div className="container">
                <small>
                    Para conocer la fecha de entrega de las distintas actividades accede a 
                    la sección Actividades (en el menú lateral). Recuerda que la suma de las 
                    puntuaciones de todas las actividades es de 15 puntos. Puedes hacer las 
                    que prefieras hasta conseguir un máximo de 10 puntos (que es la calificación 
                    máxima que se puede obtener en la evaluación continua).
                </small>
            </div>
            <br/>
            <ContentTable weeks={loadData(weeks["start"], weeks["end"])}/>
            <br/>
            <span><b>Nota</b>: Los siguientes días se consideran periodos no lectivos:</span>
            <br/>
            <ul>
                <li>Del 21 de diciembre al 27 de diciembre.</li>
                <li>Del 28 de diciembre al 03 de enero.</li>
                <li>Del 29 de marzo al 04 de abril.</li>
            </ul>
        </div>
    );
}
