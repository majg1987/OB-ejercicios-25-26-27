import React, {useReducer, useContext, createContext} from 'react';
import './App.css'
import TaskContainer from './components/containers/TaskContainer';
import { AppProvider } from './store/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <div>
        <TaskContainer/>
      </div>
    </AppProvider>
  );
}

export default App;
