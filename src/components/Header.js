import Title from "./Title";
import { useState } from "react";
const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  

  return (
    <div className="head">
      <Title />

      <h1>{title}</h1>
      
      <button onClick={()=> setTitle("New Food App")}>Change Title</button>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
