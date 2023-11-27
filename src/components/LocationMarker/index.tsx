import { useEffect, useRef } from "react";
import { Marker } from "react-map-gl";

import styles from "./styles.module.css";

type LocationMarkerProps = {
  latitude: number;
  longitude: number;
};

export function LocationMarker({ latitude, longitude }: LocationMarkerProps) {
  const markerChildRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    markerChildRef.current?.parentElement?.removeAttribute("aria-label");
  });

  return (
    <Marker latitude={latitude} longitude={longitude}>
      <div className={styles.locationDot} ref={markerChildRef} />
    </Marker>
  );
}
