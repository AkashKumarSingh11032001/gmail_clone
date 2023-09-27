import { Box } from "@mui/material";
import React from "react";
import { Button, List, ListItem, styled } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/sidebar.config.js";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "../routes/routes";

const ComposeButton = styled(Button)`
  background: #c2e7ff;
  color: #001d35;
  border-radius: 16px;
  padding: 15px;
  min-width: 140px;
  text-transform: none;
`;

const Container = styled(Box)({
    padding: 8,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer'
    },
    '& > ul > li > svg': {
            marginRight: 20,
        }
    }
)

const SideBarContent = () => {
  const { type } = useParams();
  return (
    <Container>
      <Box>
        <ComposeButton>
          <CreateOutlined style={{ marginRight: 10 }} />
          Compose
        </ComposeButton>
      </Box>

      <List>
        {SIDEBAR_DATA.map((data) => (
            <ListItem
            style={
              type === data.name.toLowerCase()
                ? {
                    backgroundColor: "#d3e3fd",
                    borderRadius: "0 16px 16px 0",
                  }
                : {}
            }
          >
            <data.icon fontSize="small" />
            {data.title}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SideBarContent;
