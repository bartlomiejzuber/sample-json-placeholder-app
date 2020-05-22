import React from "react";
import { IconButton, IconButtonProps } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const SearchButton: React.FC<IconButtonProps> = (props) => (
  <IconButton {...props}>
    <SearchIcon />
  </IconButton>
);
