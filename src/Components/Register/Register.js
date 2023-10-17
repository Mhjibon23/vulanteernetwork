import React from 'react';
import './Register.css';
import logo from '../../Resources/logos/Group 1329.png'
const Register = () => {
    return (
        <div>
            <div className="logo_area">
                <img src={logo} alt="" />
            </div>
            <div className="form_area mt-4">
                <form action="">
                    <h3>Register as a Vulanteer</h3>
                    <div className="input_box">
                        <input type="text" name="name" id="name" placeholder='Full Name' />
                    </div>
                    <div className="input_box">
                        <input type="text" name="email" id="email" placeholder='User Name or Email' />
                    </div>
                    <div className="input_box">
                        <input type="date" name="date" id="date" />
                    </div>
                    <div className="input_box">
                        <input type="text" name="description" id="description" placeholder='Description' />
                    </div>
                    <div className="input_box">
                        <input type="text" name="taskName" id="taskName" value={'Hello'} />
                    </div>
                    <div className="btn_area">
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;