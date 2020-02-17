import React from "react";
import Button from "@material-ui/core/Button";
import Tab from "@material-ui/core/Tab";

const Footer = () => {
  return (
    <footer className="app-footer">
      <span className="d-inline-block">
        Copyright &copy; 2020 Watered Gardens | Neighbor Connect
      </span>

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
