import '../App.css';
import Navbar from './Navbar';

import { Outlet } from 'react-router-dom';  
function Layout() {
  return (
    <>
        <div>
            <Navbar />
        </div>
        <div>
            <Outlet />
        </div>
    
    </>
  );
}

export default Layout;
