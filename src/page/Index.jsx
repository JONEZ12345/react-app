
export default function MyComponent({ myNumber, myNumberFunction }) {
  function handleNumber() {
    myNumberFunction(myNumber + 1);
    // alert("run" + myNumber)
  }

  return (
    <div>
      <p>{myNumber}</p>
      <button onClick={handleNumber}>Increment Two</button>
    </div>
  );
}
