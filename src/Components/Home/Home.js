import React, { useEffect, useState } from 'react';
import './Home.css';
import Task from '../Task/Task';
const Home = () => {
    const [tasks, setTasks] = useState([])
    const [userTask, setUserTask] = useState({
        _id: '',
        taskName: '',
        taskImage: ''
    })

    console.log(userTask);
    useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(res => res.json())
        .then(result => {
            setTasks(result)
        })
    }, [])

    const handleTask=(id)=>{
        fetch(`http://localhost:5000/task/${id}`)
        .then(res => res.json())
        .then(result => {
            setUserTask(result)
        })
    }
    return (
        <div>
            <h2 className='heading'>I grow by helping people in need.</h2>
            <div className="search_area">
                <form action="">
                    <div className="search">
                        <input type="text" name="search" id="" placeholder='search...' />
                    </div>
                    <button type='submit' className='search_submit'>Search</button>
                </form>
            </div>
            <div className="task_area row mt-4">
                {
                    tasks.map(task => <Task task={task} handleTask={handleTask} key={task._id}></Task>)
                }
            </div>
        </div>
    );
};

export default Home;