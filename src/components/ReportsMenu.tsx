import { useState } from "react";
import { FlagIcon } from "./icons/FlagIcon";
import { ConstructionIcon } from "./icons/ConstructionIcon";
import { PoliceIcon } from "./icons/PoliceIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { useGeolocation } from "@uidotdev/usehooks";
import { Report, useStore } from "@/lib/store";

const CLASSNAME =
  "bg-white rounded-full pointer-events-auto grid place-content-center p-3 drop-shadow border border-slate-200";

export function ReportsMenu() {
  const [open, setOpen] = useState(false);
  const { latitude, longitude } = useGeolocation();
  const success = latitude !== null && longitude !== null;
  const reports = useStore((state) => state.reports);
  const setReports = useStore((state) => state.setReports);
  function addReport(type: Report["type"]) {
    if (!success) return;
    setReports([
      ...reports,
      {
        type,
        location: {
          latitude,
          longitude,
        },
      },
    ]);
    setOpen(false);
  }
  return (
    <div className="flex flex-col items-end justify-end gap-3">
      {open && (
        <ul className="space-y-2">
          <li className={CLASSNAME}>
            <button type="button" onClick={() => addReport("construction")}>
              <ConstructionIcon className="w-7 h-7" />
            </button>
          </li>
          <li className={CLASSNAME}>
            <button type="button" onClick={() => addReport("police")}>
              <PoliceIcon className="w-7 h-7" />
            </button>
          </li>
        </ul>
      )}
      <button
        type="button"
        className={CLASSNAME}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <CloseIcon className="w-7 h-7" />
        ) : (
          <FlagIcon className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}
