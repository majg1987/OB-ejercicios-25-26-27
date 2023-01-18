import React from 'react';
// Import icons of Material UI Icons
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Task = ({tarea, completada, elimina}) => {

    return (
        <>
            <tr>
                <td> {tarea.nombre} </td>
                <td> {tarea.descripcion} </td>
                <td> {tarea.prioridad} </td>
                <td> 
                <CheckCircleOutlineIcon 
                    onClick={ () => completada(tarea.nombre) }
                    className= {tarea.terminada ? 'text-success' : 'text-secondary'}          
                />          
                </td>
                <td>
                <HighlightOffIcon 
                    onClick={ () => elimina(tarea.nombre) }          
                    className='text-danger'
                />         
                </td>
            </tr>  
        </>
    );
}

export default Task;
