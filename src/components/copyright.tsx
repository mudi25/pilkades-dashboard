import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
const Copyright: React.FunctionComponent = () => {
  return (
    <Typography
      variant="body2"
      style={{
        color: "#ffffff",
      }}
      align="center"
    >
      {"Copyright © "}
      <Link
        style={{
          color: "#ffffff",
        }}
        href="https://material-ui.com/"
      >
        Super Web App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
export default Copyright;
