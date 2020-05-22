import React from "react";
import { IconButton, IconButtonProps } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

export const ClearButton: React.FC<IconButtonProps> = (props) => (
  <IconButton {...props}>
    <ClearIcon />
  </IconButton>
);
