import './App.css';
import { useContext, useState } from 'react';
import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';

import { UserContext } from './contexts/UserContext';
const App = () => {

  const { user } = useContext(UserContext)
  const [currentProject, setCurrentProject] = useState(null)

  return (
    <div className="app-container">
      <NavBar setCurrentProject={setCurrentProject}/>
      <div className="routes">
        <Routes>
          <Route path='/' element={user ? <Dashboard currentProject={currentProject} setCurrentProject={setCurrentProject} /> : <Landing />} />
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/sign-in' element={<SignInForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;