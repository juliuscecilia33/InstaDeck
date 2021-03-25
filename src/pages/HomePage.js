import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Instadeck</h1>
      <Link to="/signin">
        <h2>Sign In</h2>
      </Link>
      {/* <Link to="/signup"><h2>Sign Up Here</h2></Link> */}
      <Link to="/home">
        <h2>Home</h2>
      </Link>

      <h2>By juliuscecilia33</h2>
      <a href="https://github.com/juliuscecilia33">Github</a>
      <a href="https://www.linkedin.com/in/julius-cecilia/">LinkedIn</a>
    </div>
  );
}
