import React from "react";
import Button from "@material-ui/core/Button";

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
      {/* <Button
        href="https://codecanyon.net/cart/configure_before_adding/20978545?license=regular&ref=phpbits&size=source&support=bundle_12month&_ga=2.172338659.1340179557.1515677375-467259501.1481606413"
        target="_blank"
        size="small"
        color="primary"
      >
        <IntlMessages id="eCommerce.buyNow" />
      </Button> */}
    </footer>
  );
};
export default Footer;
