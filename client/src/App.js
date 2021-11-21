//import all components into App.js which is already imported into the entry point of the application index.js
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/booking/Home";
import TopNav from './components/TopNavigation';

function App() {
  return (
    <BrowserRouter>
    <TopNav/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/sign-in' element={<Login/>} />
      <Route exact path='/sign-up' element={<Register/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
