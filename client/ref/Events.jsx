// import { useState } from "react";
// const Events = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const handleBlur = () => {
//     if (password === confirmPassword) {
//       alert("You are registered");
//     } else {
//       alert("Password did not match");
//     }
//   };
//   return (
//     <div>
//       <h1>Events</h1>
//       <label htmlFor="password">Password</label>
//       <input
//         type="text"
//         name="password"
//         id="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         onFocus={(e) => console.log("I am focused")}
//         onFocus={(e) => console.log("I am out of focus")}
//       />
//       <label htmlFor="">Confirm Password</label>
//       <input
//         type="text"
//         name="confirmPassword"
//         id="confirmPassword"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         onBlur={handleBlur}
//       />
//       {/* <button onClick={handleClick}> Click Me < /button> */}
//     </div>
//   );
// };
// export default Events;
