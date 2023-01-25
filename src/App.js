import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from 'react-router-dom';
import Login from "./Compnents/Login"
import SignUp from './Compnents/SignUp';
import Forget from "./Compnents/Forget"
import WeatherPage from './layout/WeatherPage';
import ProtectedRoute from './Compnents/ProtectedRoute';
import Day from './layout/Day';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Forget" element={<Forget/>}/>
        <Route path="/WeatherPage" element={<ProtectedRoute> <WeatherPage/></ProtectedRoute>}/>
        <Route path="/Day" element={<Day/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
