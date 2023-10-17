import React from 'react';
import './Task.css';
import { Link } from 'react-router-dom';
const Task = (props) => {
    const {taskImage, taskName, _id} = props.task;
   
    return (
        <div className='col-md-4 col-sm-6 col-lg-3 mt-2 ml-2 mb-2 content' onClick={()=>props.handleTask(_id)}>
            <Link to={'/register'} style={{textDecoration: 'none'}}>
                <div className="tasks">
                    <img className='taskImage p-2 m-2 img-fluid'  src={taskImage} alt="" />
                    <h3 className='taskName text-center'>{taskName}</h3>
                </div>
            </Link>
        </div>
    );
};

export default Task;