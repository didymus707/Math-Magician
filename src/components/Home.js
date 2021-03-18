import React from 'react';
import Navbar from './Navbar';

const Home = () => (
  <div>
    <nav className="nav-con">
      <div className="nav-bar">
        <h1>Math Magician</h1>
        <Navbar />
      </div>
    </nav>
    <main>
      <div className="contents">
        <h2>Welcome to our Page!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores reprehenderit animi, quisquam voluptatum magnam corporis dicta dolorem tenetur
          enim repellendus dolorum possimus facilis sed illo laudantium, esse iste aliquid porro!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores reprehenderit animi, quisquam voluptatum magnam corporis dicta dolorem tenetur
          enim repellendus dolorum possimus facilis sed illo laudantium, esse iste aliquid porro!
        </p>
      </div>
    </main>
  </div>
);

export default Home;
