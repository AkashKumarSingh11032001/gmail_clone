import React from "react";
import { useState } from 'react';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Emails from "../components/Emails";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }
  return (
    <>
      <Header toggleDrawer={toggleDrawer}/>
      <SideBar openDrawer={openDrawer}/>
      <Emails openDrawer={openDrawer}/>
    </>
  );
};

export default Main;
