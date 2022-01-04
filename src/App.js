import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import Timer from './components/Timer';
import Clicker from './components/Clicker';
import InstructorDashboard from './components/InstructorDashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListMap from './components/ListMap';
import { LoginContext } from './contexts/LoginContext';
import { useState } from 'react';


function App() {
  const list = [1, 2, 3, 4, 5]
  const [clickCount, setClickCount] = useState(0)
  return (

    <div className="App">
      <LoginContext.Provider value={{ clickCount, setClickCount }}>
        <Router>
          <NavBar value1="About" value2="Contact us" />
          <Routes>

            <Route path="/timer" element={<Timer />} />
            <Route exact path="/clicker" element={<Clicker />} />
            <Route path="/list" element={<ListMap list={list} />} />
            <Route path="/InstructorDashboard" element={<InstructorDashboard />} />
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </div>

  );
}

export default App;
