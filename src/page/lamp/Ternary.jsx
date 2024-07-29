import { useState } from "react";

const falling = [
  { name: "gege", month: "febs", age: 13, id: 1 },
  { name: "geg", month: "febf", age: 11, id: 2 },
  { name: "ge", month: "febg", age: 17, id: 3 },
  { name: "g", month: "feab", age: 19, id: 4 },
];

const Ternary = () => {
  const [man, setman] = useState("man");
  const [woman, setwoman] = useState("woman");

  const [valueOne, setValueOne] = useState(true);
  const [valueTwo, setValueTwo] = useState(false);

  const [instance, setInstance] = useState("");

  //   function handleAdd(){

  //   }

  //   function handleDelete(id){
  //     falling.filter(data =>)
  //   }

  return (
    <>
      {valueOne && <p>I am a boy</p>}
      {valueTwo || <p>I am a girl</p>}
      {man == "man" ? <p>I am a boy</p> : <p>I am a girl</p>}

      {woman === "woman" ? (
        <p>I am a man</p>
      ) : woman === "man" ? (
        <p>I am a woman</p>
      ) : (
        <p>I am a boy</p>
      )}

      {falling &&
        falling.map((data) => (
          <div key={data.id}>
            <p>My name is {data.name}</p>
            <div>
              {/* <button onClick={() => handleDelete(data.id)}>Delete</button> */}
            </div>
          </div>
        ))}
      {/* <button style={{ marginTop: "2rem" }} onClick={handleAdd}>
        AddValue
      </button> */}
    </>
  );
};

export default Ternary;
