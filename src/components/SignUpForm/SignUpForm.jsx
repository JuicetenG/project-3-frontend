import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';

import { UserContext } from '../../contexts/UserContext';

import { signUp } from '../../services/authService';
import './SignUpForm.css';

const SignUpForm = () => {
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConf: '',
    });

    const { username, password, passwordConf } = formData;

    const handleChange = (evt) => {
        setMessage('');
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const newUser = await signUp(formData);
            setUser(newUser);
            console.log(newUser, " <- new User (decoded jwt token)");
        } catch (err) {
            console.log(err);
            setMessage(err.message);
        }
    };

    const isFormInvalid = () => {
        return !(username && password && password === passwordConf);
    };

    return (
        <main className="sign-up-container">
            <form onSubmit={handleSubmit} className="sign-up-form">
            <h1>Sign Up</h1>
            <p>{message}</p>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input
                        type='text'
                        id='name'
                        value={username}
                        name='username'
                        onChange={handleChange}
                        required
                        className="sign-up-input"
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        name='password'
                        onChange={handleChange}
                        required
                        className="sign-up-input"
                    />
                </div>
                <div>
                    <label htmlFor='confirm'>Confirm Password:</label>
                    <input
                        type='password'
                        id='confirm'
                        value={passwordConf}
                        name='passwordConf'
                        onChange={handleChange}
                        required
                        className="sign-up-input"
                    />
                </div>
                <div className="sign-up-button-container">
                    <button disabled={isFormInvalid()} className="sign-up-button">Sign Up</button>
                    <button onClick={() => navigate('/')} className="sign-up-button">Cancel</button>
                </div>
            </form>
        </main>
    );
};

export default SignUpForm;
