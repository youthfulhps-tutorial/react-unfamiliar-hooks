import React from "react";
import Counter from "./hooks/useDebugValue";
import AlbumSearch from "./hooks/useDeferredValue";
import Navigator from "./hooks/useTransition";
import OnlineStatus from "./hooks/useSyncExternalStore";
import Input from "./hooks/useId";

function App() {
  return (
    <div className="App">
      <Counter />
      <AlbumSearch />
      <Navigator />
      <OnlineStatus />
      <Input />
    </div>
  );
}

export default App;
