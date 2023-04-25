import { useDeferredValue, useState, Suspense } from "react";
import AlbumList from "./AlbumList";

function AlbumSearch() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <div>
      <label>
        Search todo:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <AlbumList
          query={deferredQuery}
          style={{
            opacity: isStale ? 0.3 : 1,
          }}
        />
      </Suspense>
    </div>
  );
}

export default AlbumSearch;
