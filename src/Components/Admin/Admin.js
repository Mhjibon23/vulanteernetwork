import React, { useState } from 'react';
import './Admin.css';
const Admin = () => {
    const [toggle, setToggle] = useState(true)
    const [message, setMessage] = useState('')
    const [task, setTask] = useState({
        taskName: '',
        taskImage: ''
    })
    const event =()=>{
        setToggle(!toggle)
        // console.log(toggle);
    }

    const handleData =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        const newData = {...task};
        newData[name]= value;
        setTask(newData)
    }

  
    const handleSubmit =(e)=>{
        e.preventDefault();
        fetch('http://localhost:5000/addtask',{
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        })
        .then(res => res.json())
        .then(result => {
            setMessage(result)
        })

        
    }
    // console.log(message);
    return (
        <div>
            <div className="container admin_area">
                <div className="row">
                    <div className="col-md-5">
                        <h5 className='registerDesign'><i class='bx bx-group'></i> Vulanteer Register Area</h5>
                        {!toggle &&
                            <button className='addEvent' onClick={event}><i class='bx bx-plus-medical'></i> Add Event</button>
                        }
                        <br />
                        { toggle &&
                            <button className='addEvent' onClick={event}><i class='bx bx-plus-medical'></i> Add Task</button>
                        }
                    </div>
                    <div className="col-md-7">
                        { toggle &&
                            <div className="add_event_area">
                            <fieldset>Add Event</fieldset>
                            <form action="">
                                <div className="input_area">
                                    <div className="eventTitle">
                                        <label htmlFor="title">Event Title</label>
                                        <input type="text" name="title" id="title" placeholder='Enter Title' required/>
                                    </div>
                                    <div className="eventDate">
                                        <label htmlFor="date">Event Date</label>
                                        <input type="date" name="date" id="date" required />
                                    </div>
                                </div>
                                <div className="desArea">
                                    <label htmlFor="des">Description</label>
                                    <textarea name="des" id="des" cols="45" rows="5"></textarea>
                                </div>
                                <div className="submit">
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                        }

                        { !toggle &&
                            <div className="add_event_area">
                                <fieldset>Add Task Database</fieldset>
                                <form action='' onSubmit={handleSubmit}>
                                   <div className="input_area">
                                    <div className="taskName">
                                            <label htmlFor="taskName">Task Name</label>
                                            <input type="text" onBlur={handleData} name="taskName" id="taskName" placeholder='Enter Task Name' required />
                                        </div>
                                        <div className="photoUrl">
                                            <label htmlFor="photoUrl">Photo URL</label>
                                            <input type="text" onBlur={handleData} name="taskImage" id="photoUrl" placeholder='Enter Photo Url' required />
                                        </div>
                                   </div>
                                    <div className="submit">
                                        <button>Submit</button>
                                    </div>
                                </form>
                                {
                                    message==='One Task Added' && <p className='message'>One Task Added Successfully!</p>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;