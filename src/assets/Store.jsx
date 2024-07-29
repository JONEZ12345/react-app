import { useState } from "react";
import Loginsystem from "./Login";
import Authenticationsystems from "./Signup";

export default function Jones({}) {
  
  const [nam, setNam] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nav, setNav] = useState(false);

  const [names, setNames] = useState("");
  const [passwords, setPasswords] = useState("");

  const handleLog = (e) => {
    e.preventDefault();
    if (!names || !passwords) {
      alert("Please fill in all fields");
      return;
    }
    if (nam !== names) {
      alert("incorrect username");
      return;
    }
    if (password !== passwords) {
      alert("incorrect password");
      return;
    }
    if (nam === names && password === passwords) {
      alert("Login Successful");
      return;
    }
  };

  const handleReg = (e) => {
    e.preventDefault();

    if (!nam || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    setNav(!nav);
  };
  return (
    <>
      {!nav && (
        <Authenticationsystems
          nam={nam}
          namFunc={setNam}
          email={email}
          emailFunc={setEmail}
          password={password}
          passwordFunc={setPassword}
          Register={handleReg}
        />
      )}
      {nav && (
        <Loginsystem
          names={names}
          namesFunc={setNames}
          passwords={passwords}
          passwordsFunc={setPasswords}
          Login={handleLog}
        />
      )}
    </>
  );
}
