import { SearchBox } from "./components/SearchBox";

import { FilterModal } from "./components/FilterModal";
import { FilterIcon } from "./components/icons/FilterIcon";
import { ReportsMenu } from "./components/ReportsMenu";

export function Home() {
  return (
    <>
      <div className="rounded-2xl p-1 bg-white pointer-events-auto drop-shadow border border-slate-200">
        <SearchBox />
      </div>
      <div className="h-full justify-between flex flex-col">
        <div className="flex w-full justify-end">
          <FilterModal>
            <FilterIcon className="w-7 h-7" />
          </FilterModal>
        </div>
        <div className="flex w-full justify-end">
          <ReportsMenu />
        </div>
      </div>
    </>
  );
}
