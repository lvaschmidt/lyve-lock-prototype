import { create } from "zustand";

export type Place = {
  id: number;
  name: string;
  isRecent: boolean;
  isSaved: boolean;
  location: {
    latitude: number;
    longitude: number;
  };
};

export const places: Place[] = [
  {
    id: 0,
    name: "Robertson Hall",
    isRecent: false,
    isSaved: true,
    location: {
      latitude: 38.03304465069625,
      longitude: -78.50399787293858,
    },
  },
  {
    id: 1,
    name: "Ridley Hall",
    isRecent: false,
    isSaved: false,
    location: {
      latitude: 38.034851,
      longitude: -78.509308,
    },
  },
  {
    id: 2,
    name: "Slaughter Recreation Center",
    isRecent: false,
    isSaved: false,
    location: {
      latitude: 38.034861910633325,
      longitude: -78.51793043622159,
    },
  },
  {
    id: 3,
    name: "Snyder Tennis Courts",
    isRecent: false,
    isSaved: true,
    location: {
      latitude: 38.03853759382077,
      longitude: -78.50646263180232,
    },
  },
  {
    id: 4,
    name: "Thornton Hall",
    isRecent: false,
    isSaved: true,
    location: {
      latitude: 38.03286,
      longitude: -78.50996,
    },
  },
  {
    id: 5,
    name: "Clemons Library",
    isRecent: true,
    isSaved: false,
    location: {
      latitude: 38.0363754,
      longitude: -78.5061131,
    },
  },
  {
    id: 6,
    name: "Wilson Hall",
    isRecent: true,
    isSaved: false,
    location: {
      latitude: 38.0324774,
      longitude: -78.504062,
    },
  },
  {
    id: 7,
    name: "Aquatic & Fitness Center",
    isRecent: true,
    isSaved: false,
    location: {
      latitude: 38.0329403,
      longitude: -78.5134577,
    },
  },
];

export const lotTypes = ["free", "paid", "permit"] as const;
export type LotTypes = (typeof lotTypes)[number];

export type ParkingLot = {
  name: string;
  type: LotTypes;
  open: boolean;
  capacity?: number;
  location: {
    latitude: number;
    longitude: number;
  };
};

export const lots: ParkingLot[] = [
  {
    name: "Central Grounds Garage",
    type: "free",
    open: true,
    capacity: 0.8,
    location: {
      latitude: 38.036319,
      longitude: -78.507547,
    },
  },
  {
    name: "East A",
    type: "free",
    open: true,
    capacity: 0.4,
    location: {
      latitude: 38.031566,
      longitude: -78.511971,
    },
  },
  {
    name: "South Lot",
    type: "free",
    open: true,
    capacity: 0.7,
    location: {
      latitude: 38.030935,
      longitude: -78.511463,
    },
  },
  {
    name: "Slaughter Bike Rack",
    type: "free",
    open: false,
    capacity: 0.5,
    location: {
      latitude: 38.03517412489812,
      longitude: -78.517911953603,
    },
  },
  {
    name: "Life Sciences Lot",
    type: "free",
    open: true,
    capacity: 0.2,
    location: {
      latitude: 38.032395,
      longitude: -78.512439,
    },
  },
];

export const INITIAL_VIEWPORT = {
  latitude: 38.035629,
  longitude: -78.508403,
  zoom: 14,
};

export type Filters = {
  free: boolean;
  paid: boolean;
  permit: boolean;
  open: boolean;
};

export type Viewport = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Report = {
  id: number;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type Store = {
  filters: Filters;
  updateFilters: (to: Filters) => void;
  viewport: Viewport;
  setViewport: (to: Viewport) => void;
  reports: Report[];
  setReports: (to: Report[]) => void;
};

export const useStore = create<Store>((set) => ({
  filters: {
    free: true,
    paid: true,
    permit: true,
    open: false,
  },
  viewport: INITIAL_VIEWPORT,
  reports: [
    {
      id: 0,
      location: {
        latitude: 38.030569,
        longitude: -78.511776,
      },
    },
  ],
  updateFilters: (to) => set({ filters: to }),
  setViewport: (to) => set({ viewport: to }),
  setReports: (to) => set({ reports: to }),
}));
