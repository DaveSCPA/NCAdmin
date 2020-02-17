import React from "react";
import Button from "@material-ui/core/Button";
import Tab from "@material-ui/core/Tab";
import { Paper, Tabs } from "@material-ui/core";

const Footer = () => {
  return (
    <footer className="app-footer">
      <span className="d-inline-block">
        Copyright &copy; 2020 Watered Gardens | Neighbor Connect
      </span>

      <Paper>
        <Tabs>
          value={0}
          indicatorColor="app-primary" textColor="secondary" centered
          <Tab label="Add" />
          <Tab label="Edit" />
          <Tab label="List" />
          <Tab label="Map" />
        </Tabs>
      </Paper>
      <Button
        href="mailto:davesmithcpaphd@gmail.com?Subject=Support%20Request!"
        target="_blank"
        size="small"
        color="primary"
      >
        Support
      </Button>
    </footer>
  );
};
export default Footer;
