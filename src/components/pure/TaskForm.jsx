import React, {useState} from 'react';
import { useAppContext } from '../../store/AppProvider';

const TaskForm = () => {

    const {dispatch} = useAppContext();

    const [nombreTarea, setNombreTarea] = useState("");
    const [descripcionTarea, setDescripcionTarea] = useState("");
    const [prioridad, setPrioridad] = useState("Normal");

    const opcionesPrioridad = [
        {value: 'Normal', color: 'text-info'},
        {value: 'Urgente', color: 'text-danger'}, 
        {value: 'Sin-Prioridad', color: 'text-warning'}, 
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        const tarea = {
                        nombre: nombreTarea,
                        descripcion: descripcionTarea, 
                        prioridad: prioridad,
                        terminada: false
                    };
        if (tarea.nombre !== "" && tarea.descripcion !== "") {
            dispatch(
                {
                    type: 'ADD_TASK',
                    value: tarea,
                }
            );
            setNombreTarea("");
            setDescripcionTarea("");
            setPrioridad("Normal")            
        } else {
            alert("Completa los campos adecuadamente")
        }

    }

    return (
        <div className='d-flex justify-content-center mt-5'>
            <form onSubmit={handleSubmit} className='form-task d-flex flex-column'>
                <div className='mw-100'>
                    <input 
                        type="text" 
                        placeholder='Nombre de Tarea'
                        className='border-start-0 border-end-0 border-top-0 border-bottom-1 text-center me-2 col-12'
                        onChange={(e)=> setNombreTarea(e.target.value)}
                        value={nombreTarea}
                    />
                    <textarea 
                        type="text" 
                        placeholder='Descripción de la tarea'
                        className='mt-2 border-dark border-start-0 border-end-0 border-top-0 border-bottom-2 text-center col-12'
                        onChange={(e)=> setDescripcionTarea(e.target.value)}
                        value={descripcionTarea}
                    />
                </div>
                <select 
                    value={prioridad}
                    onChange={(e) => setPrioridad(e.target.value)}
                >
                    {
                        opcionesPrioridad.map((opcion, index) => (
                            <option key={index} value={opcion.value} className={opcion.color}> {opcion.value} </option>
                        ))
                    }
                </select>
                <div className='d-flex justify-content-center'>
                    <button type='submit' className='btn btn-dark mt-4 '>
                        Añadir Tarea
                    </button>                     
                </div>                                      
            </form>
        </div>
    );
}

export default TaskForm;
