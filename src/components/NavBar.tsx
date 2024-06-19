import { useEffect, useState } from "react";
import React from "react";
// need to import from azure (to autehtnica user log in)

class NavBar extends React.Component {}

// const NavBar = () => {
//   const [userLoggedIn, setUserLoggedIn] = useState(false);

//   useEffect(() => {
//     console.log("Testing use effect working");

//     const logging_in = async () => {
//       // const user = await Auth.currentAuthenticatedUser();
//       // setUserLoggedIn(true);

//       const {
//         data: { user },
//       } = await

//       if (user) {
//         setUserLoggedIn(true);
//       }
//     };
//   }, [userLoggedIn]);

// useEffect(() => {
//   console.log("Component mounted");
//   return () => {
//     console.log("Component unmounted");
//   };
// }, []);

// return (
//   <nav>
//     <ul>
//       <li>
//         <a href="#">Home</a>
//       </li>
//       <li>
//         <a href="#">About</a>
//       </li>
//       <li>
//         <a href="#">Contact</a>
//       </li>
//     </ul>
//   </nav>
// );
// };

export default NavBar;
