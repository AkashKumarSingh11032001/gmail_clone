import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import { Box, List, Checkbox } from "@mui/material";
import Email from "./Email";
import { DeleteOutline } from "@mui/icons-material";

const Emails = () => {
  const { openDrawer } = useOutletContext();
  const { type } = useParams();

  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const deleteEmailsService = useApi(API_URLS.deleteEmails);
  const moveEmailsToBin = useApi(API_URLS.moveEmailsToBin);

  const [starredEmail, setStarredEmail] = useState(false);
  const [selectedEmails, setSelectedEmails] = useState([]);

  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type,starredEmail]);


  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailsService?.response?.map((email) => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  };

  const deleteSelectedEmails = () => {
    if (type === "bin") {
      deleteEmailsService.call(selectedEmails);
    } else {
      moveEmailsToBin.call(selectedEmails);
    }
    setStarredEmail((prevState) => !prevState);
  };

  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "100%" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
        <DeleteOutline onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <List>
        {getEmailsService?.response?.map((email) => (
          <Email
            email={email}
            key={email._id}
            setStarredEmail={setStarredEmail}
            selectedEmails={selectedEmails}
            setSelectedEmails={setSelectedEmails}
          />
        ))}
      </List>
    </Box>
  );
};

export default Emails;
