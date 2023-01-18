import React from 'react';
import { useAppContext } from '../../store/AppProvider';
import Task from './Task';

const TaskList = () => {

    const {state} = useAppContext();
    const {dispatch} = useAppContext();

    const finish = (nombre) => {
        dispatch(
            {
                type: 'TASK_FINISHED',
                value: nombre
            }
        )
    }

    const remove = (nombre) => {
        dispatch(
            {
                type: 'TASK_REMOVED',
                value: nombre
            }
        )
    }

    return (
        <div className='mt-5'>
            <h1 className='text-center'> Tareas </h1>
            {
                state.tareas.length > 0 ?
                (
                    <table className='table text-center'>
                        <thead>
                            <tr>
                                <th> Nombre Tarea </th>
                                <th> Descripcion Tarea </th>
                                <th> Prioridad </th>
                                <th> Realizada </th>
                                <th> Eliminar  </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.filtroActivo ?
                                state.filtros.map((tarea, index) => (
                                    <Task
                                        key= {index}
                                        tarea = {tarea}
                                        completada = {finish}
                                        elimina= {remove}
                                    />  
                                ))
                                :
                                state.tareas.map((tarea, index) => (
                                    <Task
                                        key= {index}
                                        tarea = {tarea}
                                        completada = {finish}
                                        elimina= {remove}
                                    />    
                                ))
                       
                            }
                        </tbody>
                    </table>                    
                )
                :
                (
                    <h5 className='mt-5 text-center text-uppercase text-dark'>
                        Añade tu primera tarea
                    </h5>
                )

            }

        </div>
    );
}

export default TaskList;
