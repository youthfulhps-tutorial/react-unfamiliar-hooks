import { useId } from "react";

function Input() {
  const inputId = useId();
  return (
    <div>
      <label htmlFor={inputId}>label for input...</label>
      <input id={inputId} type="text" />
    </div>
  );
}

export default Input;
