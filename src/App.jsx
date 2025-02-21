import './App.css';
import { useContext } from 'react';
import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';

import { UserContext } from './contexts/UserContext';
const App = () => {
 
  const { user } = useContext(UserContext)

  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing /> } />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
    </div>
  );
};

export default App;

