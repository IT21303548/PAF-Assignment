import React from 'react';
import { Card, Grid } from '@material-ui/core';
import { Routes, Route, Link } from 'react-router-dom';
import ViewImage from '../../Assets/Img/pexels-olly-866023.jpg';
import Login from './Login';
import Register from './Register';

const Authentication = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Grid container className="max-w-screen-xl mx-auto">
        {/* Image Section */}
        <Grid item xs={7} className="h-full overflow-hidden">
          <img className="h-full mt-20 w-full object-cover" src={ViewImage} alt="fitGirl" />
        </Grid>
        
        {/* Form Section */}
        <Grid item xs={5}>
          <div className="px-10 py-20 flex flex-col justify-center h-full">
            <Card className="p-8 shadow-md">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-indigo-600">Osh Social</h1>
                <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id et perferendis ipsum est excepturi blanditiis? Necessitatibus autem quasi error provident.</p>
              </div>

              {/* Routing */}
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>

              {/* Navigation Links */}
              <div className="flex justify-center mt-6">
                <Link to="/login" className="text-indigo-600 hover:underline mr-4">Login</Link>
                <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
              </div>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
