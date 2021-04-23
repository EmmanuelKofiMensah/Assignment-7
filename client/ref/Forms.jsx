import { useState } from "react";
const Form = () => {
  const [state, setState] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
    password: " ",
    gender: " ",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <h1>Form</h1>
      <hr />
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" onChange={handleChange}>
            {"Gender "}
            <option value="gender">---select gender---</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </form>
      <hr />
      <p>First Name: {state.firstName}</p>
      <p>last Name: {state.lastName}</p>
      <p>Email: {state.email}</p>
      <p>Password: {state.password}</p>
      <p>Gender: {state.gender}</p>
    </>
  );
};
export default Form;
