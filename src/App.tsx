import React from "react";
import Counter from "./hooks/useDebugValue";
import AlbumSearch from "./hooks/useDeferredValue";
import Navigator from "./hooks/useTransition";
import OnlineStatus from "./hooks/useSyncExternalStore";

function App() {
  return (
    <div className="App">
      <Counter />
      <AlbumSearch />
      <Navigator />
      <OnlineStatus />
    </div>
  );
}

export default App;
