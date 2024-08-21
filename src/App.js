
import './App.css';
// import HomeContainer from './containers/HomeContainer';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home'
import Login from "./components/Login";
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import SignUp from './components/SignUp';
import ProtectedRoutes from './components/ProtectedRoutes';
function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/page1" element={<ProtectedRoutes Component={Page1} />} />
        <Route path="/page2" element={<ProtectedRoutes Component={Page2} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
     
      </Route>
    </Routes>

  </BrowserRouter>

  );
}

export default App;
