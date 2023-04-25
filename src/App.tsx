import React from "react";
import Counter from "./hooks/useDebugValue";
import AlbumSearch from "./hooks/useDeferredValue";

function App() {
  return (
    <div className="App">
      <Counter />
      <AlbumSearch />
    </div>
  );
}

export default App;
