import React from "react";
import { useState } from 'react';
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }
  return (
    <>
      <Header toggleDrawer={toggleDrawer}/>
      <SideBar openDrawer={openDrawer}/>
      <div>Display mails</div>
    </>
  );
};

export default Main;
