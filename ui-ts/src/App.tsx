import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginForm from './pages/loginform/LoginForm';
import SignupForm from './pages/signupform/SingupForm';
import Profile from './pages/Profile/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}