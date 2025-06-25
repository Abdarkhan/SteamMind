import React from "react";
import Hero from "@/components/Hero";
import CustomTabs from "@/components/CustomTabs";
import Instructor from "./components/Instructor";
import CustomTable from "@/components/CustomTable";
import { INS_HEADER, INS_ROWS, STD_HEADER, STD_ROWS } from "@/constants/contents";
import Students from "./components/Students";
import AccessRole from "./components/AccessRole";

const ManageUserContainer = () => {
  // const { counter, incrementCounter, decrementCounter } = useManageUser();

  const tabs = [
    { label: "Instructors", value: 0, children: <Instructor/> },
    { label: "Student", value: 1, children: <Students /> },
    { label: "Access Role", value: 2, children: <AccessRole/> },
  ];

  return (
    <>
      {/* <div>
        <p>{counter}</p>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div> */}
      <Hero title="User Management" />
      <CustomTabs options={tabs} isChild />
      if (value = 0) {
      <CustomTable headers={INS_HEADER} rows={INS_ROWS} />
      }else if (value = 1) {
      <CustomTable headers={STD_HEADER} rows={STD_ROWS} />
        
      }
      {/* <CustomTabs options={tabs1} width='100%' /> */}
      {/* <CustomTabs options={Subtabs} width="60%" /> */}
    </>
  );
};

export default ManageUserContainer;
