import React, {useContext, useReducer} from 'react';

const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
}

const initialState = {
    tareas: [],
    filtros: [],
    filtroActivo: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return {
        ...state,
        tareas: [...state.tareas, action.value] 
      }
    }
    case 'TASK_FINISHED': {
      const tareasCompletadas = state.tareas.map(tarea =>
       (
         (tarea.nombre) === action.value) ?
         {
           ...tarea, terminada: !tarea.terminada
         }
         :
         tarea
        );
        return {
        ...state,
        tareas: tareasCompletadas
      }      
    }     
    case 'TASK_REMOVED': {
      const tareasActualizadas = state.tareas.filter(tarea => tarea.nombre !== action.value )
     
      return {
        ...state,
        tareas: tareasActualizadas
      }      
    }     
    case 'NOT_FILTER': {     
      return {
        ...state,
        filtroActivo: false
      }     
    }     
    case 'FILTER_COMPLETED': {
      const tareasFiltradas = state.tareas.filter(tarea => tarea.terminada )
     
      return {
        ...state,
        filtroActivo: true,
        filtros: tareasFiltradas
      }      
    }     
    case 'FILTER_INCOMPLETED': {
      const tareasFiltradas = state.tareas.filter(tarea => !tarea.terminada );

      return {
        ...state,
        filtroActivo: true,
        filtros: tareasFiltradas
      }      
    }     
    default:
      return state;
  }
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <AppContext.Provider value={{state: state, dispatch}}>
        {children}
      </AppContext.Provider>  
    );
}

export  {
    AppProvider, useAppContext
    };
