import { useState } from "react";

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { places } from "@/lib/store";
import { useRouter } from "@tanstack/react-router";
import { CloseIcon } from "./icons/CloseIcon";

export function SearchBox() {
  const router = useRouter();
  const [locationInput, setLocationInput] = useState("");
  const suggestions = places
    .filter((place) =>
      place.name.toLowerCase().startsWith(locationInput.toLowerCase())
    )
    .slice(0, 5);
  const recents = places.filter((place) => place.isRecent);
  const saved = places.filter((place) => place.isSaved);

  return (
    <>
      <Command shouldFilter={false} className="group">
        <CommandInput
          autoFocus
          placeholder="Find bike racks near..."
          value={locationInput}
          onValueChange={setLocationInput}
        >
          <button
            type="button"
            className="ml-auto"
            onClick={() => {
              router.navigate({ to: "/" });
            }}
          >
            <CloseIcon className="h-5 w-5 shrink-0 opacity-50" />
          </button>
        </CommandInput>
        <CommandList className="px-1">
          {!locationInput ? (
            <>
              <CommandGroup heading="Favourite Places">
                {saved.map((place) => (
                  <CommandItem
                    key={place.id}
                    className="cursor-pointer"
                    value={place.name}
                    onSelect={() => {
                      router.navigate({
                        to: `/search/${place.id}`,
                      });
                    }}
                  >
                    <div>{place.name}</div>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Recent Searches">
                {recents.map((place) => (
                  <CommandItem
                    key={place.id}
                    onSelect={() => {
                      router.navigate({
                        to: `/search/${place.id}`,
                      });
                    }}
                  >
                    <div>{place.name}</div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          ) : suggestions.length > 0 ? (
            <CommandGroup heading="Results">
              {suggestions.map((suggestion) => (
                <CommandItem
                  key={suggestion.id}
                  onSelect={() => {
                    router.navigate({
                      to: `/search/${suggestion.id}`,
                    });
                  }}
                >
                  <div>{suggestion.name}</div>
                </CommandItem>
              ))}
            </CommandGroup>
          ) : (
            <div className="py-6 text-center text-sm">No results found.</div>
          )}
        </CommandList>
      </Command>
    </>
  );
}
