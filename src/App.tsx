import React from "react";
import Counter from "./hooks/useDebugValue";
import AlbumSearch from "./hooks/useDeferredValue";
import Navigator from "./hooks/useTransition";

function App() {
  return (
    <div className="App">
      <Counter />
      <AlbumSearch />
      <div style={{ height: "200px" }}></div>
      <Navigator />
    </div>
  );
}

export default App;
