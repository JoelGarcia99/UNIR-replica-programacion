import React from 'react';
import PropTypes from 'prop-types';

const ContentTable = ({weeks, start=0}) => {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Semanas</th>
                <th scope="col">Temas</th>
                <th scope="col">Actividades</th>
                <th scope="col">Eventos</th>
                </tr>
            </thead>
            <tbody>

                {
                    weeks.map((element, index)=>(
                        <tr key={index+"-tr"}>
                            <th scope="row" key={index+"-th-0"}>
                                {<small>{element["semana"]["fecha"]}</small>}
                            </th>
                            <td scope="row" key={index+"-td-0"}>
                                <h5>{(index*start+1)+". "+element["tema"]["nombre"]}</h5>
                                <span>
                                    {
                                        (element["tema"]["subtemas"] || []).map((element, key)=>(
                                            <span key={key}>
                                                {(index*start+1)+"."+(key+1)+". "+element}
                                                <br/>
                                            </span>
                                        ))
                                    }    
                                </span>               
                            </td>
                            <td scope="row" key={index+"-td-0"}>
                                {
                                    (element["actividades"] || []).map((element, key)=>(
                                        <span key={key}>
                                            {element}
                                            <br/>
                                        </span>
                                    ))
                                }
                            </td>
                            <td scope="row" key={index+"-td-0"}>
                                {
                                    (element["eventos"] || []).map((element, key)=>(
                                        <span key={key+"-span"}>
                                            {element}
                                            <br/>
                                        </span>
                                    ))
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}


ContentTable.propTypes = {
    weeks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ContentTable
