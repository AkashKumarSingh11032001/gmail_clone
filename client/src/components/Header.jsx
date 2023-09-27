import React from "react";
import { AppBar, Box, InputBase, Toolbar, styled } from "@mui/material";
import { Menu as MenuIcon, Search, Tune,HelpOutlineOutlined, SettingsOutlined,AppsOutlined, AccountCircleOutlined } from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";

const StyledAppBar = styled(AppBar)`
  background: #f5f5f5;
  box-shadow: none;
`;

const SearchWrapper = styled(Box)`
  background: #eaf1fb;
  margin-left: 80px;
  border-radius: 8px;
  min-width: 690px;
  max-width: 720px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  & > div {
    width: 100%;
    padding: 20px;
  }
`;

const OptionsWrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`

const Header = () => {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          {/* Component 1 */}
          <MenuIcon color="action" />
          
          {/* Component 2 */}
          <img
            src={gmailLogo}
            alt="logo"
            style={{ width: 110, marginLeft: 15 }}
          />
           
          {/* Component 3 */}
          <SearchWrapper>
            <Search color="action"/>
            <InputBase placeholder="Search mail"/>
            <Tune color="action"/>
          </SearchWrapper>

          {/* Component 4 */}
          <OptionsWrapper>
            <HelpOutlineOutlined color="action"/>
            <SettingsOutlined color="action" />
            <AppsOutlined color="action" />
            <AccountCircleOutlined color="action" />
          </OptionsWrapper>

        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
