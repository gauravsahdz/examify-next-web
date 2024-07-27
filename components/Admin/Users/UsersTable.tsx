"use client";
import Table from "@components/Table/Table";
import React from "react";

const UsersTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Verified",
      dataIndex: "verified",
      key: "verified",
    },
  ];

  const data = [
    {
      name: "John Doe",
      email: "demo@gmail.com",
      phone: 9876765456,
      role: "user",
      verified: true,
    },
    {
      name: "Tina Mishra",
      email: "tina@gmail.com",
      phone: 9876765433,
      role: "user",
      verified: false,
    },
  ];

  const booleanTextMap = {
    verified: {
      trueText: "Yes",
      falseText: "No",
    },
  };

  return (
    <Table
      columns={columns}
      data={data}
      headerFixed={true}
      rowHoverEffect={true}
      booleanTextMap={booleanTextMap}
    />
  );
};

export default UsersTable;
