import { useState } from "react";
import Formstyle from "../styling/styling/RegisterForm.module.css";

const Registerform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  // const handleChange = (one, two, three, four) => {
  // if (!one || !two || !three || !four) {
  //   alert("Please fill in all fields");
  //   return;}
  // if (three !== four) {
  //   alert("Incorrect input");
  //   return;
  // }
  // }

  const handleChange = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmpassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmpassword) {
      alert("Incorrect input");
      return;
    }
  };

  return (
    <div className={Formstyle.dead}>
      <form
        onSubmit={handleChange}
        // onSubmit={() => handleChange(name, email, password, confirmpassword)}
      >
        <fieldset>
          <legend>Register here:</legend>
          <p>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p style={{ backgroundColor: "red" }}>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <p>
            Confirm Password:{" "}
            <input
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </p>
          <p>
            <input type="submit" />
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Registerform;
