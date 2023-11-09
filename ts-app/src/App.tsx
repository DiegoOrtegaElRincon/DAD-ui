import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/main/MainPage';
import Matches from './pages/matches/Matches';
import Statistics from './pages/statistics/Statistics';
import Strats from './pages/strats/Strats';
import SignupForm from './pages/signUp/SingupForm';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/matches" Component={Matches} />
        <Route path="/statistics" Component={Statistics} />
        <Route path="/strats" Component={Strats} />
        <Route path="/signup" Component={SignupForm} />
        <Route path="/login" Component={Login}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
