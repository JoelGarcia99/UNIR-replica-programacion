import React from 'react';
import { NavBar } from '../components/navbar/NavBar';
import ContentTable from '../components/table/ContentTable';
import { loadData } from '../helpers/loadData';
import './description.css';

export const Description = () => {
    return (
        <div className="container description">
            <br/>
            <h2>Explicación de la actividad</h2>
            <hr/>
            <span>
                Para la realización de esta actividad se replicó el apartado de <i>Programación</i> de la plataforma 
                de la UNIR mediante el uso de la librería de <a href="https://reactjs.org/" target="_blank">React.js</a>, 
                la cual es desarrollada y mantenida por Facebook y su principal enfoque es la programación orientada a 
                componentes y el <i>atomic design</i>; con esta librería se creó una app de una sola página (SPA) 
                con ayuda del módulo de&nbsp;<a href="https://reactrouter.com/" target="_blank">react-router-dom</a>.
                <br/><br/>Bootstrap fue utilizado como framework CSS y de él se obtuvieron los componentes de la barra de 
                navegación así como la barra de estado de la semana en la que se está.<br/>
                <img 
                    src="https://joelgarcia99.github.io/UNIR-replica-programacion/assets/barrasuperior.jpg" 
                    alt="barra superior"
                />
                En este caso, tanto la barra superior como la de la semana en la que se está observando la planificación 
                son componentes creados por bootstrap, por lo que solo se tuvieron que adaptar al proyecto; estos 
                componentes son muy útiles cuando se combinan con los componentes que ofrece <i>react-router-dom</i> 
                &nbsp;debido a que se puede ahorrar cierta lógica, como la de saber qué botón resaltar en función al 
                componente renderizado, ya que aquí se puede usar el componente <i>NavLink</i> y definir la clase 
                CSS del diseño del botón activado y el componente se encargará de validar si debe resaltarse o no.
            </span>
            <h3><br/>Estructura del proyecto</h3>
            <br/>
            <div className="row">
                <img
                    src="https://joelgarcia99.github.io/UNIR-replica-programacion/assets/estructura.jpg"
                    alt="estructura del proyecto"
                    className="col-md-4"
                />
                <span className="col-md-8">
                    El proyecto consta con una estructura como se ve en la imagen, donde en la carpeta&nbsp;
                    <b>public</b> se encuentra el código HTML de la web, así como los <i>assets</i> que se 
                    utilizaron (las capturas de esta página). En la carpeta <b>src</b> se encuentra toda la 
                    lógica del sitio web, al igual que cada una de las interfaces que conforman la SPA; todo esto 
                    fue desarrollado usando JSX que es una extensión de sintaxis de JavaScript para incrustar 
                    código HTML y agilizar el proceso de desarrollo, todo esto cuando se compile 
                    el proyecto será transformado a código JavaScript y HTML respectivamente mediante el uso de 
                    la librería Babel.<br/><br/>
                    Los datos utilizados se encuentran ubicados en la carpeta <b>data</b> en formato JSON y son 
                    obtenidos de la plataforma de la UNIR. la estructura de cada elemento del JSON se muestra 
                    a continuación. Las llaves de <i>subtemas, eventos</i> y <i>actividades</i> son opcionales,
                    <br/>
                    <img 
                        src="https://joelgarcia99.github.io/UNIR-replica-programacion/assets/data.jpg"
                        alt="data"
                    />
                    El acceso a estos datos se da mediante un método definido en la carpeta <b>helpers</b>, al 
                    que se le pasará como parámetros la semana de inicio y la semana de finalización. <br/>
                    El proyecto se encuentra disponible en GitHub:&nbsp;
                    <a 
                        href="https://github.com/JoelGarcia99/UNIR-replica-programacion"
                        target="_blank"
                    >
                        Deber UNIR
                    </a>
                </span>
            </div>
            Esta estructura utiliza una arquitectura similar al modelo vista controlador, en donde los controladores 
            vendrían a ser los hooks que ya provee react, las vistas y los modelos estarían unidos de cierta forma 
            debido a la naturaleza de JSX, aunque si se revisa el código, se ve que cada componente tiene un modelo 
            con un determinado estado, y esto está separado de la vista, que es el código HTML que se va a renderizar.
            <br/><br/>
            <h3>Los componentes</h3><br/>
            <span>
                Como se mencionó anteriormente, se utilizaron componentes de <i>bootstrap</i> y de <i>react 
                router dom</i> para la realización de esta web. Uno de los componentes es el de la barra de 
                navegación principal, el cual se obtuvo de bootstrap y únicamente se le cambió el nombre de 
                las opciones.
                <br/><br/>
                <NavBar />
                <br/>
                Esta barra fue obtenida directamente de la página oficial de Bootstrap, y se combinó con el 
                componente <i>NavLink</i> de <i>react router DOM</i>, dando como resultado una barra que 
                valida el componente que se está renderizando y en función a ello resalta la opción activa 
                de forma automática, sin necesidad de código extra. A continuación se muestra el uso del 
                componente <i>NavLink</i>, y como se puede apreciar, solo recibe dos parámetros sin 
                contar la clase CSS que está disponible en todas las etiquetas HTML; el primer parámetro 
                es <b>to</b>, y será la ruta hacia la que se desea llegar, que en este caso, lo único que 
                hará será cambiar el componente JSX a renderizar; el segundo parámetro es el de la clase 
                CSS, el <b>activeClassName</b>, que se asigna en caso de que este sea el elemento activo, 
                y ya con esto se valida en qué ruta se 
                está y el componente se encarga de resaltarse o no de acuerdo a la ruta que el usuario 
                escoja. <br/>
                <pre className="prettyprint">
                    <code>
                        &lt;NavLink to="/description" activeClassName="nav-link active" className="nav-link"&gt;
                        <br/>
                        &ensp;¿Cómo se hizo?
                        <br/>
                        &lt;/NavLink&gt;
                    </code>
                </pre>
                Otro componente es el del navbar de las semanas, el cual funciona de una forma bastante similar 
                al navbar anterior. Para saber en qué semana se está, hay que usar el hook <i>useState</i> de 
                react, el cual permite controlar el estado de la aplicación y redibujar los componentes en 
                función de los datos que han cambiado. Cada vez que se hace click en algún botón se dispara 
                la función <i>handleClick</i>, la cual es encargada de actualizar el estado de la aplicación 
                y redibujar los componentes en función de los nuevos datos.<br/>
                <pre className="prettyprint">
                    <code>
                        const [weeks, setWeeks] = useState({"{"}
                            <br/>&ensp;"start": 1,
                            <br/>&ensp;"end": 6,
                            <br/>&ensp;"active": 0<br/>
                        {"}"});
                        <br/><br/>
                        {"const handleClick = (start, end, index)=>{\n"}
                        &ensp;setWeeks{"({ ...weeks, start, end, active: index})"}
                        {"\n}"}
                    </code>
                </pre>
                <br/>
                Otro de los componentes utilizados fue el de las tablas, el cuál se encuentra en la carpeta 
                &nbsp;<b>components</b> y cuyo diseño se obtuvo mediante un componente CSS obtenido desde bootstrap. 
                Este componente se renderiza en función del estado de la barra de navegación semanal, y 
                recibe como parámetro únicamente un vector de objetos. Los enlaces que estaban en la plataforma 
                de la UNIR (como los de los test) no se pusieron porque estos validan que el usuario esté 
                autenticado, por lo que no servirían en este caso.<br/><br/>
                <ContentTable weeks={loadData(1, 1)}/>
            </span>
        </div>
    );
}
