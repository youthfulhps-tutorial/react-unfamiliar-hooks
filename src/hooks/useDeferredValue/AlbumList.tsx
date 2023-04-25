import { ComponentProps } from "react";
import { fetchData } from "./apis";

type AlbumListProps = {
  query: string;
} & ComponentProps<"ol">;

function AlbumList({ query, style }: AlbumListProps) {
  if (!query) {
    return null;
  }

  const searchedAlbums = use(fetchData(`/search?q=${query}`));

  if (!searchedAlbums.length) {
    return <div>Empty!</div>;
  }

  return (
    <ol style={style}>
      {searchedAlbums.map((album: any) => (
        <li key={album.title}>{album.title}</li>
      ))}
    </ol>
  );
}

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
function use(promise: any) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result: any) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason: any) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}

export default AlbumList;
