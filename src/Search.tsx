import { SearchBox } from "./components/SearchBox";

export function Search() {
  return (
    <div className="fixed py-safe-10 px-8 top-0 left-0 bg-white w-full h-full pointer-events-auto">
      <SearchBox />
    </div>
  );
}
