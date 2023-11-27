import { SearchBox } from "./components/SearchBox";

import { FilterModal } from "./components/FilterModal";
import { FilterIcon } from "./components/icons/FilterIcon";
import { ReportsMenu } from "./components/ReportsMenu";
import { LocationIcon } from "./components/icons/LocationIcon";
import { useMap } from "react-map-gl";
import { useGeolocation } from "@uidotdev/usehooks";

export function Home() {
  const { map: mapRef } = useMap();
  const { latitude, longitude } = useGeolocation();

  function flyToCurrentLocation() {
    if (longitude === null || latitude === null) return;
    mapRef?.flyTo({
      center: [longitude, latitude],
      zoom: 18,
      speed: 3,
    });
  }

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
        <div className="flex w-full justify-between items-end">
          <button
            type="button"
            className="bg-white h-min rounded-full pointer-events-auto grid place-content-center p-2.5 pt-3.5 pr-3.5 drop-shadow border border-slate-200"
            onClick={flyToCurrentLocation}
          >
            <LocationIcon className="w-7 h-7" />
          </button>

          <ReportsMenu />
        </div>
      </div>
    </>
  );
}
