// import "./navbar.css";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// const Navbar = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//           <span className="logo"><img src="https://hello.pricelabs.co/wp-content/uploads/2021/04/Airbnb-Logo.png"style={{width:"130px"}} /></span>
//         </Link>
//         {user ? user.username : (
//           <div className="navItems">
//             <button className="navButton">Register</button>
//             <button className="navButton">Login</button>
//           </div>
//         )}
//       </div>
//     </div>

//   );
// };

// export default Navbar;

import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">
            <img
              src="https://hello.pricelabs.co/wp-content/uploads/2021/04/Airbnb-Logo.png"
              style={{ width: "130px" }}
              alt="Airbnb Logo"
            />
          </span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

