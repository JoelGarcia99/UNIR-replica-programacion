import React, { useState } from 'react';
import ContentTable from '../components/table/ContentTable';
import { loadData } from '../helpers/loadData';
import './programming.css';

export const Programming = () => {
    
    const [weeks, setWeeks] = useState({
        "start": 1,
        "end": 6
    });
    
    return (
        <div className="header">
            <h3>Vista de la programación semanal</h3>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">                        
                    <button className="btn btn-outline-success my-2 my-sm-0 active" type="submit">
                        Semana 1 a 6
                    </button>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Semana 7 a 12
                    </button>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
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
            <ContentTable weeks={loadData(weeks["start"], weeks["end"])}/>
        </div>
    );
}
