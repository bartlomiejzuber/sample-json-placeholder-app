import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { User } from "types/user";

interface SearchResultsItemProps {
  index: number;
  data: User;
}

const useStyles = makeStyles((theme) => ({
  listItemAvatar: {
    minWidth: theme.spacing(5),
  },
  avatar: {
    width: theme.spacing(3.25),
    height: theme.spacing(3.25),
    fontSize: theme.typography.body2.fontSize
  },
}));

export const SearchResultsItem: React.FC<SearchResultsItemProps> = ({
  index,
  data: { name, username },
}) => {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemAvatar className={classes.listItemAvatar}>
        <Avatar className={classes.avatar}>{index}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={`@${username}`} />
    </ListItem>
  );
};
