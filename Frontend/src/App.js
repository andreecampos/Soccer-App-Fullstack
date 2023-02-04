import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import HomePage from './pages/HomePage';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/HomePage" element={<HomePage/>}></Route>
          <Route path="/UserProfile" element={<UserProfile/>}></Route>
      
      </Routes>

    </div>
  );
}

export default App;
