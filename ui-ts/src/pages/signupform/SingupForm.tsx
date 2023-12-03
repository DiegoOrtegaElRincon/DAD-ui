import React, { useState } from 'react';
import './signupForm.css';  // Asegúrate de tener un archivo CSS para tus estilos
import TopNavbar from '../../components/topnavbar/TopNavbar';
import BottomNavbar from '../../components/bottomnavbar/BottomNavBar';
import { Navigate, useNavigate } from 'react-router-dom';
import LoginForm from '../loginform/LoginForm';

const SignupForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
    const navigate = useNavigate();

    const validateUsername = (): boolean => {
        // Validación del nombre de usuario
        // Permitir caracteres alfanuméricos y "_-"
        // Longitud entre 3 y 12 caracteres
        // Puedes ajustar según sea necesario
        const regex = /^[a-zA-Z0-9_-]{3,12}$/;
        return regex.test(username);
    };

    const validateEmail = (): boolean => {
        // Validación del correo electrónico
        // Debe contener "@" y "." en ese orden
        // Puedes ajustar según sea necesario
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (): boolean => {
        // Validación de la contraseña
        // Longitud entre 6 y 12 caracteres
        // Al menos una mayúscula, una minúscula y un carácter especial
        // Puedes ajustar según sea necesario
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,12}$/;
        return regex.test(password);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // Realizar validaciones antes de enviar el formulario
        if (validateUsername() && validateEmail() && validatePassword() && termsAccepted) {
            const userData = {
                username,
                email,
                password,
                termsAccepted,
            };
            localStorage.setItem('userData', JSON.stringify(userData));

            // Redirigir a la página de inicio
            navigate('/');
            console.log('Formulario enviado con éxito');
        } else {
            // Mostrar mensajes de error o realizar otras acciones si es necesario
            console.log('Error en el formulario. Por favor, revisa los campos.');
        }
    };

    return (
        <div className="container">
            <TopNavbar props='Sign Up' />
            <div className="form-container box box2">
                <form onSubmit={handleSubmit}>
                    <div className='form-title sbox box1'>Create Account</div>
                    <input
                        type="text"
                        value={username}
                        placeholder='Introduce username'
                        onChange={(e) => setUsername(e.target.value)}
                        className='sbox box2'
                    />
                    {!validateUsername() && <span className="error-message">Introduce a valid username</span>}
                    <input
                        type="email"
                        value={email}
                        placeholder='Introduce email'
                        onChange={(e) => setEmail(e.target.value)}
                        className='sbox box3'
                    />
                    {!validateEmail() && <span className="error-message">Introduce a valid email</span>}
                    <input
                        type="password"
                        value={password}
                        placeholder='Introduce password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='sbox box4'
                    />
                    {!validatePassword() && <span className="error-message">Introduce a valid password</span>}
                    <label>
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                            className='sbox box5'
                        />
                        I have read and accepted the <a href="#" className="terms-link">terms and conditions</a>
                    </label>
                    <button type="submit" className="submit-button sbox box5">CREATE ACCOUNT</button>
                </form>
            </div >
            <BottomNavbar />
        </div >
    );
};

export default SignupForm;
