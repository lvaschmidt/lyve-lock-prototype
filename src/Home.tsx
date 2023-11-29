// import { FilterModal } from "./components/FilterModal";
import { FilterIcon } from "./components/icons/FilterIcon";
import { ReportsMenu } from "./components/ReportsMenu";
import { LocationIcon } from "./components/icons/LocationIcon";
// import { LngLatLike, useMap } from "react-map-gl";
import { useMap } from "react-map-gl";
import { useGeolocation } from "@uidotdev/usehooks";
import { Command, CommandInput } from "./components/ui/command";
import { useRouter } from "@tanstack/react-router";
// import { useStore } from "zustand";

export function Home() {
  const router = useRouter();
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

  // function flyToBike(location: LngLatLike) {
  //   mapRef?.flyTo({
  //     center: location,
  //     zoom: 18,
  //     speed: 3,
  //   });
  // }

  return (
    <>
      <div className="pointer-events-auto">
        <Command shouldFilter={false} className="bg-transparent">
          <CommandInput
            placeholder="Find bike racks near..."
            onClick={() => router.navigate({ to: "/search" })}
          />
        </Command>
      </div>
      <div className="h-full justify-between flex flex-col">
        <div className="flex w-full justify-end">
          {/* <FilterModal> */}
          <button
            type="button"
            className="bg-white h-min rounded-full pointer-events-auto grid place-content-center p-2.5 pt-3.5 pr-3.5 drop-shadow border border-slate-200"
            // onClick={() => {
            //   flyToBike([
            //     reports[0].location.longitude,
            //     reports[0].location.latitude,
            //   ]);
            // }}
          >
            <FilterIcon className="w-7 h-7" />
          </button>
          {/* </FilterModal> */}
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
