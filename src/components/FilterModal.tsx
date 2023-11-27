import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { Filters, useStore } from "@/lib/store";

export function FilterModal({ children }: React.PropsWithChildren) {
  const filters = useStore((state) => state.filters);
  const updateStore = useStore((state) => state.updateFilters);
  function updateFilters(newstate: Partial<Filters>) {
    updateStore({
      ...filters,
      ...newstate,
    });
  }
  return (
    <Dialog>
      <DialogTrigger className="bg-white rounded-full pointer-events-auto grid place-content-center p-3 drop-shadow border border-slate-200">
        {children}
      </DialogTrigger>
      <DialogContent className="rounded-xl">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl">Filters</DialogTitle>
          <DialogDescription className="">
            Select which parking lots you would like to see on the map.
          </DialogDescription>
          <ul className="space-y-3 pt-2">
            <li className="flex justify-between items-center font-medium">
              <h3>Free</h3>
              <Checkbox
                checked={filters.free}
                onClick={() => updateFilters({ free: !filters.free })}
              />
            </li>
            <li className="flex justify-between items-center font-medium">
              <h3>Paid</h3>
              <Checkbox
                checked={filters.paid}
                onClick={() => updateFilters({ paid: !filters.paid })}
              />
            </li>
            <li className="flex justify-between items-center font-medium">
              <h3>Permit</h3>
              <Checkbox
                checked={filters.permit}
                onClick={() => updateFilters({ permit: !filters.permit })}
              />
            </li>
            <li className="flex justify-between items-center font-medium">
              <h3>Open Now</h3>
              <Checkbox
                checked={filters.open}
                onClick={() => updateFilters({ open: !filters.open })}
              />
            </li>
          </ul>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
