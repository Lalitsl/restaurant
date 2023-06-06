import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Card from './Components/Card';

import {  BrowserRouter , Routes, Route } from 'react-router-dom';  
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p className='text-5xl font-bold underline'>welcome to react tailwind...........</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React welcome to my page 
    //     </a>
    //   </header>
    // </div>
  

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="card" element={<Card />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
