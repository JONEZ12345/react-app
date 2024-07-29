import { useState } from "react";

function Base() {
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");

  const [subjectOne, setSubjectOne] = useState("");
  const [subjectTwo, setSubjectTwo] = useState("");

  const handleChange = (one, two) => {
    if (!one || !two) {
      alert("Please fill in all fields");
      return;
    }

    if (one !== two) {
      alert("Incorrect input");
      return;
    }

    setSubjectOne(one);
    setSubjectTwo(two);
  };

  return (
    <>
      <input
        className=""
        type="text"
        value={valueOne}
        onChange={(e) => setValueOne(e.target.value)}
      />
      <input
        className=""
        type="text"
        value={valueTwo}
        onChange={(e) => setValueTwo(e.target.value)}
      />

      <br />

      <input type="text" value={subjectOne} disabled />
      <input type="text" value={subjectTwo} disabled />
      <br />

      <input
        type="button"
        onClick={() => handleChange(valueOne, valueTwo)}
        values="Click Me"
      />
    </>
  );
}
export default Base;
