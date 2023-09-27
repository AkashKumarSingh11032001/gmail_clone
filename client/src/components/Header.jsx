import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";

const StyledAppBar = styled(AppBar)`
    background: #f5F5F5;
    box-shadow: none;
`;

const Header = () => {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action"/>
          <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
