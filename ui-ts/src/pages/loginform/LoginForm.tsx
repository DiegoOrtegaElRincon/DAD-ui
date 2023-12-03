import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './loginform.css';  // Asegúrate de tener un archivo CSS para tus estilos
import BottomNavbar from '../../components/bottomnavbar/BottomNavBar';
import TopNavbar from '../../components/topnavbar/TopNavbar';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();

    const validateUsername = (): boolean => {
        // Validación del nombre de usuario para el login
        // Permitir caracteres alfanuméricos y "_-"
        // Longitud entre 3 y 12 caracteres
        // Puedes ajustar según sea necesario
        const regex = /^[a-zA-Z0-9_-]{3,12}$/;
        return regex.test(username);
    };

    const validatePassword = (): boolean => {
        // Validación de la contraseña para el login
        // Longitud entre 6 y 12 caracteres
        // Al menos una mayúscula, una minúscula y un carácter especial
        // Puedes ajustar según sea necesario
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,12}$/;
        return regex.test(password);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // Realizar validaciones antes de enviar el formulario
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            // Comparar las credenciales del usuario
            if (username === userData.username && password === userData.password) {
                // Inicio de sesión exitoso
                setLoggedIn(true);
                navigate('/home');
            } else {
                // Mostrar mensajes de error u otras acciones si es necesario
                console.log('Credenciales incorrectas');
            }
        } else {
            // El usuario no está registrado
            console.log('Usuario no registrado');
        }
    };

    return (
        <div className="container">
            <TopNavbar props='Login' />
            <div className="form-container box box2">
                <form onSubmit={handleSubmit}>
                    <div className="sbox box1">Sign Up</div>
                    <input
                        type="text"
                        value={username}
                        placeholder='Introduce username'
                        onChange={(e) => setUsername(e.target.value)}
                        className='sbox box2'
                    />
                    {!validateUsername() && <span className="error-message">Introduce a valid username</span>}

                    <input
                        type="password"
                        value={password}
                        placeholder='Introduce password'
                        className='sbox box3'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {!validatePassword() && <span className="error-message">Introduce a valid password</span>}

                    <button type="submit" className="submit-button">LOGIN</button>

                    <Link to={'/signup'}>You don't have an account? Create one</Link>
                </form>
            </div>
            <BottomNavbar />
        </div>
    );
};

export default LoginForm;
