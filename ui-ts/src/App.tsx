import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginForm from './pages/LoginForm/LoginForm';
import SignupForm from './pages/SignUpForm/SingupForm';
import Profile from './pages/Profile/Profile';
import Statistics from './pages/Stats/Statistics';
import News from './pages/News/News';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}