import './App.css';
import { Routes, Route, Navigate , BrowserRouter } from "react-router-dom";
import Main from './Components/Main/Main';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* {user && <Route path="/" exact element={<Main />} />} */}
        <Route path="/" exact element={<Main />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
