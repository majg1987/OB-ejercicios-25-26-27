import React from 'react';
import Filter from '../pure/Filter';
import TaskForm from '../pure/TaskForm';
import TaskList from '../pure/TaskList';

const TaskContainer = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                   <TaskForm/> 
                </div>
                <div className='col-md-6 d-flex justify-content-center p-0'>
                   <Filter/> 
                </div>
            </div>            
            <TaskList/>
            
        </div>
    );
}

export default TaskContainer;
