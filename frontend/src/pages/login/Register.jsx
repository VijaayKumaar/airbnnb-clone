

// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import AirbnbFooter from "../../../components/footer/Footer";
// import Registe from "./Register.css"
// const Register = () => {

//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//     email: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous error

//     try {
//       const { confirmPassword, ...requestData } = credentials;
//       if (requestData.password !== confirmPassword) {
//         setError("Passwords do not match");
//         return;
//       }

//       const res = await axios.post("http://localhost:8800/api/register", requestData);
//       console.log(res.data); // Assuming the server response contains the saved user details
//       navigate("/login");
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };


//   return (

     
//     <div className="register">
//       <div className="rContainer">
//         <input
//           type="text"
//           placeholder="Username"
//           id="username"
//           value={credentials.username}
//           onChange={handleChange}
//           className="rInput"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           id="email"
//           value={credentials.email}
//           onChange={handleChange}
//           className="rInput"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           id="password"
//           value={credentials.password}
//           onChange={handleChange}
//           className="rInput"
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           id="confirmPassword"
//           value={credentials.confirmPassword}
//           onChange={handleChange}
//           className="rInput"
//         />
//         <button onClick={handleClick} className="rButton">
//           Register
//         </button>
//         {error && <span>{error}</span>}
      
//       </div>
//      {/* <AirbnbFooter/>  */}
//     </div>
//   );
// };

//  export default Register;
 
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    try {
      const { confirmPassword, ...requestData } = credentials;
      if (requestData.password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const res = await axios.post("http://localhost:8800/api/register", requestData);
      console.log(res.data); // Assuming the server response contains the saved user details
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={credentials.username}
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="Email"
          placeholder="Email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={credentials.confirmPassword}
          onChange={handleChange}
          className="rInput"
        />
        <button onClick={handleClick} className="rButton">
          Register
        </button>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default Register;



