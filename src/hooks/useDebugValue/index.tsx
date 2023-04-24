import useCounter from "./useCounter";

function Counter() {
  const { count, setCount } = useCounter();

  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <h2>{count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
}

export default Counter;
