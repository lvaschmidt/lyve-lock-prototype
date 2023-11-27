import { MapProvider } from "react-map-gl";
import { ControlledMap } from "./components/ControlledMap";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <MapProvider>
        <div className="py-safe">
          <div className="fixed font-sans z-10 h-full w-full p-8 py-10 pointer-events-none flex flex-col gap-4">
            {children}
          </div>
        </div>
        <ControlledMap></ControlledMap>
      </MapProvider>
    </QueryClientProvider>
  );
}
