import { useParams, useRouter } from "@tanstack/react-router";
import { Drawer } from "vaul";
import { lots } from "./lib/store";
import { LeftChevronIcon } from "./components/icons/LeftChevron";
import { useMap } from "react-map-gl";
import { useEffect } from "react";

export function Lot() {
  const router = useRouter();
  const { id } = useParams(router.routeTree.parentRoute);
  const lotIdx = parseInt(id);
  const lot = lots[lotIdx];

  const { map: mapRef } = useMap();
  useEffect(() => {
    const speed = 3;
    const oldMapViewport = {
      center: mapRef?.getCenter(),
      zoom: mapRef?.getZoom(),
    };
    mapRef?.flyTo({
      center: [lot.location.longitude, lot.location.latitude],
      zoom: 18,
      offset: [0, -200],
      speed,
    });
    return () => {
      mapRef?.flyTo({
        center: oldMapViewport.center,
        zoom: oldMapViewport.zoom,
        speed,
      });
    };
  }, [lot.location.latitude, lot.location.longitude, mapRef]);

  return (
    <div className="h-full w-full">
      <button
        type="button"
        className="py-2.5 px-3.5 pointer-events-auto bg-white border text-sm font-medium border-slate-300 shadow rounded-xl flex text-slate-900 items-center gap-1"
        onClick={() => router.history.back()}
      >
        <LeftChevronIcon className="w-5 h-5" />
        Back
      </button>

      <Drawer.Root open={true} dismissible={false}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 max-h-[50%] h-full">
            <div className="bg-white border border-slate-300 flex flex-col rounded-t-2xl h-full pt-4 shadow-2xl">
              <div className="overflow-y-auto">
                <div className="max-w-md w-full mx-auto flex flex-col p-4 px-8 h-full">
                  <h1 className="font-semibold text-3xl">{lot.name}</h1>
                  <br></br>
                  <br></br>
                  <button
                    onClick={() =>
                      window.open(
                        "http://maps.apple.com/?dirflg=c&daddr=" +
                          lot.location.latitude +
                          "," +
                          lot.location.longitude,
                        "_blank"
                      )
                    }
                  >
                    Directions to Here
                  </button>
                  <br></br>
                  <br></br>
                  This rack is currently 25% full.
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
