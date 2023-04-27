import { useDebugValue, useSyncExternalStore } from "react";

function subscribe(callback: any) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );

  useDebugValue(isOnline);
  return isOnline;
}

export default useOnlineStatus;
