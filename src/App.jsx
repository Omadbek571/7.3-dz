import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Clock from './components/Clock';
import Countdown from './components/Countdown';
import Mahali from './components/Mahali';

function App() {
  return (
    <Router>
      <div className='border-2 border-black max-w-[1080px] rounded-md flex flex-col mx-auto mt-2'>
        <nav className='flex justify-between p-5'>
          <Link to="/clock">1-Clock</Link>
          <Link to="/countdown">2-Countdown</Link>
          <Link to="/mahali">3-Mahali</Link>
        </nav>

        <Routes>
          <Route path="/clock" element={<Clock />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path='/mahali' element={<Mahali />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <p>Use the links above to navigate to Clock or Countdown.</p>
    </div>
  );
}

export default App;
