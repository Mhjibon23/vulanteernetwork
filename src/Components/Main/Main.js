import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import Register from '../Register/Register';

const Main = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    );
};

export default Main;
