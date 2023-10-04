import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const Emails = () => {
  const { openDrawer } = useOutletContext();
  const { type } = useParams();

  const getEmailsService = useApi(API_URLS.getEmailFromType);
  // const deleteEmailsService = useApi(API_URLS.deleteEmails);
  // const moveEmailsToBin = useApi(API_URLS.moveEmailsToBin);

  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type]);

  return (
    <div
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }
    >
      Emails
    </div>
  );
};

export default Emails;
