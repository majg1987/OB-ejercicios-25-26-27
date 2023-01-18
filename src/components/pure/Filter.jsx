import React, {useState} from 'react';
import { useAppContext } from '../../store/AppProvider';

const Filter = () => {

    const {dispatch} = useAppContext();

    const [filtro, setFiltro] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (filtro === 'todas') {
            dispatch(
                {
                    type: 'NOT_FILTER'
                }
            )
        } else if(filtro === 'finalizadas') {
            dispatch(
                {
                    type: 'FILTER_COMPLETED'
                }
            )
        } else if(filtro === 'no-finalizadas') {
            dispatch(
                {
                    type: 'FILTER_INCOMPLETED'
                }
            )
        }
    }

    return (
        <div className='position-relative'>
            <form 
                className='position-absolute top-50 start-50 translate-middle'
                onSubmit={submit}
            >
                <div>
                <select 
                    className="border-dark border-bottom-2 border-end-0 border-start-0 border-top-0 text-center" 
                    aria-label="Default select example"
                    defaultValue="todas"
                    onChange={(e) => setFiltro(e.target.value)}
                >
                    <option 
                        value="todas" 
                        className='text-info'
                    >
                        Todas las Tareas
                    </option>
                    <option 
                        value="finalizadas" 
                        className='text-success'
                    >
                        Tareas Finalizadas
                    </option>
                    <option 
                        value="no-finalizadas" 
                        className='text-danger'
                    >
                        Tareas sin realizar
                    </option>
                </select>
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button type='submit' className='btn btn-dark'>
                        Filtrar
                    </button>                      
                </div> 
            </form>
        </div>
    );
}

export default Filter;
