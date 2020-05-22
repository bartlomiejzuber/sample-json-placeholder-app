import React from "react";
import { List, Box, Grow } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { User } from "types/user";
import { SearchResultsItem } from "components/SearchResultsItem";

interface SearchResultsProps {
  users: User[];
  skeleton?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    margin: theme.spacing(2, 0),
    backgroundColor: theme.palette.background.paper,
  },
}));

const skeletonsArray = Array(5)
  .fill(0)
  .map((_, index) => index);
export const SearchResults: React.FC<SearchResultsProps> = ({
  users,
  skeleton,
}) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {users.map((user, index) => (
        <Grow in timeout={250 * index} key={user.id}>
          <Box>
            <SearchResultsItem data={user} index={index + 1} />
          </Box>
        </Grow>
      ))}
      {skeleton &&
        skeletonsArray.map((index) => (
          <Grow in timeout={250 * index} key={`skeleton-${index}`}>
            <Box display="flex" paddingY={1.5} key={index}>
              <Box paddingLeft={2}>
                <Skeleton variant="circle" width={26} height={26} />
              </Box>
              <Box paddingX={0.5} flex={1} flexDirection="column">
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="50%" />
              </Box>
            </Box>
          </Grow>
        ))}
    </List>
  );
};
