import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import { lazy } from 'react';
const  Dashboard = lazy(() => import('./components/Dashboard'));
const Loading = lazy(() => import('./components/Loading'));

function App() {


  return (
     <div>
  
    <BrowserRouter>
      <Appbar/>
     <Routes>
      <Route path ="/dashboard" element={<Dashboard/>}>  </Route>
      <Route path ="/" element={<Loading/>}>  </Route>
      </ Routes>
    </BrowserRouter>
    </div  >
     
  )
}
 

function Appbar () {
   const navigate = useNavigate();
  return (
     <div>
        <button onClick={()=>{
          navigate('/');
        }}>Loading</button>
        <button onClick={()=>{
          navigate('/dashboard');
        }}>Dashboard</button>
      </div>
  );
}
export default App;
