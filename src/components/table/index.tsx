import 'regenerator-runtime/runtime';
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";

import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight
} from "react-icons/fi";
import React, { useRef, useState } from "react";
import {
  useAsyncDebounce,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable
} from "react-table";



export function AppTable({ columns, data, searchEnabled }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    canPreviousPage,
    canNextPage,
    page,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, globalFilter },
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  /* SEARCH */

  const inputRef: any = useRef();
  const [searchValue, setsearchValue] = useState(globalFilter);
  const onSearchInputChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);
  return (
    <>
      {searchEnabled && (
        <Box mb={"20px"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
            />
            <Input
              ref={inputRef}
              type="text"
              value={searchValue || ""}
              onChange={(e) => {
                setsearchValue(inputRef.current.value);
                onSearchInputChange(inputRef.current.value);
              }}
              placeholder={`Search...`}
            />
            {searchValue && (
              <InputRightElement
                cursor={"pointer"}
                onClick={() => {
                  setGlobalFilter("");
                  setsearchValue("");
                }}
              />
            )}
          </InputGroup>
        </Box>
      )}

      <TableContainer >
        <Table boxShadow={"lg"} borderRadius={"10px"} variant={"simple"} size="md" {...getTableProps()} colorScheme={"orange"}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <Flex align={"center"} gap={"10px"}>
                      <Box as="span"> {column.render("Header")} </Box>
                      <Box ml={2} as="span">
                        {column?.canFilter ? column.render("Filter") : null}
                      </Box>
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        {pageCount > 1 && (
          <Flex align={"right"} justify={"end"} mt={"40px"} gap={"5px"}>
            <Text mr={2} fontSize="sm">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </Text>
            <Button
              size={"xs"}
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
            >
              <Icon boxSize={4} as={FiChevronsLeft} />
            </Button>{" "}
            <Button
              size={"xs"}
              onClick={() => previousPage()}
              isDisabled={!canPreviousPage}
            >
              <Icon boxSize={4} as={FiChevronLeft} />
            </Button>{" "}
            <Button
              size={"xs"}
              onClick={() => nextPage()}
              isDisabled={!canNextPage}
            >
              <Icon boxSize={4} as={FiChevronRight} />
            </Button>{" "}
            <Button
              size={"xs"}
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
            >
              <Icon boxSize={4} as={FiChevronsRight} />
            </Button>{" "}
          </Flex>
        )}
      </TableContainer>
    </>
  );
}

