import { useState } from 'react';
import TopNavBar from '../../components/topNavBar/TopNavbar';
import BottomNavBar from '../../components/bottomNavBar/BottomNavbar';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    terms: false, // Agrega la propiedad 'terms' y establece su valor inicial
  });

  const [errors, setErrors] = useState({
    email: '',
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  

  const validateEmail = (email: string) => {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validar el formato del correo electrónico
    if (!validateEmail(formData.email)) {
      setErrors({ email: 'Correo electrónico no válido' });
    } else {
      setErrors({ email: '' });

      // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor.
      // Por ahora, simplemente mostraremos los datos en la consola.
      console.log(formData);
    }
  };

  return (
    <>
      <TopNavBar title='Sign Up' />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="terms">He leído y aceptado los términos y condiciones:</label>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms} // Asegúrate de que el valor esté vinculado al estado 'terms'
            onChange={handleChange}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <BottomNavBar />
    </>
  );
}
