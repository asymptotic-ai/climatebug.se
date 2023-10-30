import React from 'react';
// import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import './styles/main.scss'; // Ensure you have the main SCSS file imported for global styles

function App() {
  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column">
      {/* <Navbar /> */}
      <div className="container flex-grow-1">
        <Home />
        {/* Other views/routes can be added here as your application grows */}
      </div>
    </div>
  );
}

export default App;
