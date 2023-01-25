import { Routes, Route, Outlet, Link } from "react-router-dom";

import Login from './pages/login';
import Information from './pages/app/modules/information';
import Home from './pages/app'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />}/>

        <Route path="/app/*" element={<Home />} >
        </Route>

        

        <Route path="*" element={<Login />}/>
       
    </Routes>
  );
}

export default App;
