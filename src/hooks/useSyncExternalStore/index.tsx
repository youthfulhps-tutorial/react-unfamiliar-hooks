import useOnlineStatus from "./useOnlineStatus";

function OnlineStatus() {
  const isOnline = useOnlineStatus();
  return <div>{isOnline ? "Online" : "Disconnected!"}</div>;
}

export default OnlineStatus;
