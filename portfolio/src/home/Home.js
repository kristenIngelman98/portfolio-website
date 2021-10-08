import * as React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
     <h1>home page</h1>
     <li>
        <Link to="/about">About</Link>
    </li>
    <li>
        <Link to="/">Home</Link>
    </li>
    </div>
  );
}

export default Home;
