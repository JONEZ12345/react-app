import { useEffect, useState } from "react";
import Authenticationsystems from "./assets/Signup";
import Loginsystem from "./assets/Login";
import Jones from "./assets/Store";
// import MyComponent from "./page/Index";
// import Inline from "./styling/Inline";
// import Jones from "./styling/Stylesheet";
// // import Modu from "./styling/Module.jsx";
// import Base from "./page/Basis.jsx";
// import Registerform from "./page/RegisterForm.jsx";
// import Ternary from "./page/lamp/Ternary.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(4);
  const [name, setName] = useState("dd");

  return (
    <>
      <div>
        {/* <p className=" te ">{count}</p> */}
        {/* <MyComponent myNumber={countTwo} myNumberFunction={setCountTwo} />
        <Inline />
        <Jones/>
        <Modu/> */}
        {/* <input placeholder="value" value={name} onChange={(e) => setName(e.target.value)} />

        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>

      <div>
        <h1> Event Handler Section</h1> */}
        {/* <Base/>  */}
      </div>
      {/* <Registerform/> */}
      {/* <Ternary/> */}
      <Jones/>
    </>
  );
}

export default App;
