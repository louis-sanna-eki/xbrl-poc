"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import cikEntityPairs from "../data/cik_entity_pairs.json";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const options: { value: string; label: string }[] = [];
for (const [cik, name] of cikEntityPairs) {
  options.push({ value: cik, label: name } as { value: string; label: string });
}

export function Search({ value, setValue }: { value: string; setValue: any }) {
  const [open, setOpen] = React.useState(false);

  console.log(cikEntityPairs);
  console.log(options);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full rounded-lg border m-auto"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select company..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" style={{ minWidth: "950px" }}>
        <Command>
          <CommandInput placeholder="Search company..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {/* TODO: find implem that scales */}
            {options.slice(0, 10).map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
