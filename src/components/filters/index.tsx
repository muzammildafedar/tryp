import 'regenerator-runtime/runtime';
import React, { useMemo } from "react";
import {
  Select,
} from "@chakra-ui/react";
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id }
}) {
  const options: any = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <Select
      size={"xs"}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      variant={"outline"}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}