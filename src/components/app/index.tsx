import 'regenerator-runtime/runtime';
import {
  Button,
  Badge,
} from "@chakra-ui/react";
import { AppTable, SelectColumnFilter } from "@components";
import React, { useMemo } from "react";

export function App(props) {
  const data = useMemo(
    () => [
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Failed",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Paid",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Waiting",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Failed",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Failed",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Paid",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Waiting",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Failed",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Waiting",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Paid",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Paid",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Waiting",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Failed",
        name: Math.random().toString(25).substring(2, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Waiting",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Paid",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },
      {
        timeStamp: Math.floor(Math.random() * 60) + " minutes ago",
        purchcaseID: Math.floor(Math.random() * 100000000),
        mail: Math.random().toString(36).substring(3, 15) + "@gmail.com",
        status: "Paid",
        name: Math.random().toString(25).substring(6, 26),
        source: "google",
        select: ""
      },


    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Timestamp.",
        accessor: "timeStamp",
        Filter: "",
        filter: ""
      },
      {
        Header: "Purchase ID",
        accessor: "purchcaseID",
        Filter: "",
        filter: ""
      },
      {
        Header: "Mail",
        accessor: "mail",
        Filter: "",
        filter: ""
      },
      {
        Header: "Name",
        accessor: "name",
        Filter: "",
        filter: ""

      },

      {
        Header: "Source",
        accessor: "source",
        Filter: "",
        filter: ""

      },
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectColumnFilter,
        filter: "",
        disableSortBy: true,
        Cell: ({ row: { original } }) => (
          <Badge
            size={"xs"}
            borderRadius={"10px"}
            colorScheme={original.status === "Paid" ? "green" : (original.status === "Waiting" ? "yellow" : "red")}
          >
            {original.status}
          </Badge>
        )
      },
      {
        Header: "Select",
        accessor: "select",
        Filter: "",
        filter: "",
        disableSortBy: true,
        Cell: ({ row: { original } }) => (
          <Button
            colorScheme="orange"
            borderRadius={"2xl"}

            size={"sm"}
            onClick={() => alert(JSON.stringify(original))}
          >
            Select
          </Button>
        )
      }
    ],
    []
  );

  return (
    <div className="App" style={{ padding: "20px" }}>
      <AppTable columns={columns} data={data} searchEnabled={true} />
    </div>
  );
}