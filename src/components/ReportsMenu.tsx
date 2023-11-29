import { useState } from "react";
import { FlagIcon } from "./icons/FlagIcon";
import { ConstructionIcon } from "./icons/ConstructionIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { useGeolocation } from "@uidotdev/usehooks";
import { useStore } from "@/lib/store";

const CLASSNAME =
    "bg-white rounded-full pointer-events-auto grid place-content-center p-3 drop-shadow border border-slate-200";

export function ReportsMenu() {
    const [open, setOpen] = useState(false);
    const { latitude, longitude } = useGeolocation();
    const success = latitude !== null && longitude !== null;
    const reports = useStore((state) => state.reports);
    const setReports = useStore((state) => state.setReports);
    function addReport() {
        if (!success) return;
        setReports([
            ...reports,
            {
                id: reports.length,
                location: {
                    latitude,
                    longitude,
                },
            },
        ]);
        setOpen(false);
    }
    return (
        <div className="flex flex-col items-end justify-end gap-2 ml-auto">
            {open && (
                <ul className="space-y-2">
                    <li className={CLASSNAME}>
                        <button type="button" onClick={() => addReport()}>
                            <ConstructionIcon className="w-7 h-7" />
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
